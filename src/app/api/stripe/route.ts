import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/server/session';
import { PrismaClient } from '@/generated/prisma';

// Node.js runtime for raw body parsing, if needed
export const runtime = 'nodejs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });
const prisma = new PrismaClient();

// Conversion rate: 1 credit = €0.01 (1 cent)
const CENTS_PER_CREDIT = 1;
// Minimum credits to purchase
const MIN_CREDITS = 10;

/**
 * POST /api/stripe
 * Create a Stripe Checkout Session to purchase credits for an API key.
 * Body: { apiKeyId: string, credits: number }
 */
export async function POST(req: Request) {
  const { user } = await getCurrentSession();
  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const { apiKeyId, credits } = body;
  if (typeof apiKeyId !== 'string' || !Number.isInteger(credits) || credits < MIN_CREDITS) {
    return NextResponse.json({ error: 'Invalid apiKeyId or credits (min ' + MIN_CREDITS + ')' }, { status: 400 });
  }
  // Verify API key ownership
  const apiKey = await prisma.apiKey.findUnique({ where: { id: apiKeyId } });
  if (!apiKey || apiKey.ownerId !== user.id) {
    return NextResponse.json({ error: 'API key not found' }, { status: 404 });
  }
  // Calculate amount in cents
  const amount = credits * CENTS_PER_CREDIT;
  // Create Stripe Checkout Session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'eur',
        product_data: { name: `${credits} Credits for API Key` },
        unit_amount: amount,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${req.url.replace(/\/stripe.*$/, '')}/settings?payment=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.url.replace(/\/stripe.*$/, '')}/settings?payment=cancelled`,
    metadata: { apiKeyId, credits: credits.toString() },
  });
  return NextResponse.json({ url: session.url });
}
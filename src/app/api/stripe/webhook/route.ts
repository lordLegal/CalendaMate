import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '@/lib/server/prisma';
import stripe from '@/lib/server/stripe';

export const config = {
  api: { bodyParser: false },
};

/**
 * Stripe webhook for subscription lifecycle and checkout sessions
 */
export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature') || '';
  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err);
    return NextResponse.json(
      { error: `Webhook error: ${err instanceof Error ? err.message : String(err)}` },
      { status: 400 }
    );
  }

  // Subscription events
  if (event.type.startsWith('customer.subscription.')) {
    const sub = event.data.object as Stripe.Subscription;
    const uid = sub.metadata.userId;
    if (uid) {
      const currentPeriodEndDate = sub.ended_at
        ? new Date(sub.ended_at * 1000)
        : (() => {
            const d = new Date(sub.start_date * 1000);
            d.setMonth(d.getMonth() + 1);
            return d;
          })();
      const record = {
        stripeSubscriptionId: sub.id,
        stripeCustomerId: sub.customer as string,
        status: sub.status,
        priceId: sub.items.data[0]?.price.id,
        currentPeriodEnd: currentPeriodEndDate,
      };
      try {
        await prisma.subscription.upsert({
          where: { stripeSubscriptionId: sub.id },
          update: record,
          create: { userId: parseInt(uid, 10), ...record },
        });
      } catch (e) {
        console.error('Error upserting subscription:', e);
      }
    }
  }

  // Checkout session completed events
  if (event.type === 'checkout.session.completed') {
    const sess = event.data.object as Stripe.Checkout.Session;
    const meta = sess.metadata || {};
    const apiKeyId = meta.apiKeyId as string | undefined;
    const creditsRaw = meta.credits as string | undefined;
    const credits = creditsRaw ? parseInt(creditsRaw, 10) : 0;
    if (apiKeyId && credits > 0) {
      try {
        await prisma.apiKey.update({
          where: { id: apiKeyId },
          data: { credits: { increment: credits } },
        });
      } catch (e) {
        console.error('Error updating API key credits:', e);
      }
    }
  }

  return NextResponse.json({ received: true });
}
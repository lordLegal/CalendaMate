import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '@/lib/server/prisma';
import stripe from '@/lib/server/stripe';

export const config = {
  api: { bodyParser: false },
};
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
/**
 * Stripe webhook for subscription lifecycle and checkout sessions
 */
export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature') || '';
  const body = await req.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      Buffer.from(body, 'utf8'),
      sig,
      webhookSecret
    );
  } catch (err) {
    console.error('Signature verification failed:', err);
    return NextResponse.json(
      { error: `Stripe webhook signature error: ${(err as Error).message}` },
      { status: 400 }
    );
  }

  try {
    // --- 1) Checkout Session Completed ---
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const metadata = session.metadata || {};
      const userId = metadata.userId ? parseInt(metadata.userId, 10) : null;

      if (!userId) {
        console.warn('Missing userId in checkout.session.completed metadata');
      }

      // Subscription checkout
      if (
        session.mode === 'subscription' &&
        typeof session.subscription === 'string' &&
        userId
      ) {
        const subscriptionId = session.subscription;
        const fullSession = await stripe.checkout.sessions.retrieve(
          session.id,
          { expand: ['line_items.data.price'] }
        );
        const priceId =
          fullSession.line_items?.data?.[0]?.price?.id || undefined;

        await prisma.subscription.upsert({
          where: { userId },
          create: {
            userId,
            stripeSubscriptionId: subscriptionId,
            stripeCustomerId: session.customer as string,
            status: 'active',
            priceId: priceId || '',
            currentPeriodEnd: new Date((session.expires_at || 0) * 1000)
          },
          update: {
            status: 'active',
            priceId: priceId || undefined,
            currentPeriodEnd: new Date((session.expires_at || 0) * 1000)
          }
        });
      }

      // One-time payment for API credits
      if (
        session.mode === 'payment' &&
        metadata.userId &&
        metadata.credits
      ) {
        const credits = parseInt(metadata.credits, 10);
        const uid = parseInt(metadata.userId, 10);
        if (!isNaN(credits) && uid) {
          await prisma.apiCreditsPurchase.create({
            data: { userId: uid, credits }
          });
        }
      }
    }

    // --- 2) Subscription lifecycle events ---
    if (event.type.startsWith('customer.subscription.')) {
      const sub = event.data.object as Stripe.Subscription;
      const metadata = sub.metadata || {};
      const userId = metadata.userId ? parseInt(metadata.userId, 10) : null;

      if (userId) {
        const priceId = sub.items.data?.[0]?.price?.id || undefined;
        const record = {
          stripeSubscriptionId: sub.id,
          stripeCustomerId: sub.customer as string,
          status: sub.status,
          priceId: priceId || '',
          // Use billing_cycle_anchor for period end
          currentPeriodEnd: new Date(sub.billing_cycle_anchor * 1000)
        };
        await prisma.subscription.upsert({
          where: { userId },
          // Create a new subscription record if it doesn't exist, or update the existing one
          create: { userId, ...record },
          update: record
        });
      }
    }

    // --- 3) Invoice events: pause/resume subscription or handle one-time invoices ---
    if (
      event.type === 'invoice.payment_failed' ||
      event.type === 'invoice.payment_succeeded'
    ) {
      const invoice = event.data.object as Stripe.Invoice & { subscription?: string };
      const subscriptionId = invoice.subscription || null;
      const metadata = invoice.metadata || {};

      // Handle subscription invoice
      if (subscriptionId) {
        if (event.type === 'invoice.payment_failed') {
          await stripe.subscriptions.update(subscriptionId, {
            pause_collection: { behavior: 'void' }
          });
          await prisma.subscription.updateMany({
            where: { stripeSubscriptionId: subscriptionId },
            data: { status: 'paused' }
          });
        } else if (event.type === 'invoice.payment_succeeded') {
          await stripe.subscriptions.update(subscriptionId, { pause_collection: '' });
          await prisma.subscription.updateMany({
            where: { stripeSubscriptionId: subscriptionId },
            data: { status: 'active' }
          });
        }
      } 

      // Handle one-time credit invoice on payment success
      else if (
        event.type === 'invoice.payment_succeeded' &&
        metadata.userId &&
        metadata.credits
      ) {
        const uid = parseInt(metadata.userId, 10);
        const credits = parseInt(metadata.credits, 10);
        if (uid && !isNaN(credits)) {
          await prisma.apiCreditsPurchase.create({ data: { userId: uid, credits } });
        }
      }
    }

  } catch (err) {
    console.error('Error handling webhook event:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
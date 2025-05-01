import { NextResponse } from 'next/server'
import { getCurrentSession } from '@/lib/server/session'
import prisma from '@/lib/server/prisma'
import stripe from '@/lib/server/stripe'
import { globalGETRateLimit } from '@/lib/server/requests'

export async function POST() {
  if (!globalGETRateLimit()) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const { session, user } = await getCurrentSession();

  if (user === null) {
    return NextResponse.redirect("/login");
  }

  if (user.registered2FA && !session?.twoFactorVerified) {
    return NextResponse.redirect("/2fa");
  }
  if (!user.emailVerified) {
    return NextResponse.redirect("/verify-email");
  }
  if (session === null) {
    return NextResponse.redirect("/login");
  }

  let customerId: string
  // find or create Stripe customer
  const existing = await prisma.subscription.findUnique({ where: { userId: user.id } })
  if (existing?.stripeSubscriptionId) {
    return NextResponse.json({ error: 'Already subscribed' }, { status: 400 })
  }
  if (existing?.stripeCustomerId) {
    customerId = existing.stripeCustomerId
  } else {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { userId: user.id },
    })
    customerId = customer.id
    await prisma.subscription.upsert({
      where: { userId: user.id },
      update: { stripeCustomerId: customerId },
      create: {
        userId: user.id,
        stripeCustomerId: customerId,
        status: 'pending',
        priceId: process.env.STRIPE_PRICE_ID!,
        stripeSubscriptionId: '',
        currentPeriodEnd: new Date(),
      },
    })
  }

  // Create checkout session
  const sessionStripe = await stripe.checkout.sessions.create({
    customer: customerId,
    subscription_data: { metadata: { userId: user.id } },
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/subscription/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/subscription/cancel`,
    metadata: { userId: user.id },
    allow_promotion_codes: true,
  })

  return NextResponse.json({ url: sessionStripe.url })
}
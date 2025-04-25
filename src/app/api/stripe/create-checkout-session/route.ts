import { NextResponse } from 'next/server'
import { getCurrentSession } from '@/lib/server/session'
import prisma from '@/lib/server/prisma'
import stripe from '@/lib/server/stripe'

export async function POST() {
  const { user } = await getCurrentSession()
  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  let customerId: string
  // find or create Stripe customer
  const existing = await prisma.subscription.findUnique({ where: { userId: user.id } })
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
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    subscription_data: { metadata: { userId: user.id } },
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/subscription/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/subscription/cancel`,
  })

  return NextResponse.json({ url: session.url })
}
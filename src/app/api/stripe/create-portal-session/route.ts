import { NextResponse } from 'next/server'
import { getCurrentSession } from '@/lib/server/session'
import prisma from '@/lib/server/prisma'
import stripe from '@/lib/server/stripe'

export async function POST() {
    const { user } = await getCurrentSession()
    if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const sub = await prisma.subscription.findUnique({ where: { userId: user.id } })
    if (!sub?.stripeCustomerId) {
    return NextResponse.json({ error: 'No subscription on record' }, { status: 400 })
    }

    const portalSession = await stripe.billingPortal.sessions.create({
    customer: sub.stripeCustomerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings`,
    })

    return NextResponse.json({ url: portalSession.url })
}
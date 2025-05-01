// app/api/auth/google/callback/route.ts
import { NextResponse } from 'next/server';
import { getTokensFromCode } from '@/lib/server/google';
import prisma from '@/lib/server/prisma';
import { getCurrentSession } from '@/lib/server/session';
import { CalendarProvider } from '@/generated/prisma';

export async function GET(request: Request) {
  const { session, user } = await getCurrentSession()
  if (user === null) {
    return NextResponse.redirect('/login');
  }
  if (user.registered2FA && !session?.twoFactorVerified) {
    return NextResponse.redirect('/2fa');
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  if (!code) return NextResponse.json({ error: 'Missing code' }, { status: 400 });

  const tokens = await getTokensFromCode(code);
  if (!tokens) return NextResponse.json({ error: 'Invalid code no token' }, { status: 400 });
  if (!tokens.access_token) return NextResponse.json({ error: 'Invalid tokens acces_token' }, { status: 400 });
  await prisma.calendarAccount.upsert({
    where: { userId_provider: { userId: user.id, provider: CalendarProvider.GOOGLE } },
    update: {
      accessToken: tokens.access_token,
      providerAccountId: CalendarProvider.GOOGLE,
      refreshToken: tokens.refresh_token,
      expiresAt: tokens.expiry_date ? new Date(tokens.expiry_date) : null,
    },
    create: {
      userId: user.id,
      providerAccountId: CalendarProvider.GOOGLE, // Add a valid providerAccountId value
      accessToken: tokens.access_token ?? '',
      refreshToken: tokens.refresh_token,
      expiresAt: new Date(tokens.expiry_date ?? 0),
    },
  });
  return NextResponse.json(tokens);
}
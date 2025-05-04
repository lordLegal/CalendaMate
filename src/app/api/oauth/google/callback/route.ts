// app/api/auth/google/callback/route.ts
import { NextResponse } from 'next/server';
import { getCalendarEvents, getTokensFromCode, listCalendars } from '@/lib/server/google';
import prisma from '@/lib/server/prisma';
import { getCurrentSession } from '@/lib/server/session';
import { CalendarProvider } from '@/generated/prisma';
import { calendar } from 'googleapis/build/src/apis/calendar';

export async function GET(request: Request) {
  const { session, user } = await getCurrentSession()
  if (user === null) {
    return NextResponse.redirect('/login');
  }
  if (user.registered2FA && !session?.twoFactorVerified) {
    return NextResponse.redirect('/2fa');
  }

  const code = new URL(request.url).searchParams.get('code');
  if (!code) return NextResponse.json({ error: 'Missing code' }, { status: 400 });

  const tokens = await getTokensFromCode(code);
  if (!tokens.access_token) return NextResponse.json({ error: 'Invalid tokens' }, { status: 400 });

  // hier die beiden Umrechnungen:
  const accessTokenExpiresAt = tokens.expiry_date
    ? new Date(tokens.expiry_date)
    : tokens.expiry_date
      ? new Date(Date.now() + tokens.expiry_date * 1000)
      : null;


  console.log(await prisma.calendarAccount.findUnique({
    where: { userId_provider: { userId: user.id, provider: CalendarProvider.GOOGLE } },
  }));
  const calendars = await listCalendars(tokens);
  console.log(calendars);

  if (calendars && calendars.length > 0 && typeof calendars[0].id === 'string') {
    console.log(await getCalendarEvents(tokens, calendars[0].id));
  } else {
    console.log('No valid calendar found.');
  }


  await prisma.calendarAccount.upsert({
    where: { userId_provider: { userId: user.id, provider: CalendarProvider.GOOGLE } },
    update: {
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      expiresAt: accessTokenExpiresAt,
    },
    create: {
      userId: user.id,
      providerAccountId: CalendarProvider.GOOGLE,
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      expiresAt: accessTokenExpiresAt,
    },
  });

  return NextResponse.redirect(new URL('/settings', request.url));
}
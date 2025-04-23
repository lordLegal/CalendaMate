import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, CalendarProvider } from '@/generated/prisma';
import { getCurrentSession } from '@/lib/server/session';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const stored = req.cookies.get('oauth_state')?.value;
  if (!code || state !== stored) {
    return NextResponse.redirect('/settings?error=oauth_state_mismatch');
  }
  const response = NextResponse.redirect('/settings?connected=microsoft');
  response.cookies.delete('oauth_state');
  const redirectUri = `${req.nextUrl.origin}/api/oauth/microsoft/callback`;
  // Exchange code for tokens
  const tokenRes = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.MICROSOFT_CLIENT_ID!,
      client_secret: process.env.MICROSOFT_CLIENT_SECRET!,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    }),
  });
  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token as string;
  const refreshToken = tokenData.refresh_token as string | undefined;
  const expiresAt = tokenData.expires_in
    ? new Date(Date.now() + tokenData.expires_in * 1000)
    : null;
  // Fetch Microsoft user info
  const uiRes = await fetch('https://graph.microsoft.com/v1.0/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const ui = await uiRes.json();
  const providerAccountId = ui.id as string;
  // Get current session & user
  const { user } = await getCurrentSession();
  if (!user) {
    return NextResponse.redirect('/login');
  }
  // Upsert CalendarAccount
  await prisma.calendarAccount.upsert({
    where: { userId_provider: { userId: user.id, provider: CalendarProvider.MICROSOFT } },
    update: { providerAccountId, accessToken, refreshToken, expiresAt, calendarId: 'primary' },
    create: {
      userId: user.id,
      provider: CalendarProvider.MICROSOFT,
      providerAccountId,
      accessToken,
      refreshToken,
      expiresAt,
      scope: tokenData.scope as string,
      calendarId: 'primary',
    },
  });
  return response;
}
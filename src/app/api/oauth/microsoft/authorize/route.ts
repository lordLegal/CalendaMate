import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET(req: NextRequest) {
  const state = uuidv4();
  const redirectUri = `${req.nextUrl.origin}/api/oauth/microsoft/callback`;
  const url = new URL('https://login.microsoftonline.com/common/oauth2/v2.0/authorize');
  url.searchParams.set('client_id', process.env.MICROSOFT_CLIENT_ID!);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', 'https://graph.microsoft.com/Calendars.ReadWrite offline_access');
  url.searchParams.set('state', state);
  const response = NextResponse.redirect(url.toString());
  // Use __Host- prefix for OAuth state, per provider
  response.cookies.set('__Host-oauth_state_microsoft', state, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 15,
  });
  return response;
}
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET(req: NextRequest) {
  // Generate state and store in cookie
  const state = uuidv4();
  // Build Google OAuth2 authorization URL
  const redirectUri = `${req.nextUrl.origin}/api/oauth/google/callback`;
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID!);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', 'https://www.googleapis.com/auth/calendar.events');
  url.searchParams.set('access_type', 'offline');
  url.searchParams.set('prompt', 'consent');
  url.searchParams.set('state', state);
  // Redirect with state cookie
  const response = NextResponse.redirect(url.toString());
  // Use __Host- prefix for OAuth state, per provider
  response.cookies.set('__Host-oauth_state_google', state, {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 15,
  });
  return response;
}
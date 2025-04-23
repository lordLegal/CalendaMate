import { PrismaClient, CalendarProvider } from '@/generated/prisma';
import { google } from 'googleapis';
// Using native fetch available in Node.js 18+ / Next.js runtime

const prisma = new PrismaClient();

// Insert an event into Google Calendar for a user
export async function insertGoogleEvent(userId: number, event: undefined) {
  const account = await prisma.calendarAccount.findUnique({
    where: { userId_provider: { userId, provider: CalendarProvider.GOOGLE } }
  });
  if (!account) throw new Error('Google Calendar not connected');
  // Refresh token if expired
  const oauth2 = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  oauth2.setCredentials({
    access_token: account.accessToken,
    refresh_token: account.refreshToken,
    expiry_date: account.expiresAt?.getTime()
  });
  // Automatically refreshes if needed
  const calendar = google.calendar({ version: 'v3', auth: oauth2 });
  // Insert event
  const res = await calendar.events.insert({
    calendarId: account.calendarId || 'primary',
    requestBody: event
  });
  return res.data;
}

// Insert an event into Microsoft Calendar for a user
export async function insertMicrosoftEvent(userId: number, event: undefined) {
  const account = await prisma.calendarAccount.findUnique({
    where: { userId_provider: { userId, provider: CalendarProvider.MICROSOFT } }
  });
  if (!account) throw new Error('Microsoft Calendar not connected');
  // Refresh token logic
  const params = new URLSearchParams({
    client_id: process.env.MICROSOFT_CLIENT_ID!,
    client_secret: process.env.MICROSOFT_CLIENT_SECRET!,
    grant_type: 'refresh_token',
    refresh_token: account.refreshToken!,
    scope: 'https://graph.microsoft.com/Calendars.ReadWrite'
  });
  const tokenRes = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params
  });
  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;
  // Update account tokens
  await prisma.calendarAccount.update({
    where: { userId_provider: { userId, provider: CalendarProvider.MICROSOFT } },
    data: { accessToken, refreshToken: tokenData.refresh_token, expiresAt: new Date(Date.now() + tokenData.expires_in * 1000) }
  });
  // Create event
  const apiRes = await fetch('https://graph.microsoft.com/v1.0/me/events', {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(event)
  });
  return await apiRes.json();
}
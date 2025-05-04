import { google } from 'googleapis';

export function createOAuth2Client() {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
}

export function getAuthUrl() {
  const oAuth2Client = createOAuth2Client();
  const scopes = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/tasks'];
  return oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    prompt: 'consent'
  });
}

export async function getTokensFromCode(code: string) {
  const oAuth2Client = createOAuth2Client();
  const { tokens } = await oAuth2Client.getToken(code);
  return tokens; // contains access_token, refresh_token, expiry_date...
}

export function getAuthorizedCalendar(tokens: any) {
  const oAuth2Client = createOAuth2Client();
  oAuth2Client.setCredentials(tokens);
  return google.calendar({ version: 'v3', auth: oAuth2Client });
}

// refreshToken 
export async function refreshAccessToken(tokens: any) {
    const oAuth2Client = createOAuth2Client();
    oAuth2Client.setCredentials(tokens);
    const { credentials } = await oAuth2Client.refreshAccessToken();
    return credentials; // contains access_token, refresh_token, expiry_date...
}

export async function listCalendars(tokens: any) {
  const calendar = getAuthorizedCalendar(tokens);
  const res = await calendar.calendarList.list({
    showHidden: true,
    });
  return res.data.items;
}
export async function getCalendarEvents(tokens: any, calendarId: string) {
  const calendar = getAuthorizedCalendar(tokens);
  const res = await calendar.events.list({
    calendarId: calendarId,
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  });
  return res.data.items;
}
import type { calendar_v3 } from 'googleapis';

export async function createCalendarEvent(tokens: any, calendarId: string, event: calendar_v3.Schema$Event) {
  const calendar = getAuthorizedCalendar(tokens);
  const res = await calendar.events.insert({
    calendarId: calendarId,
    requestBody: event,
  });
  return res.data;
}

export async function updateCalendarEvent(tokens: any, calendarId: string, eventId: string, event: calendar_v3.Schema$Event) {
  const calendar = getAuthorizedCalendar(tokens);
  const res = await calendar.events.update({
    calendarId: calendarId,
    eventId: eventId,
    requestBody: event,
  });
  return res.data;
}

export async function deleteCalendarEvent(tokens: any, calendarId: string, eventId: string) {
  const calendar = getAuthorizedCalendar(tokens);
  await calendar.events.delete({
    calendarId: calendarId,
    eventId: eventId,
  });
}
export async function getEventById(tokens: any, calendarId: string, eventId: string) {
  const calendar = getAuthorizedCalendar(tokens);
  const res = await calendar.events.get({
    calendarId: calendarId,
    eventId: eventId,
  });
  return res.data;
}
export async function getEventByIdWithAttendees(tokens: any, calendarId: string, eventId: string) {
  const calendar = getAuthorizedCalendar(tokens);
  const res = await calendar.events.get({
    calendarId: calendarId,
    eventId: eventId,
  });
  return res.data;
}


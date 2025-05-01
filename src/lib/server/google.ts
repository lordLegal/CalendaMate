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
  const scopes = ['https://www.googleapis.com/auth/calendar'];
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
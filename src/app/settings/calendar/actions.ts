// app/settings/components/actions.ts
"use server";

import prisma from "@/lib/server/prisma";
import { getCurrentSession } from "@/lib/server/session";
import { AccountType, CalendarProvider } from "@/generated/prisma";
import { createCalendarEvent } from "@/lib/server/google";

export async function saveLearningAccount(formData: FormData) {
  const { session, user } = await getCurrentSession();
  if (!user) throw new Error("Nicht eingeloggt.");

  if (session === null) throw new Error("Session nicht gefunden.");
  if (session.twoFactorVerified === false) throw new Error("2FA nicht verifiziert.");

  // Rate-Limit-Check

  if (!formData) throw new Error("Formular nicht gefunden.");
  if (!formData.has("type")) throw new Error("Typ nicht gefunden.");
  if (!formData.has("username")) throw new Error("Benutzername nicht gefunden.");
  if (!formData.has("password")) throw new Error("Passwort nicht gefunden.");
  if (!formData.has("school")) throw new Error("Schule nicht gefunden.");
  if (!formData.has("baseUrl")) throw new Error("Basis-URL nicht gefunden.");
  if (formData.get("type") !== AccountType.WEBUNTIS && formData.get("type") !== AccountType.MOODLE) {
    throw new Error("Ungültiger Typ.");
  }


  const type = formData.get("type") as AccountType;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const school = formData.get("school") as string;
  const baseUrl = formData.get("baseUrl") as string;


  await prisma.learningAccount.upsert({
    where: { userId_type: { userId: user.id, type } },
    update: { username, passwordHash: password, school, baseUrl },
    create: { userId: user.id, type, username, passwordHash: password, school, baseUrl },
  });
}

export async function testWebuntisSync() {
  const { session, user } = await getCurrentSession();
  if (!user) throw new Error("Nicht eingeloggt.");

  if (session === null) throw new Error("Session nicht gefunden.");
  if (session.twoFactorVerified === false) throw new Error("2FA nicht verifiziert.");


  const acct = await prisma.learningAccount.findUnique({
    where: { userId_type: { userId: user.id, type: AccountType.WEBUNTIS } }
  });
  if (!acct) throw new Error("Kein WebUntis-Konto gefunden.");

  const today = new Date().toISOString().slice(0, 10);
  const res = await fetch(`${acct.baseUrl}/api/timetable?username=${acct.username}&password=${acct.passwordHash}&school=${acct.school}&date=${today}`, {
    headers: { 'X-API-Key': process.env.WEBUNTIS_API_KEY! }
  });
  const json = await res.json();

  interface Lesson {
    start_time: string;
    end_time: string;
    subject: string;
    teachers: string[];
    room: string;
  }
  
  interface Day {
    lessons: Lesson[];
  }

  // Termine extrahieren
  const lessons = (json.data.days as Day[]).flatMap((day: Day) =>
    day.lessons.map((lsn: Lesson) => ({
      start: `${today}T${lsn.start_time}:00`,
      end:   `${today}T${lsn.end_time}:00`,
      summary: lsn.subject,
      description: `Lehrer: ${lsn.teachers.join(', ')}\nRaum: ${lsn.room}`
    }))
  );

  // Google-Kalender-Account
  const calAcct = await prisma.calendarAccount.findFirst({
    where: { userId: user.id, provider: CalendarProvider.GOOGLE }
  });
  if (!calAcct) throw new Error("Kein Google-Kalender verbunden.");

  const tokens = {
    access_token: calAcct.accessToken,
    refresh_token: calAcct.refreshToken!,
    expiry_date: calAcct.expiresAt!.getTime()
  };
  const calendarId = calAcct.calendarId || 'primary';

  for (const ev of lessons) {
    await createCalendarEvent(tokens, calendarId, {
      start: { dateTime: ev.start },
      end:   { dateTime: ev.end },
      summary: ev.summary,
      description: ev.description,
    });
  }
}

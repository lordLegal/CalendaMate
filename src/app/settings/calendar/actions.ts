// app/settings/components/actions.ts
"use server";

import prisma from "@/lib/server/prisma";
import { hash } from "bcryptjs";
import { getCurrentSession } from "@/lib/server/session";
import { AccountType, CalendarProvider } from "@/generated/prisma";
import { createCalendarEvent } from "@/lib/server/google";

export async function saveLearningAccount(formData: FormData) {
  const { session, user } = await getCurrentSession();
  if (!user) throw new Error("Nicht eingeloggt.");

  const type = formData.get("type") as AccountType;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const school = formData.get("school") as string;
  const baseUrl = formData.get("baseUrl") as string;

  const passwordHash = await hash(password, 12);

  await prisma.learningAccount.upsert({
    where: { userId_type: { userId: user.id, type } },
    update: { username, passwordHash, school, baseUrl },
    create: { userId: user.id, type, username, passwordHash, school, baseUrl },
  });
}

export async function testWebuntisSync() {
  const { session, user } = await getCurrentSession();
  if (!user) throw new Error("Nicht eingeloggt.");

  const acct = await prisma.learningAccount.findUnique({
    where: { userId_type: { userId: user.id, type: AccountType.WEBUNTIS } }
  });
  if (!acct) throw new Error("Kein WebUntis-Konto gefunden.");

  const today = new Date().toISOString().slice(0, 10);
  const res = await fetch(`${acct.baseUrl}/api/timetable?username=${acct.username}&password=${acct.passwordHash}&school=${acct.school}&date=${today}`, {
    headers: { 'X-API-Key': process.env.WEBUNTIS_API_KEY! }
  });
  const json = await res.json();

  // Termine extrahieren
  const lessons = json.data.days.flatMap((day: any) =>
    day.lessons.map((lsn: any) => ({
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

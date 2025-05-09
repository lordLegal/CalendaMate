// app/settings/page.tsx
import { LearningConnections } from "./component";
import { getCurrentSession } from "@/lib/server/session";
import { redirect } from "next/navigation";
import prisma from "@/lib/server/prisma";
import { globalGETRateLimit } from "@/lib/server/requests";

export default async function Page() {
  // Rate-Limit-Check
  if (!await globalGETRateLimit()) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        Too many requests
      </div>
    );
  }

  // Session & User
  const { session, user } = await getCurrentSession();
  if (session === null) return redirect("/login");
  if (user.registered2FA && !session.twoFactorVerified) return redirect("/2fa");

  // Subscription
  const sub = await prisma.subscription.findFirst({ where: { userId: user.id } });

  if (sub === null) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        No subscription found
      </div>
    );
  }

  // Lern-System-Accounts (WebUntis & Moodle)
  const learningAccounts = await prisma.learningAccount.findMany({
    where: { userId: user.id }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold">Einstellungen</h1>

        {/* Learning System Connections */}
        <section className="p-6 bg-white shadow rounded">
          <LearningConnections accounts={learningAccounts} />
        </section>

        
      </main>
    </div>
  );
}
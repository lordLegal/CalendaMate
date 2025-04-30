import SubscriptionSection, { CalendarConnections } from "./components";
import { getCurrentSession } from "@/lib/server/session";
import { redirect } from "next/navigation";
import { globalGETRateLimit } from "@/lib/server/requests";
import prisma from "@/lib/server/prisma";

export default async function Page() {
  if (!await globalGETRateLimit()) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        Too many requests
      </div>
    );
  }
  const { session, user } = await getCurrentSession();
  if (session === null) {
    return redirect("/login");
  }
  if (user.registered2FA && !session.twoFactorVerified) {
    return redirect("/2fa");
  }
  const sub = user
    ? await prisma.subscription.findFirst({ where: { userId: user.id } })
    : null
  const isActive = sub?.status === 'active'
  console.log("isActive", isActive)
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        {/* Calendar connections */}
        <section className="mb-8 p-6 bg-white shadow rounded">
          <CalendarConnections />
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Subscription</h2>
          <SubscriptionSection subscription={sub} />
        </section>
      </main>
    </div>
  );
}

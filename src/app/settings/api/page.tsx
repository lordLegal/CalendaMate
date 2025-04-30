// src/app/settings/api/page.tsx
import prisma from "@/lib/server/prisma";
// ******** Begin modifications for API dashboard ********
import { getCurrentSession } from "@/lib/server/session";
import { ApiKeysDashboard } from "./component";
import { redirect } from "next/navigation";
import { globalGETRateLimit } from "@/lib/server/requests";
import type { User } from "@/lib/server/user";
import type { Session } from "@/lib/server/session";
export default async function ApiKeysPage() {
  if (!await globalGETRateLimit()) {
      return (
        <div className="flex items-center justify-center min-h-screen text-red-600">
          Too many requests
        </div>
      );
    }
    const { session, user }: { session: Session | null; user: User | null } = await getCurrentSession();
    if (session === null) {
      return redirect("/login");
    }
    if (user === null) {
      return redirect("/login");
    }
    if (session !== null ) {
      if (!user.emailVerified) {
        return redirect("/verify-email");
      }
      if (!user.registered2FA) {
        return redirect("/2fa/setup");
      }
      if (!session.twoFactorVerified) {
        return redirect("/2fa");
      }
      return redirect("/");
    }


  // Fetch API keys for the user
  const keys = await prisma.apiKey.findMany({
    where: { ownerId: user.id },
    orderBy: { createdAt: 'desc' },
  });

  // Compute credit balances
  const purchaseAgg = await prisma.apiCreditsPurchase.aggregate({
    _sum: { credits: true },
    where: { userId: user.id },
  });
  const usageAgg = await prisma.apiCreditsUsage.aggregate({
    _sum: { credits: true },
    where: { userId: user.id },
  });

  const purchaseSum = purchaseAgg._sum.credits ?? 0;
  const usageSum = usageAgg._sum.credits ?? 0;
  const creditsRemaining = purchaseSum - usageSum;

  // TODO: Replace this with real chart data fetching logic
  const chartData: { date: string; used: number; purchased: number }[] = [];

  return (
    <ApiKeysDashboard
      keys={keys}
      purchaseSum={purchaseSum}
      usageSum={usageSum}
      creditsRemaining={creditsRemaining}
      chartData={chartData}
    />
  );
}

// src/app/settings/api/page.tsx
import prisma from "@/lib/server/prisma";
// ******** Begin modifications for API dashboard ********
import { getCurrentSession } from "@/lib/server/session";
import { ApiKeysDashboard } from "./component";
export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";

export default async function ApiKeysPage() {
  const { user } = await getCurrentSession();
  if (!user) {
    redirect('/login');
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

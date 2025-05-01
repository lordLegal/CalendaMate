
import prisma from "@/lib/server/prisma";
import { ApiKeysDashboard } from "./component";
import {redirect} from "next/navigation";
import { getCurrentSession } from "@/lib/server/session";
import { globalGETRateLimit } from "@/lib/server/requests";

export default async function ApiKeysPage() {
  // 1) Session & User-ID
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
  if (user === null) {
    return redirect("/login");
  }
  if (user.registered2FA && !session.twoFactorVerified) {
    return redirect("/2fa");
  }
  const userId = user.id;

  // 2) Datenbank-Abfragen
  const [keys, purchaseAgg, usageAgg, purchaseRows, usageRows] =
    await prisma.$transaction([
      prisma.apiKey.findMany({
        where: { ownerId: userId },
        orderBy: { createdAt: "desc" },
      }),
      prisma.apiCreditsPurchase.aggregate({
        where: { userId },
        _sum: { credits: true },
      }),
      prisma.apiCreditsUsage.aggregate({
        where: { userId },
        _sum: { credits: true },
      }),
      // Für das Chart: pro Tag die gekauften Credits
      prisma.apiCreditsPurchase.groupBy({
        by: ["purchaseDate"],
        where: { userId },
        _sum: { credits: true },
        orderBy: { purchaseDate: "asc" },
      }),
      // Für das Chart: pro Tag die genutzten Credits
      prisma.apiCreditsUsage.groupBy({
        by: ["usageDate"],
        where: { userId },
        _sum: { credits: true },
        orderBy: { usageDate: "asc" },
      }),
    ]);

  const purchaseSum = purchaseAgg._sum.credits ?? 0;
  const usageSum = usageAgg._sum.credits ?? 0;
  const creditsRemaining = purchaseSum - usageSum;

  // 3) Chart-Daten zusammenführen
  type Point = { date: string; used: number; purchased: number };
  const map: Record<string, Point> = {};

  purchaseRows.forEach((r) => {
    const d = r.purchaseDate.toISOString().slice(0, 10);
    map[d] = { date: d, purchased: (r._sum?.credits ?? 0), used: 0 };
  });
  usageRows.forEach((r) => {
    const d = r.usageDate.toISOString().slice(0, 10);
    if (!map[d]) map[d] = { date: d, purchased: 0, used: r._sum?.credits ?? 0 };
    else map[d].used = r._sum?.credits ?? 0;
  });

  const chartData = Object.values(map).sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  // 4) Dashboard rendern
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

// src/app/settings/api/page.tsx
import prisma from "@/lib/server/prisma";
import { getCurrentSession } from "@/lib/server/session";
import ApiKeysClient from "./component";
export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";

export default async function ApiKeysPage() {
  const { user } = await getCurrentSession();
  if (!user) {
    redirect('/login');
  }
  const keys = await prisma.apiKey.findMany({
    where: { ownerId: user.id },
    orderBy: { createdAt: 'desc' },
  });

  return <ApiKeysClient />;
}

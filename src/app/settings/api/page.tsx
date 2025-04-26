import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/server/session";
import prisma from "@/lib/server/prisma";
import {
  createApiKeyAction,
  deleteApiKeyAction,
} from "@/app/settings/api/actions";
import React from "react";

export const dynamic = "force-dynamic";

export default async function ApiKeysPage() {
  const { user } = await getCurrentSession();
  if (!user) {
    redirect("/login");
  }

  const keys = await prisma.apiKey.findMany({
    where: { ownerId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API-Key Verwaltung</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Neuen API-Key erstellen</h2>
        <form action={createApiKeyAction} className="">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Neuen Key erstellen
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Deine API-Keys</h2>
        {keys.length === 0 && (
          <p className="text-gray-600">Du hast noch keine API-Keys.</p>
        )}

        {keys.map((k) => (
          <div
            key={k.id}
            className="border border-gray-300 rounded-lg p-6 mb-6 shadow-sm"
          >
            <p className="mb-2">
              <span className="font-semibold">ID:</span> {k.id}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Key:</span>{' '}
              <code className="bg-gray-100 px-1 rounded">{k.key}</code>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Credits:</span>{' '}
              {k.unlimited ? 'Unbegrenzt' : k.credits}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Min. Interval zwischen Anfragen:</span>{' '}
              {k.minInterval} ms
            </p>
            <p className="mb-2">
              <span className="font-semibold">Erstellt am:</span>{' '}
              {k.createdAt.toLocaleString()}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Letzte Nutzung:</span>{' '}
              {k.lastRequest ? new Date(k.lastRequest).toLocaleString() : 'Nie'}
            </p>

            <div className="flex flex-wrap gap-4">
              <form action={topUpApiKeyAction} className="flex items-center gap-2">
                <input type="hidden" name="keyId" value={k.id} />
                <input
                  type="number"
                  name="amount"
                  min={1}
                  placeholder="Credits aufladen"
                  required
                  className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Aufladen
                </button>
              </form>

              <form action={deleteApiKeyAction} className="">
                <input type="hidden" name="keyId" value={k.id} />
                <button
                  type="submit"
                  className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Löschen
                </button>
              </form>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

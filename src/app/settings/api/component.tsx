// src/app/settings/api/ApiKeysClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useActionState } from "react";
import { ApiKey } from "@/generated/prisma";

import {
  createApiKeyAction,
  deleteApiKeyAction,
  topUpApiKeyAction,
} from "@/app/settings/api/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { FiClipboard } from "react-icons/fi";

interface Props {
  keys: ApiKey[];
}

export default function ApiKeysClient({ keys: initialKeys }: Props) {
  const [keys, setKeys] = useState<ApiKey[]>(initialKeys);
  const [createdKey, setCreatedKey] = useState<{ rawKey: string } | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const [stateCreate, createApiKey, createPending] = useActionState(
    createApiKeyAction,
    { success: false, message: "", apiKey: undefined }
  );
  const [, topUpApiKey, topUpPending] = useActionState(
    topUpApiKeyAction,
    { success: false, message: "" }
  );
  const [stateDelete, deleteApiKey, deletePending] = useActionState(
    deleteApiKeyAction,
    { success: false, message: "", deletedKeyId: undefined }
  );

  // Neue API-Key hinzufügen → lokale Liste & Dialog
  useEffect(() => {
    const newApiKey = stateCreate.apiKey;
    if (newApiKey) {
      const entry: ApiKey = {
        id: newApiKey.id,
        name: newApiKey.name,
        key: newApiKey.rawKey,
        unlimited: false,
        minInterval: 0,
        ownerId: newApiKey.ownerId ?? null,
        description: null,
        createdAt: newApiKey.createdAt,
        lastRequest: null,
      };
      setKeys((prev) => [entry, ...prev]);
      setCreatedKey({ rawKey: newApiKey.rawKey });
      setShowCreateDialog(true);
    }
  }, [stateCreate.apiKey]);

  // API-Key löschen → lokale Liste
  useEffect(() => {
    if (stateDelete.deletedKeyId) {
      setKeys((prev) => prev.filter((k) => k.id !== stateDelete.deletedKeyId));
    }
  }, [stateDelete.deletedKeyId]);

  return (
    <div className="space-y-8">
      {/* Popup nach Create */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>API-Key erstellt</DialogTitle>
            <DialogDescription>
              Speichere diesen Schlüssel sicher – er wird nur einmal angezeigt.
            </DialogDescription>
          </DialogHeader>
          <pre className="p-4 bg-gray-100 rounded font-mono break-all">
            {createdKey?.rawKey}
          </pre>
          <Button
            className="mt-2 flex items-center gap-2"
            onClick={() => navigator.clipboard.writeText(createdKey?.rawKey || "")}
          >
            <FiClipboard /> Kopieren
          </Button>
          <DialogFooter>
            <Button onClick={() => setShowCreateDialog(false)}>
              Schließen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Form für neuen API-Key */}
      <Card>
        <form action={createApiKey} className="w-full">
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" required />
            </div>
            <div>
              <Label htmlFor="description">Beschreibung</Label>
              <Input name="description" id="description" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={createPending}>
              {createPending ? "Erstelle..." : "API-Key erstellen"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Liste der API-Keys */}
      <div className="space-y-6">
        {keys.length === 0 && <p className="text-gray-600">Keine API-Keys vorhanden.</p>}

        {keys.map((k) => (
          <Card key={k.id}>
            <CardContent className="space-y-2">
              <p className="font-semibold text-lg">{k.name}</p>
              <p className="text-sm text-gray-500">ID: {k.id}</p>
              <p>
                <span className="font-medium">Min. Intervall:</span> {k.minInterval} ms
              </p>
              <p>
                <span className="font-medium">Erstellt am:</span> {new Date(k.createdAt).toLocaleDateString()}
              </p>
              <p>
                <span className="font-medium">Letzte Nutzung:</span> {k.lastRequest ? new Date(k.lastRequest).toLocaleString() : "Nie"}
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              {/* Credits aufladen */}
              <form action={topUpApiKey} className="flex items-center gap-2">
                <input type="hidden" name="keyId" value={k.id} />
                <Input name="amount" type="number" min={1} placeholder="Credits" className="w-24" required />
                <Button type="submit" disabled={topUpPending}>
                  {topUpPending ? "Lädt..." : "Aufladen"}
                </Button>
              </form>

              {/* Delete mit Bestätigung */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" disabled={deletePending}>Löschen</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>API-Key löschen?</AlertDialogTitle>
                    <AlertDialogDescription>Möchtest du den Key &quot;{k.name}&quot; wirklich löschen? Dies kann nicht rückgängig gemacht werden.</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex gap-2">
                    <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <form action={deleteApiKey}>
                        <input type="hidden" name="keyId" value={k.id} />
                        <Button type="submit" variant="destructive">Ja, löschen</Button>
                      </form>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

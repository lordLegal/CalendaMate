"use server";
import { getCurrentSession } from "@/lib/server/session";
import prisma from "@/lib/server/prisma";
import { revalidatePath } from "next/cache";
import crypto from "crypto";
import { globalGETRateLimit } from "@/lib/server/requests";
import stripe from "@/lib/server/stripe";

// Verschlüsselungs-Konfiguration
const ALGO = "aes-256-gcm";
const ENC_KEY = Buffer.from(process.env.API_KEY_ENCRYPTION_KEY!, "hex"); // 32-Byte hex-String in .env

/**
 * Basis-Interface für alle Server-Actions.
 * actionResult kann optional apiKey oder deletedKeyId enthalten.
 */
export interface ActionResult {
  success: boolean;
  message: string;
  url?: string;
  /**
   * Für createApiKeyAction: Rückgabe des neu erstellten API-Key-Objekts inkl. rawKey.
   */
  apiKey?: {
    id: string;
    name: string;
    rawKey: string;
    createdAt: Date;
    ownerId: number | null;
  };
  /**
   * Für deleteApiKeyAction: Rückgabe der gelöschten Key-ID.
   */
  deletedKeyId?: string;
}

/**
 * Erzeugt eine Stripe-Checkout-Session zum Aufladen von API-Credits.
 */
export async function createCreditPurchaseSessionAction(
  formData: FormData
): Promise<ActionResult> {
  // Rate-Limit prüfen
  if (!globalGETRateLimit()) {
    return { success: false, message: "Zu viele Anfragen" };
  }
  const { session, user } = await getCurrentSession();
  if (!session) {
    return { success: false, message: "Nicht authentifiziert" };
  }
  if (!session.twoFactorVerified) {
    return { success: false, message: "2FA nicht verifiziert" };
  }
  
  const userId = user.id;

  // Menge an Credits auslesen
  const creditsRaw = formData.get("credits");
  const credits = typeof creditsRaw === "string" ? parseInt(creditsRaw, 10) : NaN;
  if (isNaN(credits) || credits <= 0) {
    return { success: false, message: "Ungültige Credit-Anzahl" };
  }

  console.log("Credits:", credits);

  // 500 Credits sind das Minimum
  if (credits < 499) {
    return { success: false, message: "Mindestanzahl sind 500 Credits" };
  }
  // 10000 Credits sind das Maximum
  if (credits > 10000) {
    return { success: false, message: "Maximal sind 1000 Credits möglich" };
  }

  // Definiere Deinen Preis pro Credit in Cent, z.B. 1 Credit = 50 Cent
  const unitPriceInCents = 1; // Preis pro Credit in Cent

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: user.email,
    allow_promotion_codes: true,
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "API-Credits",
            description: `${credits} Credits à ${unitPriceInCents/100} €`,
          },
          unit_amount: unitPriceInCents,     // Preis pro Credit
        },
        quantity: credits,                   // Anzahl Credits
      },
    ],
    metadata: {
      userId: userId.toString(),
      credits: credits.toString(),
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings/api?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings/api?canceled=true`,
  });


  return {
    success: true,
    message: "Weiterleitung zu Stripe…",
    url: checkoutSession.url ?? "",
  };
}

/**
 * Erstellt einen neuen API-Key, verschlüsselt in der DB, zeigt rawKey im Popup.
 */
export async function createApiKeyAction(
  formData: FormData
): Promise<ActionResult> {
  const { user } = await getCurrentSession();
  if (!user) {
    return { success: false, message: "Nicht authentifiziert" };
  }

  const nameRaw = formData.get("name");
  if (typeof nameRaw !== "string" || nameRaw.trim().length < 3) {
    return { success: false, message: "Ungültiger Name" };
  }
  const name = nameRaw.trim();

  const descRaw = formData.get("description");
  const description = typeof descRaw === "string" && descRaw.trim() !== "" 
    ? descRaw.trim() 
    : null;

  // Duplikat prüfen
  const exists = await prisma.apiKey.findFirst({
    where: { ownerId: user.id, name },
  });
  if (exists) {
    return { success: false, message: "API-Key-Name bereits vergeben" };
  }

  // 1) Roh-Key und Salt erzeugen
  const rawKey = crypto.randomBytes(32).toString("hex");          // 256 Bit Zufall :contentReference[oaicite:8]{index=8}
  const salt   = crypto.randomBytes(16).toString("hex");          // 128 Bit Salt  :contentReference[oaicite:9]{index=9}

  // 2) HMAC-SHA256-Hash erstellen
  const hmac = crypto
    .createHmac("sha256", process.env.HMAC_SECRET!)
    .update(salt)
    .update(rawKey)
    .digest("hex");                                              // HMAC schützt vor Length-Extension :contentReference[oaicite:10]{index=10}
  const storedKey = `${salt}:${hmac}`;

  // 3) Speichern (nur Salt:Hash)
  const newKey = await prisma.apiKey.create({
    data: {
      owner:      { connect: { id: user.id } },
      name,
      description,
      key:        storedKey,
      unlimited:  false,
    },
  });

  // 4) UI aktualisieren & Rückgabe des Klartext-Keys
  revalidatePath("/settings/api");
  return {
    success: true,
    message: "API-Key erfolgreich erstellt",
    apiKey: {
      id:        newKey.id,
      name:      newKey.name,
      rawKey,                                             
      createdAt: newKey.createdAt,
      ownerId:   user.id,
    },
  };
}

/**
 * Löscht einen API-Key und gibt die gelöschte ID zurück.
 */
export async function deleteApiKeyAction(
  formData: FormData
): Promise<ActionResult> {
  const { user } = await getCurrentSession();
  if (!user) {
    return { success: false, message: "Nicht authentifiziert" };
  }
  const idRaw = formData.get("keyId");
  if (typeof idRaw !== "string") {
    return { success: false, message: "Ungültige Eingabe" };
  }
  const apiKey = await prisma.apiKey.findUnique({ where: { id: idRaw } });
  if (!apiKey || apiKey.ownerId !== user.id) {
    return { success: false, message: "API-Key nicht gefunden" };
  }

  await prisma.apiKey.delete({ where: { id: idRaw } });
  revalidatePath("/settings/api");

  return {
    success: true,
    message: "API-Key gelöscht",
    deletedKeyId: idRaw,
  };
}

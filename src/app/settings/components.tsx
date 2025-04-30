"use client";

import { useState } from "react";
//import { regenerateRecoveryCodeAction} from "./actions";
// Calendar connections (Google & Microsoft)
export function CalendarConnections() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Calendar Connections</h2>
      <div className="flex flex-col gap-4">
        <a
          href="/api/oauth/google/authorize"
          className="w-full inline-block text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded"
        >
          Mit Google Kalender verbinden
        </a>
        <a
          href="/api/oauth/microsoft/authorize"
          className="w-full inline-block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Mit Microsoft Kalender verbinden
        </a>
      </div>
    </div>
  );
}





import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Subscription } from "@/generated/prisma";
import { redirect } from "next/navigation";
interface Props {
  subscription: Subscription | null;
}

export default function SubscriptionSection({ subscription }: Props) {
  "use client";
  const [feedback, setFeedback] = useState<string>("");

  async function handelManageSubscription() {
    console.log("Manage Subscription clicked");
    console.log("Subscription ID:", subscription);
    if (subscription) {
      const stripe_portal = await fetch("/api/stripe/create-portal-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await stripe_portal.json();
      if (data.url) {
        redirect(data.url); // Redirect to the Stripe portal URL
      } else {
        setFeedback("Failed to create portal session.");
        console.error("Failed to create portal session:", data.error);
      }
    } else {
      setFeedback("No subscription found.");
      console.error("No subscription found.");
    }
  }

  async function getLastInvoiceAmount(subscriptionId: string) {
    
    return 4.90 + "€" + subscriptionId; // Placeholder for the last invoice amount
  }

  if (!subscription) {
    return (
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Abonnement</h2>
        </CardHeader>
        <CardContent>
          <p>Du hast aktuell kein aktives Abonnement.</p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <a href="/pricing">Jetzt abonnieren</a>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const nextPayment = (new Date(subscription.currentPeriodEnd)).toISOString().split("T")[0];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Dein Abonnement</h2>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label>Status:</Label>{" "}
          <span className="font-medium capitalize">{subscription.status}</span>
        </div>
        <div>
          <Label>Plan ID:</Label>{" "}
          <span className="font-medium">{getLastInvoiceAmount(subscription.id)}</span>
        </div>
        <div>
          <Label>Nächste Zahlung:</Label>{" "}
          <span className="font-medium">{nextPayment}</span>
        </div>
        {feedback && (
          <div className="p-2 bg-blue-50 text-blue-800 rounded">
            {feedback}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
            <Button onClick={handelManageSubscription}  >
              Abonnement Managen
            </Button>
      </CardFooter>
    </Card>
  );
}

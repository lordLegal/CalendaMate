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





import React, { useEffect } from "react";
import { useActionState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cancelSubscriptionAction, resumeSubscriptionAction } from "./actions";

interface Subscription {
  id: string;
  status: string;
  priceId: string;
  currentPeriodEnd: string; // ISO
}

interface Props {
  subscription: Subscription | null;
}

export default function SubscriptionSection({ subscription }: Props) {
  const [stateCancel, cancelSubscription, cancelPending] = useActionState(
    cancelSubscriptionAction,
    { success: false, message: "" }
  );
  const [stateResume, resumeSubscription, resumePending] = useActionState(
    resumeSubscriptionAction,
    { success: false, message: "" }
  );
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    if (stateCancel.success) setFeedback(stateCancel.message);
  }, [stateCancel.success, stateCancel.message]);
  useEffect(() => {
    if (stateResume.success) setFeedback(stateResume.message);
  }, [stateResume.success, stateResume.message]);

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

  const nextPayment = (new Date(subscription.currentPeriodEnd), "PPP");

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
          <span className="font-medium">{subscription.priceId}</span>
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
        {subscription.status === 'active' ? (
          <form action={cancelSubscription} className="inline">
            <Button type="submit" variant="destructive" disabled={cancelPending}>
              {cancelPending ? 'Wird gekündigt…' : 'Abonnement kündigen'}
            </Button>
          </form>
        ) : (
          <form action={resumeSubscription} className="inline">
            <Button type="submit" disabled={resumePending}>
              {resumePending ? 'Wird aktiviert…' : 'Abonnement reaktivieren'}
            </Button>
          </form>
        )}
      </CardFooter>
    </Card>
  );
}

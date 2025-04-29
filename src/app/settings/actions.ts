"use server";

import { globalPOSTRateLimit } from "@/lib/server/requests";


export interface ActionResult {
	message: string;
	success?: boolean;
}
export async function cancelSubscriptionAction(_prev: ActionResult): Promise<ActionResult> {
	if (!globalPOSTRateLimit()) {
		return {
			message: "Zu viele Anfragen",
		};
	}
	return {
		message: "Abonnement gekündigt",
	};
}

export async function resumeSubscriptionAction(_prev: ActionResult): Promise<ActionResult> {
	if (!globalPOSTRateLimit()) {
		return {
			message: "Zu viele Anfragen",
		};
	}
	return {
		message: "Abonnement fortgesetzt",
	};
}


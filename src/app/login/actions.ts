"use server";

import { verifyEmailInput } from "@/lib/server/email";
import { verifyPasswordHash } from "@/lib/server/password";
import { RefillingTokenBucket, Throttler } from "@/lib/server/rate-limit";
import { createSession, generateSessionToken, setSessionTokenCookie } from "@/lib/server/session";
import { getUserFromEmail, getUserPasswordHash } from "@/lib/server/user";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { globalPOSTRateLimit } from "@/lib/server/requests";

import type { SessionFlags } from "@/lib/server/session";

const throttler = new Throttler<number>([1, 2, 4, 8, 16, 30, 60, 180, 300]);
const ipBucket = new RefillingTokenBucket<string>(20, 1);

export async function loginAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
	if (!globalPOSTRateLimit()) {
		return {
			message: "Too many requests"
		};
	}
	// TODO: Assumes X-Forwarded-For is always included.
	const clientIP = (await headers()).get("X-Forwarded-For");
	if (clientIP !== null && !ipBucket.check(clientIP, 1)) {
		return {
			message: "Too many requests"
		};
	}

	const email = formData.get("email");
	const password = formData.get("password");
	if (typeof email !== "string" || typeof password !== "string") {
		return {
			message: "Invalid or missing fields"
		};
	}
	if (email === "" || password === "") {
		return {
			message: "Please enter your email and password."
		};
	}
	if (!verifyEmailInput(email)) {
		return {
			message: "Invalid email"
		};
	}
  // Fetch user and verify password; avoid user-enumeration by using generic error
	const user = await getUserFromEmail(email);
	let validPassword = false;
	if (user) {
		const passwordHash = await getUserPasswordHash(user.id);
		validPassword = await verifyPasswordHash(passwordHash, password);
	}
	// Rate-limit checks
	if (clientIP !== null) {
		// consume one token per login attempt
		if (!ipBucket.consume(clientIP, 1)) {
		return { message: "Too many requests" };
		}
	}
	if (user) {
		if (!throttler.consume(user.id)) {
		return { message: "Too many requests" };
		}
	}
	// If authentication fails, respond with generic message
	if (!user || !validPassword) {
		return { message: "Invalid email or password" };
	}
  // Reset throttle on successful login
	const sessionFlags: SessionFlags = {
		twoFactorVerified: false
	};
	const sessionToken = await generateSessionToken();
	console.log("Session token: ", sessionToken);
	const session = await createSession(sessionToken, user.id, sessionFlags);
	console.log("Session created: ", session);
	console.log( await setSessionTokenCookie(sessionToken, session.expiresAt));

	if (!user.emailVerified) {
		return redirect("/verify-email");
	}
	if (!user.registered2FA) {
		return redirect("/2fa/setup");
	}
	return redirect("/2fa");
}

interface ActionResult {
	message: string;
}

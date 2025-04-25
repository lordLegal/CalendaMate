"use server";

import { verifyPasswordHash, verifyPasswordStrength } from "@/lib/server/password";
import { ExpiringTokenBucket } from "@/lib/server/rate-limit";
import {
	createSession,
	generateSessionToken,
	getCurrentSession,
	invalidateUserSessions,
	setSessionTokenCookie
} from "@/lib/server/session";
import { getUserPasswordHash, resetUserRecoveryCode, updateUserPassword } from "@/lib/server/user";
import {
	createEmailVerificationRequest,
	sendVerificationEmail,
	sendVerificationEmailBucket,
	setEmailVerificationRequestCookie
} from "@/lib/server/email-verfication";
import { checkEmailAvailability, verifyEmailInput } from "@/lib/server/email";
import { redirect } from "next/navigation";
import { globalPOSTRateLimit } from "@/lib/server/requests";
import { PrismaClient } from '@/generated/prisma';
import { randomBytes } from 'crypto';

import type { SessionFlags } from "@/lib/server/session";

const passwordUpdateBucket = new ExpiringTokenBucket<string>(5, 60 * 30);

export async function updatePasswordAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
	if (!globalPOSTRateLimit()) {
		return {
			message: "Too many requests"
		};
	}
	const { session, user } = await getCurrentSession();
	if (session === null) {
		return {
			message: "Not authenticated"
		};
	}
	if (user.registered2FA && !session.twoFactorVerified) {
		return {
			message: "Forbidden"
		};
	}
	if (!passwordUpdateBucket.check(session.id, 1)) {
		return {
			message: "Too many requests"
		};
	}

	const password = formData.get("password");
	const newPassword = formData.get("new_password");
	if (typeof password !== "string" || typeof newPassword !== "string") {
		return {
			message: "Invalid or missing fields"
		};
	}
	const strongPassword = await verifyPasswordStrength(newPassword);
	if (!strongPassword) {
		return {
			message: "Weak password"
		};
	}
	if (!passwordUpdateBucket.consume(session.id, 1)) {
		return {
			message: "Too many requests"
		};
	}
	const passwordHash = await getUserPasswordHash(user.id);
	const validPassword = await verifyPasswordHash(passwordHash, password);
	if (!validPassword) {
		return {
			message: "Incorrect password"
		};
	}
	passwordUpdateBucket.reset(session.id);
	invalidateUserSessions(user.id);
	await updateUserPassword(user.id, newPassword);

	const sessionToken = await generateSessionToken();
	const sessionFlags: SessionFlags = {
		twoFactorVerified: session.twoFactorVerified
	};
	const newSession = await createSession(sessionToken, user.id, sessionFlags);
	setSessionTokenCookie(sessionToken, newSession.expiresAt);
	return {
		message: "Updated password"
	};
}

export async function updateEmailAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
	if (!globalPOSTRateLimit()) {
		return {
			message: "Too many requests"
		};
	}
	const { session, user } = await getCurrentSession();
	if (session === null) {
		return {
			message: "Not authenticated"
		};
	}
	if (user.registered2FA && !session.twoFactorVerified) {
		return {
			message: "Forbidden"
		};
	}
	if (!sendVerificationEmailBucket.check(user.id, 1)) {
		return {
			message: "Too many requests"
		};
	}

	const email = formData.get("email");
	if (typeof email !== "string") {
		return { message: "Invalid or missing fields" };
	}
	if (email === "") {
		return {
			message: "Please enter your email"
		};
	}
	if (!verifyEmailInput(email)) {
		return {
			message: "Please enter a valid email"
		};
	}
	const emailAvailable = checkEmailAvailability(email);
	if (!emailAvailable) {
		return {
			message: "This email is already used"
		};
	}
	if (!sendVerificationEmailBucket.consume(user.id, 1)) {
		return {
			message: "Too many requests"
		};
	}
	const verificationRequest = await createEmailVerificationRequest(user.id, email);
	sendVerificationEmail(verificationRequest.email, verificationRequest.code);
	setEmailVerificationRequestCookie(verificationRequest);
	return redirect("/verify-email");
}

export async function regenerateRecoveryCodeAction(): Promise<RegenerateRecoveryCodeActionResult> {
	if (!globalPOSTRateLimit()) {
		return {
			error: "Too many requests",
			recoveryCode: null
		};
	}
	const { session, user } = await getCurrentSession();
	if (session === null || user === null) {
		return {
			error: "Not authenticated",
			recoveryCode: null
		};
	}
	if (!user.emailVerified) {
		return {
			error: "Forbidden",
			recoveryCode: null
		};
	}
	if (!session.twoFactorVerified) {
		return {
			error: "Forbidden",
			recoveryCode: null
		};
	}
	const recoveryCode = await resetUserRecoveryCode(session.userId);
	return {
		error: null,
		recoveryCode
	};
}

interface ActionResult {
	message: string;
}

type RegenerateRecoveryCodeActionResult =
	| {
			error: string;
			recoveryCode: null;
	  }
	| {
			error: null;
			recoveryCode: string;
	  };

// --- API Key Management Actions ---

const prisma = new PrismaClient();

/**
 * Server Action: Create a new API key for the current user.
 */
export async function createApiKeyAction(): Promise<{ id: string; key: string } | { error: string }> {
  const { user } = await getCurrentSession();
  if (!user) {
    return { error: 'Not authenticated' };
  }
  // Generate random 256-bit key
  const key = randomBytes(32).toString('hex');
  const apiKey = await prisma.apiKey.create({
    data: {
      key,
      owner: { connect: { id: user.id } },
      credits: 0,
      unlimited: false,
      minInterval: 0,
    },
  });
  return { id: apiKey.id, key: apiKey.key };
}

/**
 * Server Action: Top up credits for an API key.
 */
export async function topUpApiKeyAction(
  _prev: any,
  formData: FormData
): Promise<{ credits: number } | { error: string }> {
  const { user } = await getCurrentSession();
  if (!user) {
    return { error: 'Not authenticated' };
  }
  const keyId = formData.get('keyId');
  const amountRaw = formData.get('amount');
  if (typeof keyId !== 'string' || typeof amountRaw !== 'string') {
    return { error: 'Invalid input' };
  }
  const amount = parseInt(amountRaw, 10);
  if (isNaN(amount) || amount <= 0) {
    return { error: 'Invalid amount' };
  }
  const existing = await prisma.apiKey.findUnique({ where: { id: keyId } });
  if (!existing || existing.ownerId !== user.id) {
    return { error: 'API key not found' };
  }
  const updated = await prisma.apiKey.update({
    where: { id: keyId },
    data: { credits: { increment: amount } },
  });
  return { credits: updated.credits };
}

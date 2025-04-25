import { PrismaClient } from '@/generated/prisma';
import { encodeHexLowerCase } from "@oslojs/encoding";
import { generateRandomOTP } from "./utils";
import { sha256 } from "@oslojs/crypto/sha2";
import { cookies } from "next/headers";

import type { User } from "./user";

const prisma = new PrismaClient();

export async function createPasswordResetSession(token: string, userId: number, email: string): Promise<PasswordResetSession> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const expiresAt = new Date(Date.now() + 1000 * 60 * 10); // 10 Minuten
	const code = generateRandomOTP();
	
	const session = await prisma.passwordResetSession.create({
		data: {
			id: sessionId,
			userId,
			email,
			code,
			expiresAt,
			emailVerified: false,
			twoFactorVerified: false
		}
	});
	
	return {
		id: session.id,
		userId: session.userId,
		email: session.email,
		code: session.code,
		expiresAt: session.expiresAt,
		emailVerified: session.emailVerified,
		twoFactorVerified: session.twoFactorVerified
	};
}

export async function validatePasswordResetSessionToken(token: string): Promise<PasswordResetSessionValidationResult> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	
	const sessionWithUser = await prisma.passwordResetSession.findUnique({
		where: { id: sessionId },
		include: {
			user: {
				select: {
					id: true,
					email: true,
					username: true,
					emailVerified: true,
					totpKey: true
				}
			}
		}
	});
	
	if (!sessionWithUser) {
		return { session: null, user: null };
	}
	
	const session: PasswordResetSession = {
		id: sessionWithUser.id,
		userId: sessionWithUser.userId,
		email: sessionWithUser.email,
		code: sessionWithUser.code,
		expiresAt: sessionWithUser.expiresAt,
		emailVerified: sessionWithUser.emailVerified,
		twoFactorVerified: sessionWithUser.twoFactorVerified
	};
	
	const user: User = {
		id: sessionWithUser.user.id,
		email: sessionWithUser.user.email,
		username: sessionWithUser.user.username,
		emailVerified: sessionWithUser.user.emailVerified,
		registered2FA: sessionWithUser.user.totpKey !== null
	};
	
	// Prüfen, ob die Sitzung abgelaufen ist
	if (Date.now() >= session.expiresAt.getTime()) {
		await prisma.passwordResetSession.delete({
			where: { id: session.id }
		});
		return { session: null, user: null };
	}
	
	return { session, user };
}

export async function setPasswordResetSessionAsEmailVerified(sessionId: string): Promise<void> {
	await prisma.passwordResetSession.update({
		where: { id: sessionId },
		data: { emailVerified: true }
	});
}

export async function setPasswordResetSessionAs2FAVerified(sessionId: string): Promise<void> {
	await prisma.passwordResetSession.update({
		where: { id: sessionId },
		data: { twoFactorVerified: true }
	});
}

export async function invalidateUserPasswordResetSessions(userId: number): Promise<void> {
	await prisma.passwordResetSession.deleteMany({
		where: { userId }
	});
}

export async function validatePasswordResetSessionRequest(): Promise<PasswordResetSessionValidationResult> {
	"use server";
	const cookieStore = await cookies();
  // Use __Host- prefix for password reset session cookie
  const token = cookieStore.get("__Host-password_reset_session")?.value ?? null;
	if (token === null) {
		return { session: null, user: null };
	}
	const result = await validatePasswordResetSessionToken(token);
	if (result.session === null) {
		await deletePasswordResetSessionTokenCookie();
	}
	return result;
}

export async function setPasswordResetSessionTokenCookie(token: string, expiresAt: Date): Promise<void> {
	'use server'
	const cookieStore = await cookies();
	cookieStore.set("__Host-password_reset_session", token, {
		expires: expiresAt,
		sameSite: "lax",
		httpOnly: true,
		path: "/",
		secure: process.env.NODE_ENV === "production"
	});
}
export async function deletePasswordResetSessionTokenCookie(): Promise<void> {
	'use server'
	const cookieStore = await cookies();
	cookieStore.set("__Host-password_reset_session", "", {
		maxAge: 0,
		sameSite: "lax",
		httpOnly: true,
		path: "/",
		secure: process.env.NODE_ENV === "production"
	});
}

import nodemailer from 'nodemailer';
/**
 * Send a password reset code via SMTP email.
 */
export async function sendPasswordResetEmail(email: string, code: string): Promise<void> {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    const mailOptions = {
      from: '"Quiz App" <' + process.env.SMTP_FROM_EMAIL + '>',
      to: email,
      subject: 'Your Password Reset Code',
      text: `Your password reset code is ${code}`,
      html: `<p>Your password reset code is <strong>${code}</strong></p>`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log(`Password reset email sent: ${info.messageId}`);
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw new Error(`Fehler beim Senden der Passwort-Reset-E-Mail: ${error}`);
  }
}

export interface PasswordResetSession {
	id: string;
	userId: number;
	email: string;
	expiresAt: Date;
	code: string;
	emailVerified: boolean;
	twoFactorVerified: boolean;
}

export type PasswordResetSessionValidationResult =
	| { session: PasswordResetSession; user: User }
	| { session: null; user: null };

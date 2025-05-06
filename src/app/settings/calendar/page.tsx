
import { getCurrentSession } from "@/lib/server/session";
import { redirect } from "next/navigation";
import { globalGETRateLimit } from "@/lib/server/requests";
import prisma from "@/lib/server/prisma";
import { getTokensFromCode, listCalendars } from "@/lib/server/google";

export default async function Page() {
    if (!await globalGETRateLimit()) {
        return (
        <div className="flex items-center justify-center min-h-screen text-red-600">
            Too many requests
        </div>
        );
    }
    const { session, user } = await getCurrentSession();
    if (session === null) {
        return redirect("/login");
    }
    if (user.registered2FA && !session.twoFactorVerified) {
        return redirect("/2fa");
    }
    const sub = user
        ? await prisma.subscription.findFirst({ where: { userId: user.id } })
        : null
    const isActive = sub?.status === 'active'

    if (!isActive) {
        return (
        <div className="flex items-center justify-center min-h-screen text-red-600">
            You need an active subscription to access this page.
        </div>
        );
    }

    const providerGoogle = await prisma.calendarAccount.findUnique({
        where: { userId_provider: { userId: user.id, provider: "GOOGLE" } }
    });

    const providerMicrosoft = await prisma.calendarAccount.findUnique({
        where: { userId_provider: { userId: user.id, provider: "MICROSOFT" } }
    });

    console.log("providerGoogle", providerGoogle)

    let googleCalendersList = await listCalendars({access_token: providerGoogle?.accessToken, refresh_token: providerGoogle?.refreshToken, expiry_date: providerGoogle?.expiresAt});

    console.log("googleCalendersList", googleCalendersList)

  // filter out calnders where accessRole is not "owner"
    googleCalendersList = googleCalendersList?.filter((calendar) => {
        return calendar.accessRole === "owner";
    });



    return (
        <div className="min-h-screen bg-gray-50">
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Calender Settings</h1>
            
        </main>
        </div>
    );
    }

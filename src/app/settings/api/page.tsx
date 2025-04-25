import { globalGETRateLimit } from "@/lib/server/requests";
import { getCurrentSession } from "@/lib/server/session";
import { redirect } from "next/navigation";
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();
export default async function ApiSettings() {
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

    const apiKeys = await prisma.apiKey.findMany({
        where: {
            ownerId: user.id,
        },
    });

    


    return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        {/* Titel */}
        <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Upgrade to Pro
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            Unlock all premium features for just{' '}
            <span className="font-medium text-gray-900">$9.99</span>/month
            </p>
        </div>

        {/* Features-Liste */}
        <div className="rounded-lg bg-white shadow p-6">
            <h3 className="text-xl font-semibold mb-4">What’s included:</h3>
            <ul className="space-y-2 mb-6">
            {apiKeys.map((api) => (
                <li key={api.id} className="flex items-center">
                <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                    />
                </svg>
                <span className="text-gray-700">{api.description}</span>
                </li>
            ))}
            </ul>
        </div>
        </div>
    </div>
    )
}
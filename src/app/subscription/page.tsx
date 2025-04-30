import { getCurrentSession } from "@/lib/server/session";
import { redirect } from "next/navigation";
import { globalGETRateLimit } from "@/lib/server/requests";
import prisma from "@/lib/server/prisma";
import SubscriptionSection from "./component";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    if (sub) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <CardHeader className="text-3xl font-bold text-center mb-4">You already Have a Subcription  </CardHeader>
                <CardDescription className="text-center text-gray-600 mb-6">
                    Your subscription is active and you can manage click on the Button below.
                </CardDescription>
                <Button variant="outline" className="w-full" asChild>
                    <a href="/settings">Manage Subscription</a>
                </Button>
                <CardDescription className="text-center text-gray-600 mt-6">
                    If you want to change your subscription, please cancel your current subscription first.
                </CardDescription>

            </Card>

            
        </div>
      );
    } else {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <SubscriptionSection />
            </div>
        )
    }
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CalendarMate - Automatisierte Kalendereinträge",
  description: "Verbinde deine Kalender und synchronisiere Termine automatisch in Google, Microsoft und Apple Kalendern.",
};

import Navbar from "@/app/components/navbar";
import { getCurrentSession } from "@/lib/server/session";
/**
 * RootLayout: wraps all pages with a consistent header and theme
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch current session for Navbar
  const { user } = await getCurrentSession();
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar user={user} isLoading={false} />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

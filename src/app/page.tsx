import Link from "next/link";
import Image from "next/image";
import { FeatureCard } from "./components/FeatureCard";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">CalendarMate</h1>
          <p className="text-xl mb-8">
            Automatisiere deine Kalendereinträge in Google, Microsoft oder Apple Kalender
          </p>
          <div className="flex justify-center gap-4">
            <Link className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition" href="/signup">
                Jetzt registrieren
            </Link>
            <Link className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition" href="/login">
                Anmelden
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Funktionen</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Image src="/globe.svg" alt="Integration" width={64} height={64} />}
              title="Multi-Kalender Integration"
              description="Verbinde Google, Microsoft oder Apple Kalender in wenigen Schritten."
            />
            <FeatureCard
              icon={<Image src="/next.svg" alt="Automatisierung" width={64} height={64} />}
              title="Automatische Events"
              description="Plane und synchronisiere Termine automatisch über unsere API."
            />
            <FeatureCard
              icon={<Image src="/window.svg" alt="Sicherheit" width={64} height={64} />}
              title="Sichere Authentifizierung"
              description="Deine Daten sind dank Zwei-Faktor-Authentifizierung und bewährter Verschlüsselung geschützt."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} CalendarMate. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}

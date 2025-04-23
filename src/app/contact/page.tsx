export const metadata = {
  title: 'Kontakt',
  description: 'Kontaktiere das CalendarMate Team',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
        <p className="text-lg text-gray-700 mb-6">
          Hast du Fragen oder brauchst du Unterstützung? Schreib uns eine Nachricht!
        </p>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Dein Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Deine E-Mail"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Deine Nachricht"
            rows={5}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Nachricht senden
          </button>
        </form>
      </section>
    </div>
  );
}
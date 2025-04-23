export const metadata = {
  title: 'Über CalendarMate',
  description: 'Erfahre mehr über CalendarMate und seine Funktionen',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Über CalendarMate</h1>
        <p className="text-lg text-gray-700 mb-4">
          CalendarMate ist eine Plattform, die es dir ermöglicht, Termine automatisch in deine bevorzugten Kalender einzufügen.
          Mit nur wenigen Klicks verbindest du Google, Microsoft oder Apple Kalender und synchronisierst deine Termine nahtlos.
        </p>
        <p className="text-lg text-gray-700">
          Ideal für Unternehmen und Privatpersonen, die ihren Workflow optimieren und keine Termine mehr manuell eingeben möchten.
        </p>
      </section>
    </div>
  );
}
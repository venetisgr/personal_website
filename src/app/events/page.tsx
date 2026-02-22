import EventList from "@/components/events/EventList";
import { events } from "@/data/events";

export const metadata = {
  title: "Events | Venetis Pallikaras",
  description: "Conferences, summits, and industry events.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Events
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Conferences, summits, and industry events I&apos;ve attended or
          presented at.
        </p>
      </div>

      <EventList events={events} />
    </div>
  );
}

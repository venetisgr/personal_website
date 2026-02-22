"use client";

import EventCard from "./EventCard";
import type { Event } from "@/data/events";

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  );
}

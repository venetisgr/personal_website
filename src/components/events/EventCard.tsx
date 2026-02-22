"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import type { Event } from "@/data/events";

const roleLabels: Record<Event["role"], string> = {
  attendee: "Attendee",
  speaker: "Speaker",
  panelist: "Panelist",
  organizer: "Organizer",
};

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      className="rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-foreground">{event.title}</h3>
        <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {roleLabels[event.role]}
        </span>
      </div>

      <p className="mt-1 text-sm font-medium text-muted-foreground">
        {event.conference}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {event.date}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {event.location}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {event.description}
      </p>

      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Event page <ExternalLink size={13} />
        </a>
      )}

      {event.tags && event.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

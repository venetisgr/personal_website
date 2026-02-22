"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mic } from "lucide-react";
import type { Conference } from "@/data/experience";

interface ConferenceListProps {
  conferences: Conference[];
}

export default function ConferenceList({ conferences }: ConferenceListProps) {
  return (
    <div className="space-y-3">
      {conferences.map((conf, index) => (
        <motion.div
          key={`${conf.name}-${conf.year}`}
          className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-light">
            <CalendarDays size={20} className="text-accent" />
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-foreground">
              {conf.name}
            </h4>
            <p className="text-xs text-muted-foreground">{conf.year}</p>
            {conf.note && (
              <p className="text-xs text-muted-foreground">{conf.note}</p>
            )}
          </div>

          {conf.role === "presenter" && (
            <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent-light px-2.5 py-1 text-xs font-medium text-accent">
              <Mic size={12} />
              Presenter
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

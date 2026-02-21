"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import type { Job } from "@/data/experience";

interface TimelineItemProps {
  job: Job;
  index: number;
}

export default function TimelineItem({ job, index }: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/30">
        <Briefcase size={14} className="text-primary" />
      </div>

      {/* Content */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {job.period}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin size={12} />
            {job.location}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-foreground">
          {job.role}
        </h3>
        <p className="text-sm font-medium text-primary">{job.company}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {job.description}
        </p>
        <ul className="mt-4 space-y-2">
          {job.achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

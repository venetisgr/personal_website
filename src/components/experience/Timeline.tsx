"use client";

import TimelineItem from "./TimelineItem";
import type { Job } from "@/data/experience";

interface TimelineProps {
  jobs: Job[];
}

export default function Timeline({ jobs }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      {/* Vertical line */}
      <div className="absolute left-[13px] top-4 h-[calc(100%-2rem)] w-px bg-border" />

      {jobs.map((job, index) => (
        <TimelineItem key={job.id} job={job} index={index} />
      ))}
    </div>
  );
}

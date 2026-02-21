"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { Accomplishment } from "@/data/work-log";

interface AccomplishmentItemProps {
  accomplishment: Accomplishment;
  index: number;
}

export default function AccomplishmentItem({ accomplishment, index }: AccomplishmentItemProps) {
  return (
    <motion.div
      className="rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <h4 className="font-semibold text-foreground">{accomplishment.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {accomplishment.description}
      </p>
      {accomplishment.impact && (
        <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-primary">
          <TrendingUp size={14} />
          {accomplishment.impact}
        </p>
      )}
      {accomplishment.tags && accomplishment.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {accomplishment.tags.map((tag) => (
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

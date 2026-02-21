"use client";

import { motion } from "framer-motion";
import AccomplishmentItem from "./AccomplishmentItem";
import type { Quarter } from "@/data/work-log";

interface QuarterSectionProps {
  quarter: Quarter;
  index: number;
}

export default function QuarterSection({ quarter, index }: QuarterSectionProps) {
  return (
    <motion.section
      className="mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-foreground">
        <span className="h-px flex-1 bg-border" />
        <span>{quarter.label}</span>
        <span className="h-px flex-1 bg-border" />
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {quarter.accomplishments.map((item, i) => (
          <AccomplishmentItem key={item.id} accomplishment={item} index={i} />
        ))}
      </div>
    </motion.section>
  );
}

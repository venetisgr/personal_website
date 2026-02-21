"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import type { Certification } from "@/data/experience";

interface SkillBadgesProps {
  certifications: Certification[];
}

export default function SkillBadges({ certifications }: SkillBadgesProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.id}
          className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-light">
            <Award size={18} className="text-accent" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">{cert.name}</h4>
            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            <p className="mt-1 text-xs text-muted-foreground">{cert.year}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

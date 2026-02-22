"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import type { CertificationGroup } from "@/data/experience";

interface CertificationGroupsProps {
  groups: CertificationGroup[];
}

export default function CertificationGroups({
  groups,
}: CertificationGroupsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, index) => (
        <motion.div
          key={group.label}
          className="rounded-xl border border-border bg-card p-5 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-light">
              <Award size={18} className="text-accent" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">
              {group.label}
            </h3>
          </div>
          <ul className="space-y-1.5 pl-1">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

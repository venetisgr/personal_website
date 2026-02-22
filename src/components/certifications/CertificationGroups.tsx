"use client";

import { motion } from "framer-motion";
import { Cloud, GraduationCap, Database, Award } from "lucide-react";
import type { CertificationGroup } from "@/data/experience";

interface CertificationGroupsProps {
  groups: CertificationGroup[];
}

const issuerIcons: Record<string, typeof Award> = {
  "Amazon Web Services": Cloud,
  "Stanford AI Professional Program": GraduationCap,
  Databricks: Database,
};

export default function CertificationGroups({
  groups,
}: CertificationGroupsProps) {
  return (
    <div className="space-y-6">
      {groups.map((group, index) => {
        const Icon = issuerIcons[group.issuer] ?? Award;
        return (
          <motion.div
            key={group.issuer}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Issuer header */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-light">
                <Icon size={20} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {group.issuer}
              </h3>
            </div>

            {/* Certification badges */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <motion.span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + i * 0.05,
                  }}
                >
                  <Award size={13} className="text-accent" />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

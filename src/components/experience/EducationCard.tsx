"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import type { Education } from "@/data/experience";

interface EducationCardProps {
  education: Education;
  index: number;
}

export default function EducationCard({ education, index }: EducationCardProps) {
  return (
    <motion.div
      className="rounded-xl border border-border bg-card p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <GraduationCap size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{education.institution}</h3>
          <p className="text-sm text-muted-foreground">
            {education.degree} in {education.field}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{education.period}</p>
          {education.gpa && (
            <p className="mt-1 text-xs font-medium text-primary">GPA: {education.gpa}</p>
          )}
          {education.highlights && education.highlights.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {education.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, GraduationCap } from "lucide-react";
import { resume } from "@/data/resume";

export default function ResumeSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Resume
            </h2>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Sparkles size={18} className="text-primary" />
            Summary
          </h3>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            {resume.summary}
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <GraduationCap size={18} className="text-primary" />
            Education
          </h3>
          <div className="space-y-4">
            {resume.education.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="font-semibold text-foreground">
                    {edu.institution}
                  </h4>
                  <span className="text-xs text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.degree} &middot; {edu.location}
                </p>
                <p className="mt-1 text-sm font-medium text-primary">
                  GPA: {edu.gpa}
                </p>
                {edu.honors && edu.honors.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {edu.honors.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

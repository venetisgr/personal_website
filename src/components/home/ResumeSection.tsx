"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  BookOpen,
  ExternalLink,
} from "lucide-react";
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
          <h2 className="mb-12 text-2xl font-bold text-foreground sm:text-3xl">
            Resume
          </h2>
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

        {/* Work Experience */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Briefcase size={18} className="text-primary" />
            Work Experience
          </h3>
          <div className="space-y-4">
            {resume.experience.map((job) => (
              <div
                key={job.company}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="font-semibold text-foreground">
                    {job.company}
                  </h4>
                  {job.period && (
                    <span className="text-xs text-muted-foreground">
                      {job.period}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {job.role} &middot; {job.location}
                </p>
                {job.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <BookOpen size={18} className="text-primary" />
            Publications
          </h3>
          <div className="space-y-4">
            {resume.publications.map((pub) => (
              <div
                key={pub.title}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-foreground">{pub.title}</h4>
                  {(pub.url || pub.doi) && (
                    <a
                      href={
                        pub.url ||
                        `https://doi.org/${pub.doi}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 flex-shrink-0 text-primary transition-colors hover:text-primary/80"
                      aria-label="View publication"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pub.authors}
                </p>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  {pub.journal}
                </p>
                <div className="mt-1 flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">
                    {pub.date}
                  </span>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categorized Skills */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Sparkles size={18} className="text-primary" />
            Skills
          </h3>
          <div className="space-y-3">
            {resume.categorizedSkills.map((group) => (
              <div key={group.category} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                <h4 className="mb-2 text-sm font-semibold text-primary">
                  {group.category}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="/welcome_logo.png"
            alt="Welcome logo"
            width={700}
            height={700}
            className="rounded-xl"
          />
        </motion.div>

        {/* Technical Skills, Domains & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Sparkles size={18} className="text-primary" />
            Technical Skills, Domains &amp; Tools
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

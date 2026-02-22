"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { resume } from "@/data/resume";
import { certifications } from "@/data/experience";
import { profile } from "@/data/profile";

export default function ResumeSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            {profile.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {profile.location}
            </span>
            <a
              href={profile.social.email}
              className="flex items-center gap-1 transition-colors hover:text-primary"
            >
              <Mail size={14} />
              {profile.email}
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="mb-3 border-b border-border pb-1 text-sm font-bold tracking-wider text-foreground uppercase">
            Education
          </h2>
          <div className="space-y-3">
            {resume.education.map((edu) => (
              <div key={edu.institution}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-foreground">
                    {edu.institution}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {edu.location}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  GPA: {edu.gpa}
                </p>
                {edu.honors && edu.honors.length > 0 && (
                  <ul className="mt-1 space-y-0.5">
                    {edu.honors.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
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
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h2 className="mb-3 border-b border-border pb-1 text-sm font-bold tracking-wider text-foreground uppercase">
            Skills
          </h2>
          <div className="space-y-1">
            {resume.categorizedSkills.map((group) => (
              <p key={group.category} className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {group.category}:
                </span>{" "}
                {group.items.join(", ")}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-3 border-b border-border pb-1 text-sm font-bold tracking-wider text-foreground uppercase">
            Experience
          </h2>
          <div className="space-y-4">
            {resume.experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-foreground">
                    {job.company}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {job.location}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-sm italic text-muted-foreground">
                    {job.role}
                  </p>
                  <span className="text-sm text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                {job.bullets && job.bullets.length > 0 && (
                  <ul className="mt-1 space-y-0.5">
                    {job.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="mb-3 border-b border-border pb-1 text-sm font-bold tracking-wider text-foreground uppercase">
            Publications
          </h2>
          <div className="space-y-3">
            {resume.publications.map((pub) => (
              <div key={pub.title}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-foreground">{pub.title}</h3>
                  {(pub.url || pub.doi) && (
                    <a
                      href={
                        pub.url || `https://doi.org/${pub.doi}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 flex-shrink-0 text-primary transition-colors hover:text-primary/80"
                      aria-label="View publication"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{pub.authors}</p>
                <p className="text-sm italic text-muted-foreground">
                  {pub.journal} &middot; {pub.date}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Courses & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="mb-3 border-b border-border pb-1 text-sm font-bold tracking-wider text-foreground uppercase">
            Courses &amp; Certifications
          </h2>
          <ul className="space-y-0.5">
            {certifications.map((cert) => (
              <li
                key={cert.id}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                <span>
                  {cert.name} — {cert.issuer} ({cert.year})
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group flex flex-col rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Header with icon */}
      <div className="flex items-center justify-between p-6 pb-0">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
          <Folder size={22} className="text-primary" />
        </div>
        <div className="flex items-center gap-2">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`View source code for ${project.title}`}
            >
              <Github size={18} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

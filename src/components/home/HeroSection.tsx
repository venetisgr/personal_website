"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const socialLinks = [
  { href: profile.social.github, icon: Github, label: "GitHub" },
  { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
];

export default function HeroSection() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-l-2 border-primary/30 pl-4">
            <p className="text-lg font-medium italic text-foreground sm:text-xl">
              &ldquo;Ad astra per aspera&rdquo;
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Through hardships to the stars.
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground/70">
              — Latin proverb
            </p>
          </div>
          <div className="border-l-2 border-primary/30 pl-4">
            <p className="text-lg font-medium italic text-foreground sm:text-xl">
              &ldquo;Αἰὲν ἀριστεύειν&rdquo;
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Ever to excel.
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground/70">
              — Homer, Iliad
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-primary">
            Hello, I&apos;m
          </p>
        </motion.div>

        <motion.h1
          className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          className="mb-6 text-xl text-muted-foreground sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {profile.title}
        </motion.h2>

        <motion.div
          className="mb-8 max-w-2xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {profile.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin size={16} />
            {profile.location}
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <a
            href={profile.social.email}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {profile.email}
          </a>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

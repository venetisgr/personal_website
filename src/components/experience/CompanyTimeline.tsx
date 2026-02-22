"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ChevronDown, ChevronRight, MapPin } from "lucide-react";
import type { Company, DetailSection, ContentBlock } from "@/data/experience";

interface CompanyTimelineProps {
  companies: Company[];
}

export default function CompanyTimeline({ companies }: CompanyTimelineProps) {
  return (
    <div className="space-y-8">
      {companies.map((company, index) => (
        <CompanyCard key={company.id} company={company} index={index} />
      ))}
    </div>
  );
}

function CompanyCard({ company, index }: { company: Company; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-border bg-card shadow-sm"
    >
      {/* Company header */}
      <div className="flex items-center gap-4 border-b border-border px-6 py-5">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Building2 size={22} className="text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-foreground">
            {company.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {company.startYear} – {company.endYear}
            <span className="ml-2 inline-flex items-center gap-1">
              <MapPin size={12} />
              {company.location}
            </span>
          </p>
        </div>
      </div>

      {/* Roles */}
      <div className="divide-y divide-border">
        {company.roles.map((role, roleIdx) => (
          <div key={roleIdx} className="px-6 py-5">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h4 className="text-base font-semibold text-foreground">
                {role.title}
              </h4>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {role.period}
              </span>
            </div>

            {/* Years — rendered in descending order */}
            <div className="mt-4 space-y-3">
              {[...role.years]
                .sort((a, b) => b.year.localeCompare(a.year))
                .map((yearDetail) => (
                  <YearSection key={yearDetail.year} yearDetail={yearDetail} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function YearSection({
  yearDetail,
}: {
  yearDetail: { year: string; highlights: string[]; details: DetailSection[] };
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-border/60 bg-background">
      {/* Year header */}
      <div className="flex items-center gap-2 px-4 py-3">
        <span className="text-sm font-semibold text-foreground">
          {yearDetail.year}
        </span>
      </div>

      {/* Highlights — always visible */}
      <div className="px-4 pb-3">
        <ul className="space-y-1.5">
          {yearDetail.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Detailed accomplishments toggle */}
      {yearDetail.details.length > 0 && (
        <>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="flex w-full items-center gap-2 border-t border-border/40 px-4 py-2.5 text-left transition-colors hover:bg-muted/50"
          >
            {expanded ? (
              <ChevronDown size={14} className="flex-shrink-0 text-primary" />
            ) : (
              <ChevronRight size={14} className="flex-shrink-0 text-primary" />
            )}
            <span className="text-xs font-semibold tracking-wide text-primary">
              Detailed accomplishments
            </span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-5 border-t border-border/40 px-4 py-4">
                  {yearDetail.details.map((section, i) => (
                    <DetailSectionBlock key={i} section={section} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

/** Parses **bold** markers in text and returns React nodes */
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function DetailSectionBlock({ section }: { section: DetailSection }) {
  return (
    <div>
      <h5 className="mb-2 text-sm font-semibold text-foreground">
        {section.title}
      </h5>
      <div className="space-y-2">
        {section.content.map((block, i) =>
          Array.isArray(block) ? (
            <ul key={i} className="space-y-1.5 pl-1">
              {block.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                  <span>{renderFormattedText(item)}</span>
                </li>
              ))}
            </ul>
          ) : block === "---" ? (
            <div key={i} className="h-2" />
          ) : (
            <p key={i} className="text-sm text-muted-foreground">
              {renderFormattedText(block)}
            </p>
          ),
        )}
      </div>
    </div>
  );
}

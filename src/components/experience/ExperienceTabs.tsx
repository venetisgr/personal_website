"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import CompanyTimeline from "./CompanyTimeline";
import SkillBadges from "./SkillBadges";
import type { Company, Certification } from "@/data/experience";

const tabs = [
  { id: "work", label: "Work Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
] as const;

type TabId = (typeof tabs)[number]["id"];

interface ExperienceTabsProps {
  companies: Company[];
  certifications: Certification[];
}

export default function ExperienceTabs({
  companies,
  certifications,
}: ExperienceTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("work");

  return (
    <>
      {/* Tab bar */}
      <div className="mb-10 flex gap-1 rounded-lg border border-border bg-muted p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/70"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-md bg-card shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={16} />
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {activeTab === "work" && <CompanyTimeline companies={companies} />}
      {activeTab === "certifications" && (
        <SkillBadges certifications={certifications} />
      )}
    </>
  );
}

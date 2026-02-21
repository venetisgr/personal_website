"use client";

import { useState } from "react";
import QuarterSection from "@/components/work-log/QuarterSection";
import { workLog } from "@/data/work-log";
import { cn } from "@/lib/utils";

const years = workLog.map((yl) => yl.year);

export default function WorkLogPage() {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const yearData = workLog.find((yl) => yl.year === selectedYear);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Quarterly Work Log
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A record of key accomplishments and milestones, organized by quarter.
        </p>
      </div>

      {/* Year selector */}
      <div className="mb-10 flex flex-wrap gap-2">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              selectedYear === year
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Quarters */}
      {yearData ? (
        yearData.quarters.map((quarter, index) => (
          <QuarterSection key={quarter.label} quarter={quarter} index={index} />
        ))
      ) : (
        <p className="text-muted-foreground">No data for this year yet.</p>
      )}
    </div>
  );
}

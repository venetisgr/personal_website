import CompanyTimeline from "@/components/experience/CompanyTimeline";
import { companies } from "@/data/experience";

export const metadata = {
  title: "Experience | Venetis-Paraskevas Pallikaras",
  description: "Work experience and professional journey.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Work Experience
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A timeline of my professional journey.
        </p>
      </div>

      <CompanyTimeline companies={companies} />
    </div>
  );
}

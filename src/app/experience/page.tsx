import ExperienceTabs from "@/components/experience/ExperienceTabs";
import { companies, certifications } from "@/data/experience";

export const metadata = {
  title: "Experience | Venetis-Paraskevas Pallikaras",
  description: "Work experience and certifications.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Experience & Qualifications
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A timeline of my professional journey and certifications.
        </p>
      </div>

      <ExperienceTabs companies={companies} certifications={certifications} />
    </div>
  );
}

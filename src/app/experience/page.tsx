import Timeline from "@/components/experience/Timeline";
import EducationCard from "@/components/experience/EducationCard";
import SkillBadges from "@/components/experience/SkillBadges";
import { jobs, education, certifications } from "@/data/experience";

export const metadata = {
  title: "Experience | Alex Johnson",
  description: "Work experience, education, and certifications.",
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
          A timeline of my professional journey, education, and certifications.
        </p>
      </div>

      {/* Work experience timeline */}
      <section className="mb-16">
        <h2 className="mb-8 text-xl font-semibold text-foreground">
          Work Experience
        </h2>
        <Timeline jobs={jobs} />
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="mb-6 text-xl font-semibold text-foreground">
          Education
        </h2>
        <div className="grid gap-4">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="mb-6 text-xl font-semibold text-foreground">
          Certifications
        </h2>
        <SkillBadges certifications={certifications} />
      </section>
    </div>
  );
}

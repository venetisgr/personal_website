import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Alex Johnson",
  description: "Personal projects and open-source contributions.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Personal Projects
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A selection of side projects and open-source tools I&apos;ve built.
          Each one taught me something new.
        </p>
      </div>

      <ProjectGrid projects={projects} />
    </div>
  );
}

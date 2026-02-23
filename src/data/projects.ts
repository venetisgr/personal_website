export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  date: string;
  demoUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Personal Portfolio Website",
    description: "A personal portfolio website with bio, work experience timeline, project showcase, and work log.",
    longDescription:
      "A responsive portfolio website built with Next.js 16 App Router and TypeScript. Features four pages — a landing page with bio and resume, a work experience timeline, a project showcase grid, and a quarterly work log. Includes dark/light mode toggle, scroll-triggered animations, and a content-data separation architecture for easy customization.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    date: "February 2026",
    demoUrl: "https://venetis.vercel.app/",
    codeUrl: "https://github.com/venetisgr/personal_website/tree/main",
  },
];

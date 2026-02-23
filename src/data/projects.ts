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
    id: "proj-2",
    title: "Ancient Athenian Agora — LLM Edition",
    description: "A multi-model LLM debate platform.",
    longDescription:
      "A first-of-its-kind platform that brings the world's leading AI models together for structured, multi-round deliberation on any topic you choose. Instead of querying a single model, pit Claude, GPT, Gemini, Grok, DeepSeek, Kimi, Qwen, and GLM against each other in a live debate — and let them argue, challenge, and refine each other's reasoning in real time. Think of it as a virtual Agora where each model's viewpoint is contrasted to surface deeper insights. Your API keys never leave your browser — you control every parameter, from per-participant temperature and persona to consensus threshold and moderator selection.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Socket.IO", "Python", "FastAPI", "httpx", "Pydantic", "WebSocket", "LLM SDKs"],
    date: "February 2026",
    demoUrl: "https://agora-llm.vercel.app/",
    codeUrl: "https://github.com/venetisgr/Council-of-Elders---LLM-Edition/tree/main",
  },
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

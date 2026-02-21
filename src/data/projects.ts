export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "DevFlow",
    description: "A real-time collaborative code editor with built-in terminal and Git integration.",
    longDescription:
      "Built a browser-based IDE supporting real-time collaboration via WebSockets. Features include syntax highlighting for 30+ languages, integrated terminal, Git operations, and live cursors showing collaborator positions.",
    techStack: ["React", "Node.js", "WebSocket", "Monaco Editor", "Docker"],
    demoUrl: "https://devflow-demo.example.com",
    codeUrl: "https://github.com/alexjohnson/devflow",
  },
  {
    id: "proj-2",
    title: "BudgetLens",
    description: "Personal finance tracker with AI-powered spending insights and forecasting.",
    longDescription:
      "A full-stack finance application that connects to bank accounts via Plaid, categorizes transactions using ML, and provides spending forecasts. Features interactive charts, budget alerts, and monthly reports.",
    techStack: ["Next.js", "Python", "PostgreSQL", "Plaid API", "Chart.js"],
    demoUrl: "https://budgetlens.example.com",
    codeUrl: "https://github.com/alexjohnson/budgetlens",
  },
  {
    id: "proj-3",
    title: "CloudDeploy CLI",
    description: "A developer-friendly CLI tool for deploying applications to multiple cloud providers.",
    longDescription:
      "An open-source CLI that abstracts away cloud provider differences. Supports AWS, GCP, and Azure with a unified configuration format. Handles infrastructure provisioning, CI/CD setup, and monitoring configuration.",
    techStack: ["Go", "Terraform", "AWS", "GCP", "Azure"],
    codeUrl: "https://github.com/alexjohnson/clouddeploy",
  },
  {
    id: "proj-4",
    title: "RecipeGraph",
    description: "A social recipe sharing platform with ingredient-based search and meal planning.",
    longDescription:
      "Community-driven recipe platform where users can share, discover, and plan meals. Features a graph-based ingredient search engine, nutritional analysis, and weekly meal planner with automated grocery lists.",
    techStack: ["React", "GraphQL", "Neo4j", "Node.js", "Tailwind CSS"],
    demoUrl: "https://recipegraph.example.com",
    codeUrl: "https://github.com/alexjohnson/recipegraph",
  },
  {
    id: "proj-5",
    title: "StatusPing",
    description: "Uptime monitoring service with incident management and multi-channel alerting.",
    longDescription:
      "A lightweight uptime monitoring tool that checks HTTP endpoints, TCP ports, and DNS records. Sends alerts via Slack, email, and SMS. Includes a public status page and incident timeline.",
    techStack: ["TypeScript", "Redis", "PostgreSQL", "Docker", "Slack API"],
    demoUrl: "https://statusping.example.com",
    codeUrl: "https://github.com/alexjohnson/statusping",
  },
  {
    id: "proj-6",
    title: "MarkdownBlog",
    description: "A static blog engine that converts Markdown files into a fast, SEO-optimized site.",
    longDescription:
      "A minimal static site generator purpose-built for developer blogs. Supports MDX, code syntax highlighting, RSS feeds, automatic OG images, and full-text search — all with zero JavaScript by default.",
    techStack: ["Astro", "TypeScript", "MDX", "Tailwind CSS"],
    demoUrl: "https://blog.alexjohnson.dev",
    codeUrl: "https://github.com/alexjohnson/markdownblog",
  },
];

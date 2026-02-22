export interface Event {
  id: string;
  title: string;
  conference: string;
  location: string;
  date: string;
  description: string;
  role: "attendee" | "speaker" | "panelist" | "organizer";
  tags?: string[];
  link?: string;
}

export const events: Event[] = [
  {
    id: "event-5",
    title: "The AI Agent Conference by LangChain \u2502 Interrupt 2025",
    conference: "AI Agent Conference (LangChain / Interrupt)",
    location: "San Francisco, CA",
    date: "May 2025",
    description:
      "Attended LangChain's flagship agent-centric AI conference focused on agent engineering, orchestration frameworks, tooling, and production deployment of autonomous multi-agent systems.",
    role: "attendee",
    tags: ["Agent AI", "Generative AI", "Orchestration", "AI Tooling", "Evaluation", "Hands-On Labs", "LangChain", "Agents", "GenAI", "Systems"],
  },
  {
    id: "event-6",
    title: "2024 ANS Winter Conference & Expo",
    conference: "American Nuclear Society Winter Conference & Expo",
    location: "Orlando, FL",
    date: "November 2024",
    description:
      "Presented two technical papers at the annual ANS conference; Agentic Retrieval Augmented Generation for Advanced Reactor Thermal Hydraulic System and Retrieval Augmented Generation for Liquid Sodium Facility Documentation Processing. Showcasing applications of RAG methods for domain-specific retrieval and structured information extraction.",
    role: "speaker",
    tags: ["Technical Research", "RAG", "Domain-Specific RAG", "ANS", "Research", "Generative AI"],
  },
  {
    id: "event-7",
    title: "Full Stack LLM Bootcamp 2023",
    conference: "Full Stack LLM Bootcamp",
    location: "San Francisco, CA",
    date: "April 2023",
    description:
      "Completed an intensive bootcamp covering end-to-end large language model systems, including prompt engineering, RAG architectures, model evaluation frameworks, and deployment best practices.",
    role: "attendee",
    tags: ["LLM Engineering", "RAG Architectures", "Prompt Engineering", "Production Deployment", "LLM", "RAG", "GenAI"],
  },
  {
    id: "event-8",
    title: "AWS Summit Atlanta 2022",
    conference: "AWS Summit Atlanta 2022",
    location: "Atlanta, GA",
    date: "May 2022",
    description:
      "Attended AWS's flagship cloud summit exploring scalable AI/ML and infrastructure solutions. Participated in the AWS DeepRacer Challenge, gaining hands-on reinforcement learning experience in an autonomous racing environment.",
    role: "attendee",
    tags: ["Cloud Computing", "AI/ML Infrastructure", "Scalable Systems", "AWS DeepRacer Challenge", "Reinforcement Learning", "Cloud"],
  },
  {
    id: "event-9",
    title: "ODSC West 2021",
    conference: "Open Data Science Conference \u2013 West",
    location: "San Francisco, CA",
    date: "November 2021",
    description:
      "Attended one of the largest data science and AI practitioner conferences, featuring hands-on workshops, expert talks, and sessions covering machine learning, NLP, and practical AI systems.",
    role: "attendee",
    tags: ["ODSC", "Data Science", "Machine Learning", "Deep Learning", "AI Workshops"],
  },
];

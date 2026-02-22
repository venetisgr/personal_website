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
    id: "event-1",
    title: "Data + AI Summit 2025",
    conference: "Databricks Data + AI Summit",
    location: "San Francisco, CA",
    date: "June 2025",
    description:
      "Attended Databricks' flagship conference covering the latest in data engineering, AI/ML, and generative AI on the Lakehouse platform.",
    role: "attendee",
    tags: ["Databricks", "GenAI", "Data Engineering"],
  },
  {
    id: "event-5",
    title: "The AI Agent Conference by LangChain | Interrupt",
    conference: "Interrupt 2025",
    location: "San Francisco, CA",
    date: "2025",
    description:
      "Attended LangChain's AI Agent Conference exploring the latest in autonomous agents, tool use, and agentic AI architectures.",
    role: "attendee",
    tags: ["LangChain", "AI Agents", "LLMs"],
  },
  {
    id: "event-6",
    title: "ANS Winter Conference and Expo 2024",
    conference: "American Nuclear Society Winter Conference",
    location: "Orlando, FL",
    date: "2024",
    description:
      "Presented at the American Nuclear Society's Winter Conference and Expo, sharing research and insights with nuclear science and engineering professionals.",
    role: "speaker",
    tags: ["Nuclear", "Presentation"],
  },
  {
    id: "event-7",
    title: "Full Stack LLM Bootcamp 2023",
    conference: "Full Stack LLM Bootcamp",
    location: "San Francisco, CA",
    date: "2023",
    description:
      "Participated in an intensive bootcamp covering the full stack of building applications with large language models, from prompt engineering to deployment.",
    role: "attendee",
    tags: ["LLMs", "Full Stack", "Bootcamp"],
  },
  {
    id: "event-8",
    title: "AWS Summit Atlanta 2022",
    conference: "AWS Summit",
    location: "Atlanta, GA",
    date: "2022",
    description:
      "Attended the AWS Summit and participated in the AWS DeepRacer Challenge, competing in autonomous racing using reinforcement learning models.",
    role: "attendee",
    tags: ["AWS", "DeepRacer", "Reinforcement Learning"],
  },
  {
    id: "event-9",
    title: "ODSC West 2021",
    conference: "Open Data Science Conference",
    location: "San Francisco, CA",
    date: "2021",
    description:
      "Attended the Open Data Science Conference West, engaging with sessions on machine learning, data science tools, and AI applications.",
    role: "attendee",
    tags: ["Data Science", "ML", "Open Source"],
  },
];

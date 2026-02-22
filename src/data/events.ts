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
    id: "event-2",
    title: "AWS re:Invent 2024",
    conference: "AWS re:Invent",
    location: "Las Vegas, NV",
    date: "December 2024",
    description:
      "Participated in Amazon Web Services' annual cloud computing conference, exploring sessions on ML infrastructure, serverless AI, and responsible AI practices.",
    role: "attendee",
    tags: ["AWS", "Cloud", "ML Infrastructure"],
  },
  {
    id: "event-3",
    title: "NeurIPS 2024",
    conference: "Conference on Neural Information Processing Systems",
    location: "Vancouver, Canada",
    date: "December 2024",
    description:
      "Attended one of the premier machine learning research conferences, engaging with cutting-edge research on large language models, alignment, and AI safety.",
    role: "attendee",
    tags: ["Research", "NLP", "Deep Learning"],
  },
  {
    id: "event-4",
    title: "AI & Big Data Expo North America 2024",
    conference: "AI & Big Data Expo",
    location: "Santa Clara, CA",
    date: "June 2024",
    description:
      "Explored enterprise AI solutions, MLOps best practices, and real-world case studies on deploying generative AI at scale.",
    role: "attendee",
    tags: ["Enterprise AI", "MLOps", "Big Data"],
  },
];

/** A content block inside a detail section: plain string = paragraph, string[] = bullet list */
export type ContentBlock = string | string[];

export interface DetailSection {
  title: string;
  content: ContentBlock[];
}

export interface YearDetail {
  year: string;
  highlights: string[];
  details: DetailSection[];
}

export interface Role {
  title: string;
  period: string;
  location: string;
  years: YearDetail[];
}

export interface Company {
  id: string;
  name: string;
  startYear: string;
  endYear: string;
  roles: Role[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export const companies: Company[] = [
  {
    id: "nfcu",
    name: "Navy Federal Credit Union",
    startYear: "2023",
    endYear: "Present",
    roles: [
      {
        title: "Senior Data Scientist",
        period: "2023 – Present",
        location: "Vienna, VA",
        years: [
          {
            year: "2024",
            highlights: [
              "Architected and productionized the enterprise Insight Discovery Framework (Map → Reduce → Classification), transforming large-scale call and chat data into structured intelligence used across departments. This framework can be used to surface product issues, member complaints, praise signals, competitive comparisons, and emerging themes, etc.",
              "Enabled rapid post-launch feedback analysis for a major mobile app update (Omni V7), systematically surfacing complaints and praise and feeding insights directly to design and development teams for accelerated issue resolution.",
              "Standardized LLM inference across the enterprise by building reusable GPU-optimized template notebooks (utilizing vLLM and LangChain), establishing the fastest production baseline.",
              "Finetuned and deployed the organization's first 7B and 70B LLM models.",
              "Designed NFCU's first internal assistant utilizing RAG technology in order to assist call representatives and other internal teams to automate their daily workflow.",
              "Designed an automated LLM-as-a-Judge evaluation framework for RAG systems aligned with human scoring.",
              "Delivered transcript-driven insight analyses (issues, benefits, competitive comparisons, etc.) for CD and credit card products that informed and influenced product revamp discussions.",
              "Built a hybrid transformer + LLM praise detection pipeline to isolate high-impact praise and extract reasoning. Created the equivalent for complaint detection.",
            ],
            details: [
              {
                title: "Insight Discovery Framework (Map → Reduce → Classification)",
                content: [
                  "In 2024, I architected and productionized the enterprise Insight Discovery Framework, a scalable Map → Reduce → Classification pipeline designed to convert large-scale call transcripts and chat messages into structured, quantifiable intelligence.",
                  "The framework operates in three stages:",
                  [
                    "Map: Record-level LLM extraction of issues, complaints, praise signals, competitive comparisons, and sentiment.",
                    "Reduce: Recursive aggregation of record-level outputs into higher-level summaries and consolidated insight themes.",
                    "Classification: Standardization and quantification of discovered themes to enable trend analysis and reporting.",
                  ],
                  "This system unlocked previously underutilized conversational data and enabled multiple departments to:",
                  [
                    "Identify emerging product issues and friction points",
                    "Quantify complaint categories and praise signals",
                    "Surface competitive comparisons and product perception trends",
                    "Monitor sentiment shifts over time",
                  ],
                  "The framework runs within Databricks utilizing vLLM and LangChain.",
                ],
              },
              {
                title: "Product & Mobile App Impact (Omni V7)",
                content: [
                  "Following the rollout of a major mobile application update (Omni V7), the Insight Discovery Framework was leveraged to:",
                  [
                    "Systematically identify and quantify member complaints and praise related to the new release",
                    "Detect recurring usability and experience issues",
                    "Surface positive adoption signals and feature-level feedback",
                    "Transfer structured insights directly to design and development teams",
                  ],
                  "This created a rapid post-launch feedback loop, enabling faster issue resolution and more targeted product iteration.",
                ],
              },
              {
                title: "CD & Credit Card Product Analysis",
                content: [
                  "Using the same framework, I delivered transcript-driven analyses for CD and credit card products, identifying:",
                  [
                    "Member-reported issues and limitations",
                    "Perceived benefits and value drivers",
                    "Competitive comparisons and themes",
                  ],
                  "These findings were presented internally and contributed to product revamp discussions and strategic refinements.",
                ],
              },
              {
                title: "LLM Infrastructure & Performance Engineering",
                content: [
                  "To support enterprise-scale insight extraction, I built and optimized the underlying LLM infrastructure:",
                  [
                    "Developed distributed and single-GPU inference notebooks for large-scale transcript processing.",
                    "Benchmarked inference methods and productionized a vLLM-based pipeline that became the fastest baseline.",
                    "Fine-tuned and deployed the organization's first 7B and 70B LLM models.",
                    "Standardized reusable GPU-optimized inference template notebooks (vLLM + LangChain) used across the enterprise. Including performance tuning and custom formatting functions.",
                  ],
                ],
              },
              {
                title: "Internal Assistant & RAG Systems",
                content: [
                  "In parallel, I designed the organization's first internal assistant leveraging RAG (Retrieval-Augmented Generation) to support call representatives and internal teams in automating daily workflows.",
                  [
                    "Built and evaluated RAG pipelines.",
                    "Designed an automated LLM-as-a-Judge evaluation framework aligned with human scoring.",
                    "Improved intent detection and query rewriting for reliability and accuracy.",
                  ],
                ],
              },
              {
                title: "RAG System Evaluation",
                content: [
                  [
                    "Designed automated RAG evaluation workflows and documented methodology.",
                  ],
                ],
              },
              {
                title: "Praise, Complaint & Sentiment Systems",
                content: [
                  [
                    "Built a hybrid transformer + LLM praise detection pipeline to isolate high-impact praise and extract reasoning. Created the equivalent for complaint detection.",
                    "Performed sentiment analysis across segments and time to identify satisfaction trends and sentiment shifts.",
                  ],
                ],
              },
              {
                title: "Knowledge Sharing & Standardization",
                content: [
                  [
                    "Created reusable inference templates and benchmarking workflows adopted across teams.",
                    "Mentored intern(s) and abstracted LLM complexity into simplified notebooks.",
                    "Delivered internal presentations on LLM capabilities and infrastructure.",
                  ],
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "University of California, Berkeley",
    degree: "B.S.",
    field: "Computer Science",
    period: "2015 – 2019",
    gpa: "3.7 / 4.0",
    highlights: [
      "Dean's List – 6 semesters",
      "Teaching Assistant for Data Structures & Algorithms",
      "Senior Capstone: Real-time collaborative code editor",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    id: "cert-2",
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: "2022",
  },
  {
    id: "cert-3",
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2021",
  },
];

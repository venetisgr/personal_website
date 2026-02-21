export interface YearDetail {
  year: string;
  highlights: string[];
  details: string[];
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
              "More details coming soon.",
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

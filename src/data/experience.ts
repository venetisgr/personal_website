export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
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

export const jobs: Job[] = [
  {
    id: "job-1",
    company: "TechCorp Inc.",
    role: "Senior Software Engineer",
    period: "Jan 2023 – Present",
    location: "San Francisco, CA",
    description:
      "Leading development of the core platform serving millions of users. Working across the full stack with React, Node.js, and AWS.",
    achievements: [
      "Architected and led migration from monolith to microservices, cutting deploy time by 70%",
      "Built real-time analytics dashboard used by 50K+ daily active users",
      "Established code review standards and mentored 4 junior engineers",
      "Reduced infrastructure costs by 25% through performance optimization",
    ],
  },
  {
    id: "job-2",
    company: "StartupXYZ",
    role: "Software Engineer",
    period: "Jun 2021 – Dec 2022",
    location: "Remote",
    description:
      "Full-stack development on a SaaS platform helping small businesses manage operations. Worked in a fast-paced agile environment.",
    achievements: [
      "Developed a payment processing system handling $2M+ in monthly transactions",
      "Built a customer-facing API consumed by 200+ third-party integrations",
      "Implemented automated testing pipeline, increasing code coverage from 40% to 85%",
      "Led the front-end rewrite from jQuery to React, improving page load times by 60%",
    ],
  },
  {
    id: "job-3",
    company: "DataSystems Ltd.",
    role: "Junior Software Engineer",
    period: "Aug 2019 – May 2021",
    location: "New York, NY",
    description:
      "Contributed to enterprise data management tools used by Fortune 500 clients. Focused on back-end services and database optimization.",
    achievements: [
      "Developed ETL pipelines processing 10M+ records daily",
      "Reduced database query times by 40% through indexing and query optimization",
      "Built internal monitoring dashboard used by the operations team",
      "Contributed to API documentation that reduced onboarding time by 50%",
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

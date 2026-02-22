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
  years: YearDetail[];
}

export interface Company {
  id: string;
  name: string;
  location: string;
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
    location: "Vienna, VA, USA",
    startYear: "2023",
    endYear: "Present",
    roles: [
      {
        title: "Senior Data Scientist",
        period: "2023 – Present",
        years: [
          {
            year: "2025 — AI/ML Center of Excellence",
            highlights: [
              "Built an automated LLM-as-a-Judge validation framework to detect incorrect classifications and missed topics, improving reliability and trust in large-scale LLM deployments.",
              "Delivered GenAI-driven mortgage application and documentation insight discovery (leveraging the Insight Discovery Framework), producing structured complaint analysis, competitive comparisons, and executive-ready reporting.",
              "Created a distilled sentiment analysis dataset and trained smaller models aligned with team-specific sentiment guidelines, enabling scalable cross-business adoption.",
              "Designed and productionized a 6-month forward Engagement Tier predictive model, reducing ~1500 features to ~100 via feature selection and SHAP, with fully MLOps-ready training and scoring pipelines.",
              "Engineered graph-based member importance and relevancy features using PageRank-, TF-IDF-inspired, and custom metrics across transaction, referral, and product graphs.",
              "Led LLM-based analysis of government shutdown impact, identifying affected members, extracting related topics, and quantifying sentiment shifts.",
              "Standardized enterprise GenAI adoption by building reusable LLM templates, inference notebooks, and embedding pipelines adopted across multiple teams.",
              "Delivered executive and cross-functional reports powered by the Insight Discovery Framework to support data-driven strategic decisions.",
              "Trained and enabled multiple teams on LLM best practices, Databricks workflows, and Insight Discovery methodologies, presenting advanced generative AI techniques and optimization strategies across internal forums.",
              "Re-architected and productionized PEGA-based marketing feature pipelines, engineering 11 feature-store-ready attributes and enabling scalable marketing model development.",
            ],
            details: [
              {
                title: "Enterprise Topic Intelligence - Insight Discovery Framework",
                content: [
                  "In 2025, I expanded the Insight Discovery platform into a structured, continuously operating enterprise intelligence system.",
                  "---",
                  "**30-Topic Enterprise Classification Pipeline:**",
                  "I designed and deployed a 30-topic LLM classification framework over call and chat data, enabling:",
                  [
                    "Daily structured monitoring of emerging issues",
                    "Quantification of recurring themes",
                    "Standardized topic tracking across teams",
                  ],
                  "To reduce false positives and classification noise, I introduced noise-capture classes, allowing the model to avoid forced misclassification when insufficient signal was present. This materially improved classification reliability and downstream analytics quality.",
                ],
              },
              {
                title: "LLM-as-a-Judge Validation Framework",
                content: [
                  "To ensure classification quality at scale, I built an automated LLM-as-a-Judge validation layer that:",
                  [
                    "Detects incorrect classifications",
                    "Identifies topics that were missed but should have been selected",
                    "Quantifies topic-level hit ratios",
                  ],
                  "This framework significantly increased trust in LLM-driven outputs and enabled scalable validation without manual review.",
                ],
              },
              {
                title: "GenAI for Lending & Mortgage Intelligence",
                content: [
                  "Building on the Insight Discovery framework, I delivered GenAI-driven analysis for mortgage application and documentation workflows.",
                  "This included:",
                  [
                    "Complaint and friction point discovery and Competitive comparison analysis (2 map steps)",
                    "Recursive aggregation of issues (2 reduce steps)",
                    "Executive-ready reporting and slide decks",
                  ],
                  "These analyses helped business teams better understand:",
                  [
                    "Documentation-related bottlenecks",
                    "Member experience pain points",
                    "Competitive perception trends",
                  ],
                  "The notebooks were designed to be reusable, enabling quarterly analysis going forward.",
                ],
              },
              {
                title: "Sentiment Model Distillation & Democratization",
                content: [
                  "To scale sentiment analysis beyond LLM inference:",
                  [
                    "I created a distilled sentiment dataset aligned with team-specific sentiment guidelines.",
                    "Trained smaller models using this dataset.",
                    "Enabled business teams to adopt lighter-weight models aligned to their own definitions of positive/negative sentiment.",
                  ],
                  "This reduced dependency on large models and supported sustainable adoption across departments.",
                ],
              },
              {
                title: "Predictive Modeling: Engagement Tier (6-Month Forward)",
                content: [
                  "I designed and productionized a 6-month forward Engagement Tier predictive model focused on both prediction and driver explainability.",
                  "Key components:",
                  [
                    "Feature-store-only input design",
                    "Feature reduction from ~1500 → ~100 using importance metrics + SHAP",
                    "Hyperparameter optimization",
                    "Fully MLOps-ready training and scoring notebooks",
                    "One-pager documentation for stakeholders",
                  ],
                  "The model serves two purposes:",
                  [
                    "Predict future engagement tier shifts",
                    "Identify drivers influencing engagement changes",
                  ],
                  "This supports proactive engagement strategies and strategic prioritization.",
                ],
              },
              {
                title: "Graph-Based Feature Engineering & Network Intelligence",
                content: [
                  "In parallel, I engineered graph-derived features to enhance member-level understanding.",
                  "Member Importance (V1):",
                  [
                    "Developed importance metrics using transfer count, transfer volume, weighted combinations, and PageRank-inspired logic",
                    "Applied across transaction, referral, and product graphs",
                  ],
                  "Member Relevancy (V2):",
                  [
                    "Created 12 graph-based features inspired by TF-IDF principles",
                    "Designed custom metrics to measure contextual relevance within networks",
                  ],
                  "These features provide a network-aware perspective for predictive modeling and segmentation.",
                ],
              },
              {
                title: "Strategic Initiative: Government Shutdown Analysis",
                content: [
                  "I led an LLM-based analysis to assess the impact of a government shutdown:",
                  [
                    "Identified affected members via transcript analysis",
                    "Extracted related discussion topics",
                    "Measured sentiment shifts",
                    "Analyzed those who received payment assistance",
                  ],
                  "This provided leadership with structured visibility into the real-world impact of macro events on members.",
                ],
              },
              {
                title: "Marketing Feature Engineering (PEGA Features)",
                content: [
                  [
                    "Re-architected and productionized PEGA-based marketing feature pipelines, consolidating multiple data sources into a unified master dataset and engineering 11 feature-store-ready attributes.",
                    "Built reusable feature engineering templates with performance optimizations and MLOps-ready code, enabling scalable and maintainable marketing model development.",
                    "Collaborated cross-functionally with marketing stakeholders to align features with campaign and engagement strategy objectives.",
                  ],
                ],
              },
              {
                title: "Enterprise GenAI Standardization & Enablement",
                content: [
                  "To support scalable adoption, I:",
                  [
                    "Built reusable LLM inference templates",
                    "Created embedding pipelines for downstream tasks",
                    "Developed standardized notebooks for map-reduce-classification workflows",
                    "Delivered ad-hoc executive and cross-functional reports powered by Insight Discovery",
                    "Trained multiple teams on LLM usage, best practices, and reproducibility",
                    "Presented internally on advanced Databricks workflows and generative AI optimization techniques",
                  ],
                  "This shifted GenAI from experimental usage to a structured, reusable enterprise capability.",
                ],
              },
            ],
          },
          {
            year: "2024 — AI/ML Center of Excellence",
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
      {
        title: "Data Scientist",
        period: "2023 – 2023",
        years: [
          {
            year: "2023 — AI/ML Center of Excellence",
            highlights: [
              "For detailed accomplishments during this period, see the 2023 section under the Senior Data Scientist role above.",
            ],
            details: [],
          },
        ],
      },
    ],
  },
  {
    id: "gatech",
    name: "Georgia Institute of Technology",
    location: "Atlanta, GA, USA",
    startYear: "2022",
    endYear: "2023",
    roles: [
      {
        title: "Graduate Teaching Assistant",
        period: "2022 – 2023",
        years: [
          {
            year: "2022 – 2023",
            highlights: [
              "GTA for the courses CS 7641-Machine Learning and CSE 6242-Data and Visual Analytics",
            ],
            details: [],
          },
        ],
      },
    ],
  },
  {
    id: "ge",
    name: "General Electric",
    location: "Atlanta, GA, USA",
    startYear: "2022",
    endYear: "2022",
    roles: [
      {
        title: "Data Science Intern",
        period: "2022",
        years: [
          {
            year: "2022 — Summer Practicum",
            highlights: [
              "Created Deep Learning models based on the ANN, CNN and LSTM architectures using Tensorflow",
              "Explored multiple model size reduction techniques",
              "Deployed on an Arduino using Tensorflow Lite in order to perform inference on the edge",
            ],
            details: [],
          },
        ],
      },
    ],
  },
  {
    id: "helcoml",
    name: "HelcoML Systems",
    location: "Athens, Attica, Greece",
    startYear: "2019",
    endYear: "2021",
    roles: [
      {
        title: "Data Scientist",
        period: "2019 – 2021",
        years: [
          {
            year: "2019 – 2021",
            highlights: [
              "Audio Deep Learning Model Training (TensorFlow, Keras)",
              "Machine Learning Applications (XGBoost, Scikit-Learn)",
            ],
            details: [],
          },
        ],
      },
    ],
  },
  {
    id: "demokritos",
    name: 'National Centre for Scientific Research "Demokritos"',
    location: "Athens, Attica, Greece",
    startYear: "2018",
    endYear: "2018",
    roles: [
      {
        title: "Research Intern",
        period: "2018",
        years: [
          {
            year: "2018 — Institute of Nanoscience and Nanotechnology",
            highlights: [
              "Electrical characterization of memristive devices (memristors)",
              "Analyzed the behavior of memristors during consecutive read and write tests",
              "Executed retention measurements of memristors",
              "Analyzed the behavior of memristors under various temperatures",
              "Analyzed the analog behavior of memristors",
            ],
            details: [],
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

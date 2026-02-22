export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  honors?: string[];
}

export interface ExperienceRoleLine {
  company: string;
  role: string;
  location: string;
  period: string;
}

export interface ExperienceEntry {
  roles: ExperienceRoleLine[];
  bullets: string[];
}

export interface ProjectEntry {
  title: string;
  subtitle?: string;
  bullets?: string[];
}

export interface PublicationEntry {
  title: string;
  date: string;
  url?: string;
}

export interface CertificationLine {
  label: string;
  items: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  date: string;
  doi?: string;
  url?: string;
}

export interface WorkExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  bullets?: string[];
}

export const resume = {
  summary:
    "Senior Data Scientist specializing in NLP, Generative AI, Machine Learning, and Deep Learning. Proven experience architecting and deploying production-scale LLM pipelines, RAG systems, agentic AI workflows, and advanced predictive models in enterprise environments.",
  education: [
    {
      institution: "Georgia Institute of Technology",
      degree: "MSc in Analytics",
      location: "Atlanta, GA, USA",
      period: "Aug 2021 – Dec 2022",
      gpa: "4.0 / 4.0",
    },
    {
      institution: "Democritus University of Thrace",
      degree: "BSc & MSc in Electrical and Computer Engineering",
      location: "Xanthi, Greece",
      period: "Oct 2014 – Nov 2019",
      gpa: '8.85 / 10 "Excellent", 3.7 / 4.0 (WES Course by Course Evaluation)',
      honors: [
        "Second Among Graduating Year (Salutatorian)",
        "Thesis: Automated speaker diarization and recognition in videos (Grade: 10/10)",
      ],
    },
  ] as EducationEntry[],
  categorizedSkills: [
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "R", "Java", "JavaScript", "C++", "C"],
    },
    {
      category: "ML Software",
      items: [
        "Tensorflow",
        "Keras",
        "Pytorch",
        "Scikit-Learn",
        "HDBSCAN",
        "XGBoost",
        "LightGBM",
        "Optuna",
        "HyperOpt",
        "PySpark",
        "PYG",
        "TinyML",
      ],
    },
    {
      category: "NLP & Generative AI Software",
      items: [
        "NLTK",
        "SpaCy",
        "BERTopic",
        "KeyBert",
        "Hugging Face",
        "Transformers",
        "vLLM",
        "LangChain",
        "LlamaIndex",
        "Unsloth",
        "Axolotl",
        "Megatron",
        "LangGraph",
        "Azure AI Foundry",
        "n8n",
        "Agent Reinforcement Trainer (ART)",
        "Copilot Studio",
        "AutoGen",
      ],
    },
    {
      category: "Analytical Techniques",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Web Scraping",
        "Computer Vision",
        "GraphML",
        "NLP",
        "LLMs",
        "Generative AI",
        "Reinforcement Learning",
        "LLM-Finetuning",
        "GRPO",
      ],
    },
    {
      category: "Visualization",
      items: ["Tableau", "Plotly", "Dash", "Seaborn", "D3.js", "Matplotlib"],
    },
    {
      category: "Other",
      items: [
        "Git",
        "Linux",
        "HTML",
        "CSS",
        "Beautiful Soup",
        "Selenium",
        "Pinecone",
        "MLflow",
        "Weights & Biases",
        "FastAPI",
        "LangSmith",
        "Modal",
        "Vercel",
      ],
    },
  ],
  experienceEntries: [
    {
      roles: [
        {
          company: "Navy Federal Credit Union",
          role: "Senior Data Scientist",
          location: "Vienna, VA, USA",
          period: "Sept 2023 – Present",
        },
        {
          company: "Navy Federal Credit Union",
          role: "Data Scientist",
          location: "Vienna, VA, USA",
          period: "Jan 2023 – Sept 2023",
        },
      ],
      bullets: [
        "Designed and deployed a GenAI Insight Discovery Pipeline on Databricks for large-scale call and chat transcripts, performing record-level theme extraction (vLLM), recursive summarization (LangChain), and topic quantification. Converting unstructured member conversations into structured insights to enable early issue detection and data-driven decision-making.",
        "Accelerated enterprise GenAI adoption by building reusable LLM notebooks, prompt templates, and starter workflows. This streamlined internal LLM access and reduced onboarding time for analysts and data scientists.",
        "Created multiple NLP solutions, developing sentiment analysis, emotion classification, praise/complaint detection, a multi-stage aspect-based sentiment & summarization system that identifies the core topics/issues, maps it to the relevant product/feature, evaluates sentiment, and generates summaries per topic/issue. These models are used across business units to elevate member experience and operational efficiency.",
        "Developed a RAG pipeline to assist our call representatives and other internal teams to automate their daily workflow. Built internal RAG evaluation system (LLM-as-a-judge) which was aligned with human scoring.",
        "Delivered insight-driven reporting for multiple enterprise initiatives, including government shutdown impact analysis, competitive banking product comparison, CD product redesign support, loan application journey pain-point extraction, and OMNI (mobile/online banking) post-launch issue discovery.",
        "Presented monthly at Databricks User Group, sharing internal NLP/GenAI solutions and advanced Databricks practices.",
        "Developed predictive models, including a 6-month forward-looking member engagement model supporting proactive outreach and retention initiative by utilizing XGBoost and HyperOpt.",
      ],
    },
    {
      roles: [
        {
          company: "General Electric",
          role: "Summer Practicum",
          location: "Atlanta, GA, USA",
          period: "May 2022 – Aug 2022",
        },
      ],
      bullets: [
        "Explored model compression techniques and deployed deep learning models on Arduino using TensorFlow Lite for edge inference.",
      ],
    },
    {
      roles: [
        {
          company: 'National Centre for Scientific Research "Demokritos"',
          role: "Research Intern",
          location: "Athens, Greece",
          period: "July 2018 – Sept 2018",
        },
      ],
      bullets: [
        "Analyzed the analog behavior of Memristors and executed Retention and Electrical Characterization measurements on them.",
      ],
    },
  ] as ExperienceEntry[],
  projectsAndPublications: {
    projects: [
      {
        title: "Predict likelihood of members having housing insecurity issues",
        subtitle: "Top 1 Accuracy | Sponsor: Humana — Fall 2022",
        bullets: [
          "Created an ensemble of decision tree-based algorithms using XGBoost, LightGBM and Optuna for hyperparameter tuning.",
        ],
      },
    ] as ProjectEntry[],
    publications: [
      {
        title:
          'Published Paper: "Retrieval Augmented Generation for Liquid Sodium Facility Documentation Processing"',
        date: "Dec 2024",
        url: "https://www.researchgate.net/publication/387798937_Retrieval_Augmented_Generation_for_Liquid_Sodium_Facility_Documentation_Processing",
      },
      {
        title:
          'Published Paper: "Agentic Retrieval Augmented Generation for Advanced Reactor Thermal Hydraulic System"',
        date: "Dec 2024",
        url: "https://www.researchgate.net/publication/387798703_Agentic_Retrieval_Augmented_Generation_for_Advanced_Reactor_Thermal_Hydraulic_System",
      },
    ] as PublicationEntry[],
  },
  certificationLines: [
    { label: "Certifications", items: "AWS-CCP" },
    {
      label: "Stanford AI Professional Program",
      items: "ML with Graphs, NLP with DL, Natural Language Understanding (NLU)",
    },
    {
      label: "Databricks",
      items:
        "Generative AI fundamentals, Data Engineer Associate, ML Data Scientist Associate, Generative AI Engineer Associate",
    },
  ] as CertificationLine[],
  // Legacy fields used by home page
  experience: [
    {
      company: "Navy Federal Credit Union",
      role: "Senior Data Scientist, Data Scientist",
      location: "Vienna, VA, USA",
      period: "2023 – Present",
      description: "",
    },
    {
      company: "Georgia Institute of Technology",
      role: "Graduate Teaching Assistant",
      location: "Atlanta, GA, USA",
      period: "2022 – 2023",
      description: "",
    },
    {
      company: "General Electric",
      role: "Summer Practicum",
      location: "Atlanta, GA, USA",
      period: "2022",
      description: "",
    },
    {
      company: "HelcoML Systems",
      role: "Data Scientist",
      location: "Athens, Attica, Greece",
      period: "2019 – 2021",
      description: "",
    },
    {
      company: 'National Centre for Scientific Research "Demokritos"',
      role: "Research Intern",
      location: "Athens, Attica, Greece",
      period: "2018",
      description: "",
    },
  ] as WorkExperienceEntry[],
  publications: [
    {
      title:
        "Agentic Retrieval Augmented Generation for Advanced Reactor Thermal Hydraulic System",
      authors:
        "K. Prantikos, V. Pallikaras, M. Pantopoulou, L.H. Tsoukalas, A. Heifetz",
      journal: "2024 ANS Winter Conference and Expo",
      date: "December 2024",
      url: "https://www.researchgate.net/publication/387798703_Agentic_Retrieval_Augmented_Generation_for_Advanced_Reactor_Thermal_Hydraulic_System",
    },
    {
      title:
        "Retrieval Augmented Generation for Liquid Sodium Facility Documentation Processing",
      authors:
        "K. Prantikos, V. Pallikaras, M. Pantopoulou, L.H. Tsoukalas, A. Heifetz",
      journal: "2024 ANS Winter Conference and Expo",
      date: "December 2024",
      url: "https://www.researchgate.net/publication/387798937_Retrieval_Augmented_Generation_for_Liquid_Sodium_Facility_Documentation_Processing",
    },
    {
      title:
        "Artificial Neural Network Performance Boost using Probabilistic Recovery with Fast Cascade Training",
      authors:
        "A. Maniatopoulos, A. Gazis, V. Pallikaras, N. Mitianoudis",
      journal: "International Journal of Circuits, Systems and Signal Processing",
      date: "November 2020",
      url: "https://www.researchgate.net/publication/348234182_Artificial_Neural_Network_Performance_Boost_using_Probabilistic_Recovery_with_Fast_Cascade_Training",
    },
  ] as Publication[],
  skills: [
    "Natural Language Processing (NLP)",
    "Large Language Models (LLMs)",
    "Generative AI",
    "Retrieval-Augmented Generation (RAG)",
    "Agentic AI Systems",
    "Machine Learning",
    "Deep Learning",
    "Reinforcement Learning",
    "LLM Fine-Tuning",
    "GRPO",
    "Prompt Engineering",
    "LLM Evaluation (LLM-as-a-Judge)",
    "Recursive Summarization",
    "Agent Orchestration",
    "Workflow Automation",
    "Supervised Learning",
    "Unsupervised Learning",
    "Ensemble Learning",
    "Predictive Modeling",
    "Hyperparameter Optimization",
    "Model Compression",
    "Graph Machine Learning (GraphML)",
    "Computer Vision",
    "TinyML",
    "Edge AI",
    "Production-Scale AI Systems",
    "Enterprise AI Deployment",
    "MLOps",
    "Model Versioning",
    "Data Engineering",
    "Databricks",
    "MLflow",
    "Weights & Biases",
    "Pinecone",
    "FastAPI",
    "Modal",
    "Vercel",
    "LangSmith",
    "Azure AI Foundry",
    "Copilot Studio",
    "AWS (Cloud Practitioner)",
    "Python",
    "SQL",
    "R",
    "Java",
    "JavaScript",
    "C++",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "XGBoost",
    "LightGBM",
    "PySpark",
    "LangChain",
    "LlamaIndex",
    "LangGraph",
    "Hugging Face",
    "vLLM",
    "AutoGen",
    "Unsloth",
    "Axolotl",
    "Megatron",
    "NLTK",
    "SpaCy",
    "BERTopic",
    "KeyBERT",
    "Sentiment Analysis",
    "Emotion Classification",
    "Aspect-Based Sentiment Analysis",
    "Topic Modeling",
    "Tableau",
    "Plotly",
    "Dash",
    "Seaborn",
    "Matplotlib",
    "D3.js",
    "Linux",
    "Git",
    "Selenium",
    "BeautifulSoup",
    "Azure",
    "AWS",
  ],
};

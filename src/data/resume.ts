export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  honors?: string[];
}

export interface WorkExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  bullets?: string[];
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  date: string;
  doi?: string;
  url?: string;
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
      location: "Xanthi, Xanthi, Greece",
      period: "Oct 2014 – Nov 2019",
      gpa: '8.85 / 10 "Excellent" (3.7 / 4.0 WES)',
      honors: [
        "Second Among Graduating Year (Salutatorian)",
        "Thesis: Automated speaker diarization and recognition in videos (Grade: 10/10)",
      ],
    },
  ] as EducationEntry[],
  experience: [
    {
      company: "Navy Federal Credit Union",
      role: "Senior Data Scientist, Data Scientist",
      location: "Vienna, VA, USA",
      period: "2023 – Present",
      description: "",
      bullets: [
        "Architected and productionized the enterprise Insight Discovery Framework (Map → Reduce → Classification), transforming large-scale call and chat data into structured intelligence used across departments.",
        "Built an automated LLM-as-a-Judge validation framework to detect incorrect classifications and missed topics, improving reliability and trust in large-scale LLM deployments.",
        "Delivered GenAI-driven mortgage application and documentation insight discovery, producing structured complaint analysis, competitive comparisons, and executive-ready reporting.",
        "Designed and productionized a 6-month forward Engagement Tier predictive model, reducing ~1500 features to ~100 via feature selection and SHAP, with fully MLOps-ready training and scoring pipelines.",
        "Engineered graph-based member importance and relevancy features using PageRank-, TF-IDF-inspired, and custom metrics across transaction, referral, and product graphs.",
        "Standardized LLM inference across the enterprise by building reusable GPU-optimized template notebooks (utilizing vLLM and LangChain), establishing the fastest production baseline.",
        "Finetuned and deployed the organization's first 7B and 70B LLM models.",
        "Designed NFCU's first internal assistant utilizing RAG technology to assist call representatives and internal teams.",
        "Built and deployed the first-generation Voice of Member pipeline, transforming call and text data into structured sentiment, summaries, keyphrases, and taxonomy-driven insights. This was NFCU's first production NLP model.",
        "Designed and productionized Topic Analysis and Intent Identification models using BERTopic and transformer-based architectures.",
        "Re-architected and productionized PEGA-based marketing feature pipelines, engineering 11 feature-store-ready attributes.",
        "Led LLM-based analysis of government shutdown impact, identifying affected members, extracting related topics, and quantifying sentiment shifts.",
        "Trained and enabled multiple teams on LLM best practices, Databricks workflows, and Insight Discovery methodologies.",
      ],
    },
    {
      company: "Georgia Institute of Technology",
      role: "Graduate Teaching Assistant",
      location: "Atlanta, GA, USA",
      period: "2022 – 2023",
      description: "",
      bullets: [
        "GTA for the courses CS 7641-Machine Learning and CSE 6242-Data and Visual Analytics",
      ],
    },
    {
      company: "General Electric",
      role: "Data Science Intern",
      location: "Atlanta, GA, USA",
      period: "2022",
      description: "",
      bullets: [
        "Created Deep Learning models based on the ANN, CNN and LSTM architectures using Tensorflow",
        "Explored multiple model size reduction techniques",
        "Deployed on an Arduino using Tensorflow Lite in order to perform inference on the edge",
      ],
    },
    {
      company: "HelcoML Systems",
      role: "Data Scientist",
      location: "Athens, Attica, Greece",
      period: "2019 – 2021",
      description: "",
      bullets: [
        "Audio Deep Learning Model Training (TensorFlow, Keras)",
        "Machine Learning Applications (XGBoost, Scikit-Learn)",
      ],
    },
    {
      company: 'National Centre for Scientific Research "Demokritos"',
      role: "Research Intern",
      location: "Athens, Attica, Greece",
      period: "2018",
      description: "",
      bullets: [
        "Electrical characterization of memristive devices (memristors)",
        "Analyzed the behavior of memristors during consecutive read and write tests",
        "Executed retention measurements of memristors",
        "Analyzed the behavior of memristors under various temperatures",
        "Analyzed the analog behavior of memristors",
      ],
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
  categorizedSkills: [
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "R", "Java", "JavaScript", "C++", "C"],
    },
    {
      category: "ML & DL Software",
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
      category: "Data & Cloud Platforms",
      items: ["Databricks", "Azure", "AWS"],
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
};

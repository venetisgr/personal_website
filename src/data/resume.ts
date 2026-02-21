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
    "Senior Data Scientist specializing in NLP, Generative AI, Machine Learning, and Deep Learning. Proven experience architecting and deploying production-scale LLM pipelines, RAG systems, agentic AI workflows, and advanced predictive models in enterprise environments. Georgia Tech MSc in Analytics graduate with a 4.0 GPA and a published researcher in Retrieval Augmented Generation.",
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
      location: "USA",
      period: "2023 – Present",
      description:
        "Design and deploy production-scale AI systems focused on NLP, Generative AI applications, Advanced Machine Learning, and Deep Learning.",
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
      role: "Data Science Intern",
      location: "USA",
      period: "2022",
      description: "",
    },
    {
      company: "HelcoML Systems",
      role: "Data Scientist",
      location: "",
      period: "2019 – 2021",
      description: "",
    },
    {
      company: 'National Centre for Scientific Research "Demokritos"',
      role: "Research Intern",
      location: "Greece",
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
        "A. Maniatopoulos, A. Gazis, V.P. Pallikaras, N. Mitianoudis",
      journal:
        "International Journal of Circuits, Systems and Signal Processing, Vol. 14, pp. 847–854",
      date: "November 2020",
      url: "https://www.researchgate.net/publication/348234182_Artificial_Neural_Network_Performance_Boost_using_Probabilistic_Recovery_with_Fast_Cascade_Training",
    },
  ] as Publication[],
  skills: [
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
    "RAG",
    "NLP",
    "LLMs",
    "Computer Vision",
    "Reinforcement Learning",
    "Tableau",
    "Plotly",
    "D3.js",
    "Git",
    "Linux",
    "FastAPI",
    "MLflow",
    "Weights & Biases",
    "Pinecone",
    "Databricks",
    "AWS",
  ],
};

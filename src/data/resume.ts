export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  honors?: string[];
}

export const resume = {
  summary:
    "Senior Data Scientist with expertise in NLP, Generative AI, and machine learning. Experienced in designing and deploying LLM-powered pipelines, RAG systems, and predictive models at enterprise scale. Georgia Tech MSc in Analytics graduate with a 4.0 GPA and a published researcher in Retrieval Augmented Generation.",
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

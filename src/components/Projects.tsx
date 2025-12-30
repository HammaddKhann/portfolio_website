import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Real-Time E-Commerce Analytics Platform',
    shortDescription: 'Comprehensive big data pipeline with streaming analytics and live dashboards',
    fullDescription: 'Built a full-stack real-time e-commerce analytics platform featuring continuous event generation, distributed storage with MongoDB and HDFS, Apache Spark stream processing, Apache Airflow orchestration, and live Metabase dashboards.',
    tags: ['Big Data', 'Real-Time', 'Analytics'],
    tech: ['Apache Spark', 'Hadoop', 'MongoDB', 'Airflow', 'Metabase', 'Docker', 'Parquet'],
    problem: 'E-commerce businesses need immediate visibility into revenue-impacting events but traditional batch processing creates delays of hours or days in business intelligence.',
    solution: 'Implemented a distributed data pipeline with Spark-based ETL processing 5 KPIs and 7 OLAP queries every minute. Events stored in MongoDB with automatic HDFS archiving (70-80% compression via Parquet). Containerized 9 services using Docker Compose for horizontal scalability.',
    impact: '1-2 minute end-to-end latency from event generation to dashboard visualization, enabling real-time business intelligence for operational decision-making',
    github: '#',
    live: undefined,
  },
  {
    id: 2,
    title: 'AI-Powered ECG Monitoring Learning System',
    shortDescription: 'Real-time ECG anomaly detection with privacy-preserving ML',
    fullDescription: 'Built a comprehensive real-time ECG anomaly detection pipeline with FastAPI, Docker, MLflow, and Prometheus/Grafana, featuring complete MLOps automation, CI/CD, and monitoring capabilities.',
    tags: ['ML', 'MLOps', 'Healthcare AI'],
    tech: ['FastAPI', 'Docker', 'MLflow', 'Prometheus', 'Grafana', 'FAISS', 'PyTorch'],
    problem: 'Healthcare systems needed a privacy-preserving way to detect ECG abnormalities in real-time while maintaining patient data confidentiality.',
    solution: 'Implemented a complete RAG-based LLMOps workflow with FAISS retrieval, prompt engineering strategies, evaluation pipelines, cloud integration, and safety guardrails combined with federated learning.',
    impact: 'Delivered a scalable, privacy-preserving system for early ECG abnormality detection and improved clinical support',
    github: '#',
    live: undefined,
  },
  {
    id: 3,
    title: 'Bicep Rep Curl Counter using CNNs',
    shortDescription: 'Real-time exercise tracking with computer vision',
    fullDescription: 'Designed and implemented a real-time bicep rep curl counter by building a convolutional neural network from scratch, then optimizing it using TensorFlow.',
    tags: ['Computer Vision', 'Deep Learning', 'ML'],
    tech: ['TensorFlow', 'PyTorch', 'OpenCV', 'Python', 'CNN'],
    problem: 'Fitness enthusiasts needed an automated way to count exercise repetitions accurately without manual tracking.',
    solution: 'Created a custom dataset of 4,000+ images using OpenCV for training and testing, ensuring diverse angles and lighting conditions. Built a CNN from scratch achieving 61% accuracy, then optimized with TensorFlow to reach 74% accuracy.',
    impact: 'Real-time rep counting with 74% accuracy, enabling automated fitness tracking',
    github: '#',
    live: undefined,
  },
  {
    id: 7,
    title: 'Game of Thrones RAG System',
    shortDescription: 'Custom RAG implementation with FAISS and Llama for GoT universe queries',
    fullDescription: 'Built a Retrieval-Augmented Generation system from scratch for Game of Thrones content, featuring a comprehensive database of books, web-scraped data, FAISS vector search, and Llama LLM integration.',
    tags: ['NLP', 'RAG', 'LLM'],
    tech: ['FAISS', 'Llama', 'Hugging Face', 'Python', 'Web Scraping', 'Vector DB'],
    problem: 'Game of Thrones fans needed an intelligent system to query the vast universe of books, characters, and lore, but traditional search methods could not understand context or provide comprehensive answers.',
    solution: 'Created a custom RAG pipeline with web scraping to collect GoT content, embedded text using transformer models, stored vectors in FAISS for efficient similarity search, and integrated Llama open-source LLM from Hugging Face for context-aware response generation.',
    impact: 'Enabled natural language queries about GoT universe with contextually accurate responses, demonstrating end-to-end RAG implementation skills',
    github: '#',
    live: undefined,
  },
  {
    id: 4,
    title: 'Vendor Library Web Application (PSO)',
    shortDescription: 'Centralized vendor management for 21,000+ vendors',
    fullDescription: "Engineered a full-stack vendor library web application using React, Tailwind CSS, Node.js, and Express.js to centralize and manage data for Pakistan State Oil's 21,000+ vendors.",
    tags: ['Full-Stack', 'OCR', 'Automation'],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Tesseract', 'OpenCV', 'Pandas'],
    problem: 'PSO needed to digitize and centralize vendor records to improve procurement efficiency and transparency.',
    solution: 'Automated digitization of 1,000+ vendor records using OCR pipelines with Tesseract, pdfplumber, LayoutParser, PubLayNet, EAST model, and OpenCV for accurate table extraction.',
    impact: 'Enhanced procurement operations by increasing vendor participation and supplier diversity, improving transparency and efficiency in the pre-tender stage',
    github: '#',
    live: undefined,
  },
  {
    id: 5,
    title: 'Car Rental Management System',
    shortDescription: 'Full-stack rental platform handling 1,000+ daily transactions',
    fullDescription: 'Built a comprehensive Car Rental Management System with Next.js, TypeScript, and MySQL, capable of handling over 1,000 transactions per day with real-time booking and role-based access controls.',
    tags: ['Full-Stack', 'Database', 'Web App'],
    tech: ['Next.js', 'TypeScript', 'MySQL', 'JWT', 'Node.js'],
    problem: 'Traditional car rental systems lacked real-time booking capabilities and efficient transaction processing.',
    solution: 'Designed the Entity-Relationship Diagram (ERD) and developed a relational database using SQL with optimized queries and multiple triggers. Implemented JWT-based authentication with role-specific access controls.',
    impact: '30% reduction in response time through SQL query optimization and trigger implementation',
    github: '#',
    live: undefined,
  },
  {
    id: 6,
    title: 'Housing Price Prediction',
    shortDescription: 'ML model for Russian housing market analysis',
    fullDescription: 'Performed comprehensive EDA and feature engineering on a 272-feature Russian housing dataset, implementing and optimizing multiple regression models.',
    tags: ['Machine Learning', 'Data Science'],
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
    problem: 'Predicting housing prices accurately from a complex dataset with 272 features required sophisticated feature engineering and model optimization.',
    solution: 'Implemented and optimized multiple regression models (Linear Regression, Ridge, Lasso, Random Forest, Gradient Boosting, XGBoost) with hyperparameter tuning and comprehensive evaluation across multiple metrics.',
    impact: 'Achieved over 94% accuracy, ranked 19th out of 110 participants in competitive ML challenge',
    github: '#',
    live: undefined,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-20 md:py-32 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

        <div className="section-container relative">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of ML/AI and full-stack projects that showcase
              intelligent systems and measurable real-world impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group gradient-border p-6 md:p-8 rounded-2xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 
                                   transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 
                                   transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary 
                                   group-hover:gap-2 transition-all">
                    View Details
                    <ChevronRight size={16} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card p-8 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {selectedProject.fullDescription}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Problem</h4>
                <p className="text-muted-foreground">{selectedProject.problem}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Solution</h4>
                <p className="text-muted-foreground">{selectedProject.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Impact</h4>
                <p className="text-muted-foreground">{selectedProject.impact}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  className="flex items-center gap-2 px-6 py-3 bg-secondary text-foreground 
                             rounded-full font-medium hover:bg-secondary/80 transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                             rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;

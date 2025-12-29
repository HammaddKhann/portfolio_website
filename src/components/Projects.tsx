import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Real-Time Analytics Platform',
    shortDescription: 'End-to-end streaming analytics for e-commerce',
    fullDescription: 'Built a comprehensive real-time analytics platform processing 1M+ events per minute for an e-commerce company, enabling instant insights into customer behavior.',
    tags: ['Big Data', 'Real-Time', 'Analytics'],
    tech: ['Apache Kafka', 'Spark Streaming', 'AWS', 'PostgreSQL', 'Grafana'],
    problem: 'The client needed real-time visibility into customer behavior but their batch processing system had a 24-hour delay.',
    solution: 'Designed a streaming architecture using Kafka for ingestion and Spark Streaming for processing, with real-time dashboards in Grafana.',
    impact: '60% faster decision-making, $2M additional revenue from real-time recommendations',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Data Lake Architecture',
    shortDescription: 'Unified data lake for a Fortune 500 company',
    fullDescription: 'Architected and implemented a cloud-native data lake on AWS, consolidating data from 50+ sources into a single source of truth.',
    tags: ['Cloud', 'Architecture', 'ETL'],
    tech: ['AWS S3', 'Glue', 'Athena', 'Apache Airflow', 'dbt'],
    problem: 'Data silos across 50+ systems made it impossible to get unified business insights.',
    solution: 'Implemented a medallion architecture (Bronze/Silver/Gold) with automated data quality checks and governance policies.',
    impact: '80% reduction in data preparation time, enabled 100+ analysts with self-service analytics',
    github: '#',
  },
  {
    id: 3,
    title: 'ML Feature Store',
    shortDescription: 'Centralized feature engineering platform',
    fullDescription: 'Created a feature store enabling data scientists to discover, share, and version machine learning features across the organization.',
    tags: ['ML Ops', 'Data Platform'],
    tech: ['Python', 'Feast', 'Redis', 'PostgreSQL', 'Kubernetes'],
    problem: 'Data scientists were duplicating feature engineering efforts, leading to inconsistent model performance.',
    solution: 'Built a centralized feature store with versioning, lineage tracking, and real-time serving capabilities.',
    impact: 'Reduced feature development time by 40%, improved model consistency across teams',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'IoT Data Pipeline',
    shortDescription: 'Processing 10B+ sensor events daily',
    fullDescription: 'Designed high-throughput data pipeline for IoT sensor data from manufacturing equipment, enabling predictive maintenance.',
    tags: ['IoT', 'Big Data', 'Real-Time'],
    tech: ['Apache Flink', 'Kafka', 'InfluxDB', 'Grafana', 'Python'],
    problem: 'Manufacturing downtime was costing $500K per hour due to unexpected equipment failures.',
    solution: 'Built a streaming pipeline with anomaly detection algorithms to predict failures 2 hours in advance.',
    impact: '45% reduction in unplanned downtime, $8M annual savings',
    github: '#',
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
              A selection of data engineering projects that showcase 
              scalable architecture and measurable business impact.
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

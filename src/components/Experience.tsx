import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'TechCorp Inc.',
    role: 'Senior Data Engineer',
    duration: 'Jan 2023 - Present',
    achievements: [
      'Led migration of on-premise data warehouse to cloud (AWS), reducing costs by 40%',
      'Architected real-time data platform processing 5M+ events/minute',
      'Mentored team of 4 junior engineers, improving team velocity by 30%',
      'Implemented data governance framework achieving 99.9% data quality SLA',
    ],
  },
  {
    company: 'DataFlow Solutions',
    role: 'Data Engineer',
    duration: 'Jun 2021 - Dec 2022',
    achievements: [
      'Built ETL pipelines processing 2TB+ data daily using Spark and Airflow',
      'Designed data models for analytics, reducing query times by 60%',
      'Developed real-time fraud detection system with 95% accuracy',
      'Optimized cloud infrastructure, cutting monthly costs by $50K',
    ],
  },
  {
    company: 'Analytics Startup',
    role: 'Junior Data Engineer',
    duration: 'Aug 2020 - May 2021',
    achievements: [
      'Created automated data pipelines for customer analytics dashboard',
      'Implemented data quality checks reducing data incidents by 80%',
      'Built internal data catalog improving data discoverability',
    ],
  },
  {
    company: 'University Research Lab',
    role: 'Research Assistant (Data)',
    duration: 'Jan 2019 - Jul 2020',
    achievements: [
      'Analyzed large-scale datasets for machine learning research projects',
      'Published paper on efficient data preprocessing techniques',
      'Developed visualization tools for complex data patterns',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A track record of delivering impactful data solutions 
            across diverse industries and scales.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div 
                  className={`hidden md:block absolute top-6 w-4 h-4 bg-primary rounded-full 
                              border-4 border-background ${
                    index % 2 === 0 ? '-right-2' : '-left-2'
                  }`}
                />

                <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

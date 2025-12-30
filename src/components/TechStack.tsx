import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techCategories = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'NoSQL'],
  },
  {
    title: 'Machine Learning & AI',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Tesseract'],
  },
  {
    title: 'Data Processing',
    items: ['Pandas', 'NumPy', 'Spark', 'Hadoop', 'Airflow'],
  },
  {
    title: 'Web Development',
    items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'FastAPI'],
  },
  {
    title: 'MLOps & DevOps',
    items: ['Docker', 'GitHub Actions', 'MLflow', 'Prometheus', 'Grafana', 'Git'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'Redis', 'FAISS', 'ChromaDB'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Jupyter', 'VS Code', 'Linux', 'AWS', 'Metabase'],
  },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tech-stack" className="py-20 md:py-32 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4">
            Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems,
            scalable web applications, and ML-powered solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    className="px-3 py-1.5 text-sm font-medium bg-secondary/50 text-foreground 
                               border border-border/50 rounded-lg hover:border-primary/50 
                               hover:bg-secondary transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cloud, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Machine Learning & AI',
    description: 'PyTorch, TensorFlow, Scikit-learn & Computer Vision',
  },
  {
    icon: Database,
    title: 'Data Processing & Analytics',
    description: 'Pandas, NumPy, Spark, Hadoop & Data Science',
  },
  {
    icon: Cloud,
    title: 'Web Development',
    description: 'React, Next.js, Node.js & Full-Stack Applications',
  },
  {
    icon: Lightbulb,
    title: 'MLOps & DevOps',
    description: 'Docker, CI/CD, MLflow & Cloud Deployment',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image/Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="absolute inset-4 glass-card rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <span className="text-5xl font-bold gradient-text">MHK</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      CS Student @ IBA
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl"
              >
                <p className="text-sm font-medium text-primary">CGPA 3.73</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl"
              >
                <p className="text-sm font-medium text-accent">Dean's List</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-medium text-primary mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Turning Data Into{' '}
              <span className="gradient-text">Intelligence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              I’m a Computer Science student at IBA Karachi with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. I enjoy working with data to build intelligent systems, from analyzing complex datasets and processing natural language to developing applications that turn AI ideas into real-world solutions. My goal is to use data-driven insights and machine learning to create meaningful and practical impact.
            </motion.p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group p-4 rounded-xl bg-secondary/30 border border-border/50 
                             hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

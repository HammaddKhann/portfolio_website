import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cloud, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Building robust data pipelines and ETL processes',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Designing scalable solutions on AWS, GCP & Azure',
  },
  {
    icon: Code2,
    title: 'Real-Time Systems',
    description: 'Streaming analytics with Kafka & Spark',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Turning complex data challenges into solutions',
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
                        <span className="text-5xl font-bold gradient-text">JD</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      4+ Years Experience
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
                <p className="text-sm font-medium text-primary">50+ Projects</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl"
              >
                <p className="text-sm font-medium text-accent">10TB+ Data Processed</p>
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
              Transforming Data Into{' '}
              <span className="gradient-text">Impact</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              I'm a passionate Data Engineer with expertise in building scalable data infrastructure 
              and real-time analytics systems. My journey started with a curiosity for how data 
              shapes decisions, and has evolved into crafting end-to-end data solutions that 
              power business intelligence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground mb-10 leading-relaxed"
            >
              I thrive on solving complex problems, whether it's optimizing a slow pipeline, 
              architecting a data lake, or building real-time dashboards that drive immediate action. 
              My approach combines technical excellence with a deep understanding of business needs.
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

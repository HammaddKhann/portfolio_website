import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const technicalSkills = [
  { name: 'Machine Learning & AI', level: 90 },
  { name: 'Data Processing & Analytics', level: 88 },
  { name: 'Web Development', level: 85 },
  { name: 'MLOps & DevOps', level: 83 },
  { name: 'Database Systems', level: 87 },
  { name: 'Cloud Computing', level: 80 },
];

const analyticalSkills = [
  'System Design',
  'Problem Solving',
  'Data Analysis',
  'Feature Engineering',
  'Model Optimization',
  'Algorithm Design',
];

const tools = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'React',
  'Next.js',
  'Docker',
  'Spark',
  'Hadoop',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Git',
  'Jupyter',
  'VS Code',
  'Linux',
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of technical mastery and analytical thinking
            to deliver exceptional solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 glass-card p-6 md:p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full" />
              Technical Skills
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                      className="skill-bar-fill"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Analytical & Tools */}
          <div className="space-y-8">
            {/* Analytical Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Analytical Skills
              </h3>

              <div className="flex flex-wrap gap-2">
                {analyticalSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="px-3 py-1.5 text-sm font-medium bg-accent/20 text-accent 
                               border border-accent/30 rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Tools & Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                    className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground 
                               border border-border/50 rounded-full hover:border-primary/50 
                               hover:bg-secondary/80 transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

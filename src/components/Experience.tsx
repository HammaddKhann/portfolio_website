import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Pakistan State Oil',
    role: 'Procurement Department - Intern',
    duration: 'July 2025 - Aug 2025',
    achievements: [
      'Engineered a full-stack vendor library web application (React, Tailwind CSS, Node.js, Express.js) to centralize and manage data for 21,000+ vendors',
      'Automated digitization of 1,000+ vendor records using OCR pipelines with Tesseract, pdfplumber, LayoutParser, PubLayNet, EAST model, OpenCV, and Pandas',
      'Enhanced procurement operations by increasing vendor participation and supplier diversity, improving transparency and efficiency in the pre-tender stage',
    ],
  },
  {
    company: 'Alpha Education Network — Alpha College',
    role: 'Associate Teacher, Physics',
    duration: 'Oct 2021 - June 2022',
    achievements: [
      'Conducted 20-30 tutorial sessions every week on Physics for AS and A2-Level students',
      'Graded examination scripts for over 500 students and provided feedback and academic counselling',
      'Mentored 1500+ students, providing academic guidance and problem-solving techniques',
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
            Hands-on experience in software development, automation,
            and education across diverse environments.
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
                className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                  }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`hidden md:block absolute top-6 w-4 h-4 bg-primary rounded-full 
                              border-4 border-background ${index % 2 === 0 ? '-right-2' : '-left-2'
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

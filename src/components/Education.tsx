import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'BSc. in Computer Science',
    institution: 'Institute of Business Administration, Karachi',
    duration: '2022 - 2026',
    gpa: '3.73',
    specialization: "Dean's List",
    coursework: [
      'Introduction to Machine Learning',
      'Introduction to Text Analytics',
      'Software Engineering',
      'Database Systems',
      'Business Intelligence',
      'Big Data Analytics',
      'MLOps',
      'Statistical Inference',
    ],
  },
  {
    degree: 'A-Levels',
    institution: 'Alpha College',
    duration: '2019 - 2021',
    grades: '2A* 1A',
    coursework: [
      'Physics',
      'Mathematics',
      'Chemistry',
    ],
  },
];

const certifications = [
  // Add any certifications if available in the future
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 md:py-32 relative">
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
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Education {certifications.length > 0 && <>& <span className="gradient-text">Certifications</span></>}
            {certifications.length === 0 && <span className="gradient-text">Journey</span>}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {edu.duration} • {edu.gpa ? `GPA: ${edu.gpa}` : `Grades: ${(edu as any).grades}`}
                    </p>
                    {edu.specialization && (
                      <p className="text-sm mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full font-medium">
                          <Award className="w-3.5 h-3.5" />
                          {edu.specialization}
                        </span>
                      </p>
                    )}
                    <div>
                      <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications - Only show if there are certifications */}
          {certifications.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
                <Award className="text-accent" />
                Certifications
              </h3>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 
                                 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent 
                                      flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;

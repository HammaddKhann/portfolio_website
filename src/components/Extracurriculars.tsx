import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Mic, Heart, Code, Zap } from 'lucide-react';

const activities = [
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    description: '1st Place at BigData Hackathon 2023 - Built real-time analytics solution',
    color: 'text-yellow-500',
  },
  {
    icon: Users,
    title: 'Tech Community Lead',
    description: 'Leading 500+ member Data Engineering community, organizing monthly meetups',
    color: 'text-primary',
  },
  {
    icon: Mic,
    title: 'Conference Speaker',
    description: 'Spoke at 5+ conferences including DataEngConf and Kafka Summit',
    color: 'text-accent',
  },
  {
    icon: Code,
    title: 'Open Source Contributor',
    description: 'Active contributor to Apache Airflow and dbt projects',
    color: 'text-green-500',
  },
  {
    icon: Heart,
    title: 'Tech Mentor',
    description: 'Mentoring aspiring data engineers through ADPList and internal programs',
    color: 'text-red-500',
  },
  {
    icon: Zap,
    title: 'Technical Writer',
    description: 'Published 20+ articles on data engineering best practices on Medium',
    color: 'text-orange-500',
  },
];

const Extracurriculars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4">
            Beyond Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Leadership & <span className="gradient-text">Community</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Giving back to the community through mentorship, 
            speaking, and open source contributions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-secondary/50 mb-4 ${activity.color}`}>
                <activity.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {activity.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Award, Heart } from 'lucide-react';

const activities = [
  {
    icon: Award,
    title: 'Astera IT Workshop at NOWPDP',
    description: 'Mentored students at an IT Workshop organized by Astera at NOWPDP, a non-profit organization empowering the differently-abled. Delivered session on AI, data analytics, Python, Power BI, and MS Excel for participants.',
    color: 'text-blue-500',
  },
  {
    icon: Users,
    title: 'IBA Convocation - Head Volunteer',
    description: 'Managed a team of 60 volunteers to coordinate logistics and hospitality for 3,000+ guests. Coordinated distribution of 1000+ souvenirs.',
    color: 'text-primary',
  },
  {
    icon: Award,
    title: 'IBA Arts & Photography Society',
    description: 'Core Team, Scavenger Hunt Module. Designed puzzles for 3-day event with 1,200 participants. Won award for best module among 22 modules.',
    color: 'text-yellow-500',
  },
  {
    icon: Trophy,
    title: 'Regular Football/Futsal Player',
    description: 'Played for multiple teams across Karachi including Ittehad FC, RBKarachi, Black FC. Competed in regional tournaments and club matches.',
    color: 'text-green-500',
  },
  {
    icon: Heart,
    title: 'Teaching & Mentorship',
    description: 'Former Associate Teacher at Alpha College. Mentored 1500+ students in Physics, providing academic guidance and problem-solving techniques.',
    color: 'text-accent',
  },
];

const Extracurriculars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="extracurriculars" className="py-20 md:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4">
            Beyond Academics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Leadership & <span className="gradient-text">Community</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Active involvement in university events, sports, and community service,
            demonstrating leadership and teamwork.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

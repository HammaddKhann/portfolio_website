import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text"
          >
            {'MHK'}
          </motion.a>

          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/HammaddKhann"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-hammad-khan-739950279/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="hammadalam021@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

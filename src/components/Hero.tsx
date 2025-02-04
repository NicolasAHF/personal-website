import React from "react";
import { Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  language: "en" | "es";
  t: {
    hero: {
      title: string;
      btnDownload: string;
      btnProjects: string;
    };
  };
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.3,
    },
  },
};

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient dark:bg-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-white/[0.05]" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-32 relative">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-16"
          variants={containerVariants}
        >
          <motion.div
            className="md:w-1/2 space-y-8"
            variants={itemVariants}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white text-glow">
              <span className="gradient-text">Nicolas Hernandez</span>
              <span className="block mt-4 text-4xl md:text-5xl">
                {t.hero.title}
              </span>
            </h1>

            <motion.p
              className="text-xl text-gray-300 max-w-xl"
              variants={itemVariants}
            >
              Crafting digital experiences through innovative code and creative solutions.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-secondary hover:bg-opacity-90 text-white 
                           rounded-full font-medium transition-all 
                           flex items-center gap-2 border-glow"
              >
                <Download size={20} />
                {t.hero.btnDownload}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 
                           hover:border-secondary text-white rounded-full 
                           font-medium transition-all"
              >
                {t.hero.btnProjects}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/4" 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src="/images/profile.webp"
              alt="Profile Photo"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={30} className="text-white/50" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

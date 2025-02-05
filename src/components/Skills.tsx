import React from "react";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

interface SkillsProps {
  t: {
    skills: {
      title: string;
    };
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <motion.section
      id="skills"
      className="py-32 bg-white dark:bg-dark/50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }} 
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mx-auto mb-16 gradient-text"
          variants={categoryVariants}
        >
          {t.skills.title}
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div 
              key={category} 
              className="space-y-6"
              variants={categoryVariants}
            >
              <h3 className="text-3xl font-bold text-center text-primary dark:text-white mb-8">
                {category}
              </h3>

              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card p-4 rounded-xl text-center 
                               bg-transparent border border-transparent"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="text-lg font-medium text-primary dark:text-white mb-2">
                      {skill.name}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${
                        skill.level === "Advanced"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;

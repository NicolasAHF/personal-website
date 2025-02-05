import React from "react";
import { motion } from "framer-motion";

interface AboutProps {
  t: {
    about: {
      title: string;
      journey: string;
      text: string;
      education: string;
      educationText: string;
      role: string;
      roleText: string;
      interests: string;
      readingTitle: string;
      readingText: string;
      travelingTitle: string;
      travelingText: string;
      gamingTitle: string;
      gamingText: string;
      trainingTitle: string;
      trainingText: string;
    };
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, 
      ease: "easeOut",
    },
  },
};

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <motion.section
      id="about"
      className="py-32 bg-white dark:bg-dark/50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 gradient-text"
          variants={itemVariants}
        >
          {t.about.title}
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-16" 
          variants={containerVariants}
        >
          <motion.div 
            className="space-y-6" 
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-primary dark:text-white">
              {t.about.journey}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.text}
            </p>

            <div className="space-y-6">
              <motion.div
                className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 
                           border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t.about.education}
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src="/images/ort.webp"
                    alt="ORT logo"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="text-gray-600 dark:text-gray-300">
                    {t.about.educationText}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 
                           border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t.about.role}
                </h4>
                <div className="flex items-center gap-2 mb-2">
                <img 
                    src="/images/oracle.webp"
                    alt="ORT logo"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.roleText}
                </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna Derecha */}
          <motion.div 
            className="space-y-6" 
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-primary dark:text-white">
              {t.about.interests}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {/* Lectura */}
              <motion.div
                className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 
                           border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-4xl mb-4 block">📚</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t.about.readingTitle}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.readingText}
                </p>
              </motion.div>

              {/* Viajes */}
              <motion.div
                className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 
                           border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-4xl mb-4 block">✈️</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t.about.travelingTitle}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.travelingText}
                </p>
              </motion.div>

              {/* Videojuegos */}
              <motion.div
                className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 
                           border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-4xl mb-4 block">🎮</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t.about.gamingTitle}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.gamingText}
                </p>
              </motion.div>

              {/* Entrenamiento */}
              <motion.div
                className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 
                           border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-4xl mb-4 block">🏋️‍♂️</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t.about.trainingTitle}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.trainingText}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

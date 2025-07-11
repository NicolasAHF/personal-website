import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Sparkles } from "lucide-react";
import { experienceData } from "../data/experience";

interface ExperienceProps {
  t: {
    experience: {
      title: string;
    };
  };
}

const Experience: React.FC<ExperienceProps> = ({ t }) => {
  const [showSparkles, setShowSparkles] = useState(false);
  
  const handleSparklesClick = () => {
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2, margin: '-100px' }}
      className="mt-20"
    >
      <h3 className="text-2xl font-semibold text-[#1B263B] dark:text-white text-center mb-12">
        {t.experience.title}{' '}
        <motion.span
          className="inline-block cursor-pointer"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          onClick={handleSparklesClick}
        >
          <Sparkles
            className={`inline ${showSparkles ? 'text-yellow-400' : 'text-[#F76C6C]'}`}
            size={24}
          />
        </motion.span>
      </h3>
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F76C6C] dark:bg-gray-700" />

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } items-start md:items-center justify-center mb-8 gap-4`}
          >
            <div className={`w-full md:w-4/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                style={{ borderLeft: `4px solid ${item.color}` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={item.logo} 
                    alt={item.company}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <h4 className="text-xl font-semibold text-[#1B263B] dark:text-white">
                    {item.role}
                  </h4>
                </div>
                <p className="text-[#F76C6C] font-medium">{item.company}</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm mt-2 space-y-1">
                  {item.description?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  {item.year}
                </p>
              </motion.div>
            </div>
            <div className="hidden md:flex md:w-1/12 justify-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-4 h-4 bg-[#F76C6C] rounded-full relative z-10"
              />
            </div>
            <div className="hidden md:block md:w-4/12" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

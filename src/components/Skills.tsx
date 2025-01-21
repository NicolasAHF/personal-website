import React from "react";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-white dark:bg-dark/50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-3xl font-bold text-primary dark:text-white mb-8">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-card p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300"
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// src/components/Experience.tsx
import React from "react";
import { Briefcase } from "lucide-react";
import { experienceData } from "../data/experience";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white dark:bg-dark/50">
      {/* Contenedor centrado */}
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Work Experience
        </h2>

        {/* Línea vertical a la izquierda (timeline) */}
        <div className="relative border-l border-gray-300 dark:border-gray-700">
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-10 ml-8 relative">
              {/* Ícono en el punto de la línea */}
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-secondary text-white rounded-full ring-8 ring-white dark:ring-dark">
                <Briefcase size={16} />
              </span>

              {/* Encabezado: Logo + Rol + Empresa */}
              <div className="flex items-center gap-4 mb-2">
                {/* Logo de la empresa */}
                <img
                  src={exp.companyLogo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 object-cover rounded-full border border-gray-200 dark:border-gray-800"
                />
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.company} &mdash;{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>
                  </p>
                </div>
              </div>

              {/* Descripción opcional */}
              {exp.description && (
                <p className="text-gray-600 dark:text-gray-300 ml-[3.5rem] mt-2">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import { projects } from "../data/projects";

interface ProjectProps {
  t: {
    projects: {
      title: string;
    };
  };
}

const Projects: React.FC<ProjectProps> = ({t}) => {
  return (
    <section id="projects" className="py-32 bg-light dark:bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card rounded-xl overflow-hidden 
                         transform hover:scale-105 transition-all duration-500
                         bg-white dark:bg-dark/50 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b 
                                from-transparent to-black/70 
                                opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300
                                pointer-events-none"
                />
              </div>
              <div className="p-8 dark:bg-white/[.05]">
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm 
                                 bg-light dark:bg-dark/50 
                                 text-primary dark:text-white 
                                 border border-gray-200 dark:border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-text flex items-center gap-2 
                               text-secondary hover:text-opacity-80
                               transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-text flex items-center gap-2 
                               text-primary dark:text-white
                               hover:text-secondary 
                               transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

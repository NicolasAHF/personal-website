import React, { useEffect } from 'react';
import { Github as GitHub, Linkedin, Mail, ExternalLink, Download, Sun, Moon } from 'lucide-react';
import { skills } from './data/skills';
import { projects } from './data/projects';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const getSkillBadgeColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] dark:bg-gray-900 transition-colors duration-200">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-[#1B263B] dark:text-white font-bold text-xl">JD</span>
          <div className="flex items-center space-x-6">
            <div className="space-x-6">
              <a href="#home" className="text-[#1B263B] dark:text-white hover:text-[#F76C6C] dark:hover:text-[#F76C6C] transition-colors">Home</a>
              <a href="#about" className="text-[#1B263B] dark:text-white hover:text-[#F76C6C] dark:hover:text-[#F76C6C] transition-colors">About</a>
              <a href="#projects" className="text-[#1B263B] dark:text-white hover:text-[#F76C6C] dark:hover:text-[#F76C6C] transition-colors">Projects</a>
              <a href="#skills" className="text-[#1B263B] dark:text-white hover:text-[#F76C6C] dark:hover:text-[#F76C6C] transition-colors">Skills</a>
              <a href="#contact" className="text-[#1B263B] dark:text-white hover:text-[#F76C6C] dark:hover:text-[#F76C6C] transition-colors">Contact</a>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] dark:from-gray-900 dark:to-black text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold font-poppins">
              Hi, I'm John Doe
              <span className="block text-[#F76C6C] mt-2">Full Stack Software Engineer</span>
            </h1>
            <p className="text-xl text-gray-300">
              Building robust and scalable applications with modern technologies
            </p>
            <div className="space-x-4">
              <button className="bg-[#F76C6C] text-white px-6 py-3 rounded-lg hover:bg-[#f85858] transition-colors flex items-center gap-2">
                <Download size={20} /> Download CV
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1B263B] dark:hover:text-gray-900 transition-colors">
                View Projects
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1B263B] dark:text-white text-center mb-12 font-poppins">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#1B263B] dark:text-white">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 5 years of experience in full-stack development, I've worked on various projects
                ranging from e-commerce platforms to enterprise-level applications. I'm passionate about
                creating efficient, scalable, and user-friendly solutions.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-[#1B263B] dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">B.S. in Computer Science - Tech University (2018)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1B263B] dark:text-white">Current Role</h4>
                  <p className="text-gray-600 dark:text-gray-300">Senior Full Stack Engineer at TechCorp</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#1B263B] dark:text-white">Personal Interests</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>📚 Avid reader of technical books and sci-fi novels</li>
                <li>✈️ Passionate about traveling and experiencing new cultures</li>
                <li>🎮 Game development enthusiast</li>
                <li>🌱 Contributing to open-source projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#F0F4F8] dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1B263B] dark:text-white text-center mb-12 font-poppins">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B263B] dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-[#F0F4F8] dark:bg-gray-700 text-[#1B263B] dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.demo} className="flex items-center gap-2 text-[#F76C6C] hover:text-[#f85858]">
                      <ExternalLink size={18} /> Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-[#1B263B] dark:text-white hover:text-[#F76C6C] dark:hover:text-[#F76C6C]">
                      <GitHub size={18} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1B263B] dark:text-white text-center mb-12 font-poppins">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#1B263B] dark:text-white mb-6">{category}</h3>
                <div className="space-y-4">
                  {items.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-[#1B263B] dark:text-white">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-sm ${getSkillBadgeColor(skill.level)}`}>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1B263B] dark:bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins">Let's Work Together!</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="mb-8 text-gray-300">
                I'm always open to new opportunities and interesting projects.
                Feel free to reach out!
              </p>
              <div className="space-y-4">
                <a href="https://linkedin.com" className="flex items-center gap-3 text-gray-300 hover:text-[#F76C6C]">
                  <Linkedin /> LinkedIn
                </a>
                <a href="https://github.com" className="flex items-center gap-3 text-gray-300 hover:text-[#F76C6C]">
                  <GitHub /> GitHub
                </a>
                <a href="mailto:contact@example.com" className="flex items-center gap-3 text-gray-300 hover:text-[#F76C6C]">
                  <Mail /> contact@example.com
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#F76C6C]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#F76C6C]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#F76C6C]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#F76C6C] text-white px-6 py-3 rounded-lg hover:bg-[#f85858] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] dark:bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
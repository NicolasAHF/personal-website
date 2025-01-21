import React from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isVisible: boolean;
  language: "en" | "es";
  toggleLanguage: () => void;
  t: {
    navbar: {
      home: string;
      about: string;
      projects: string;
      skills: string;
      experience: string;
      contact: string;
    };
  };
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, isVisible, language, toggleLanguage, t }) => {
  return (
    <nav
      className={
        isVisible
          ? "fixed w-full z-50 transition-all duration-300 nav-blur bg-white dark:bg-dark text-gray-900 dark:text-gray-100"
          : "fixed w-full z-50 transition-all duration-300 bg-transparent text-white"
      }
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        <span className="text-3xl font-bold gradient-text">NH</span>
        <div className="flex items-center space-x-4 sm:space-x-8">
          <div className="hidden md:flex space-x-4 sm:space-x-8">
            <a href="#home" className="hover:text-secondary transition-colors">
              {t.navbar.home}
            </a>
            <a href="#about" className="hover:text-secondary transition-colors">
              {t.navbar.about}
            </a>
            <a href="#projects" className="hover:text-secondary transition-colors">
              {t.navbar.projects}
            </a>
            <a href="#skills" className="hover:text-secondary transition-colors">
              {t.navbar.skills}
            </a>
            <a href="#experience" className="hover:text-secondary transition-colors">
              {t.navbar.experience}
            </a>
            <a href="#contact" className="hover:text-secondary transition-colors">
              {t.navbar.contact}
            </a>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
          </button>
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            {language === "en" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

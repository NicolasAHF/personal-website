import React from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, isVisible }) => {
  return (
    <nav
      className={isVisible
        ? "fixed w-full z-50 transition-all duration-300 nav-blur bg-white dark:bg-dark text-gray-900 dark:text-gray-100"
        : "fixed w-full z-50 transition-all duration-300 bg-transparent text-white"}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold gradient-text">NH</span>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-secondary transition-colors">
                    Home
                </a>
                <a href="#about" className="hover:text-secondary transition-colors">
                    About
                </a>
                <a href="#projects" className="hover:text-secondary transition-colors">
                    Projects
                </a>
                <a href="#skills" className="hover:text-secondary transition-colors">
                    Skills
                </a>
                <a href="#contact" className="hover:text-secondary transition-colors">
                    Contact
                </a>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

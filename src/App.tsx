import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { translations } from "./data/translation";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-500">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} isVisible={isVisible} language={language}
        toggleLanguage={toggleLanguage}
        t={translations[language]}  />
      <Hero language={language} t={translations[language]}/>
      <About t={translations[language]}/>
      <Skills t={translations[language]}/>
      <div className="overflow-x-hidden">
        <Experience t={translations[language]} />
      </div>
      <Projects t={translations[language]}/>
      <Contact t={translations[language]}/>
    </div>
  );
};

export default App;

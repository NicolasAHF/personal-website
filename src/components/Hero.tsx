import React from "react";
import { Download, ChevronDown } from "lucide-react";

interface HeroProps {
  language: "en" | "es";
  t: {
    hero: {
      title: string;
      btnDownload: string;
      btnProjects: string;
    };
  };
}

const Hero: React.FC<HeroProps> = ({t}) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient dark:bg-black">
      <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-white/[0.05]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-32 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 space-y-8 animate-slide-up">
            <h1 className="text-6xl md:text-7xl font-bold text-white text-glow">
              <span className="gradient-text">Nicolas Hernandez</span>
              <span className="block mt-4 text-4xl md:text-5xl">{t.hero.title}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl">
              Crafting digital experiences through innovative code and creative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-secondary hover:bg-opacity-90 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2 border-glow">
                <Download size={20} />
                  {t.hero.btnDownload}
              </button>
              <button className="px-8 py-4 border-2 border-white/20 hover:border-secondary text-white rounded-full font-medium transition-all transform hover:scale-105">
                {t.hero.btnProjects}
              </button>
            </div>
          </div>
          <div className="md:w-1/4 animate-fade-in">
            <img
              src="../images/profile.jpeg"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={30} className="text-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

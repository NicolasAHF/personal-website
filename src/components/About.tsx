import React from "react";

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

const About: React.FC<AboutProps> = ({t}) => {
  return (
    <section id="about" className="py-32 bg-white dark:bg-dark/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">{t.about.title}</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-primary dark:text-white">{t.about.journey}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.about.title}
            </p>
            <div className="space-y-6">
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">{t.about.education}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t.about.educationText}</p>
              </div>
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">{t.about.role}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t.about.roleText}</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-primary dark:text-white">{t.about.interests}</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <span className="text-4xl mb-4 block">📚</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">{t.about.readingTitle}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t.about.readingText}</p>
              </div>
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <span className="text-4xl mb-4 block">✈️</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">{t.about.travelingTitle}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t.about.travelingText}</p>
              </div>
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <span className="text-4xl mb-4 block">🎮</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">{t.about.gamingTitle}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t.about.gamingText}</p>
              </div>
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <span className="text-4xl mb-4 block">🏋️‍♂️</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">{t.about.trainingTitle}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t.about.trainingText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

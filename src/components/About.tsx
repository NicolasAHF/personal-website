import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white dark:bg-dark/50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-primary dark:text-white">My Journey</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I’m Nicolás Hernández, a passionate Full Stack Software Engineer currently working at Oracle and in the final semester of my Bachelor’s Degree in Systems at ORT University. Throughout my career, I have been driven by a desire to build scalable, user-centric software solutions while continuously expanding my technical knowledge and expertise.
            </p>
            <div className="space-y-6">
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-300">
                B.S. in Systems Engineering – ORT University (Expected 2025)
                </p>
              </div>
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">Current Role</h4>
                <p className="text-gray-600 dark:text-gray-300">Full Stack Software Engineer at Oracle.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-primary dark:text-white">Personal Interests</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <span className="text-4xl mb-4 block">📚</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">Reading</h4>
                <p className="text-gray-600 dark:text-gray-300">I’m a fan of technical books and nonfiction, always eager to dive into topics that spark curiosity and expand my understanding of the world.</p>
              </div>
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <span className="text-4xl mb-4 block">✈️</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">Traveling</h4>
                <p className="text-gray-600 dark:text-gray-300">I love exploring new places, experiencing different cultures, and creating unforgettable memories along the way.</p>
              </div>
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <span className="text-4xl mb-4 block">🎮</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">Gaming</h4>
                <p className="text-gray-600 dark:text-gray-300">Video games are my way to unwind and have fun—whether it’s strategizing in complex games or just enjoying an immersive story.</p>
              </div>
              <div className="card-hover p-6 rounded-xl bg-light dark:bg-dark/50 border border-gray-200 dark:border-gray-800">
                <span className="text-4xl mb-4 block">🏋️‍♂️</span>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">Training</h4>
                <p className="text-gray-600 dark:text-gray-300">Fitness is my way of staying focused, disciplined, and energized, helping me perform at my best both personally and professionally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// src/components/Contact.tsx
import React from "react";
import { Linkedin, Github as GitHub, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 hero-gradient dark:bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">Get in Touch</h3>
            <p className="text-xl text-gray-300">
              Ready to start your next project? Let's discuss how we can work together...
            </p>
            <div className="space-y-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-secondary transition-colors group"
              >
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Linkedin size={24} />
                </div>
                <span className="text-lg">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-secondary transition-colors group"
              >
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <GitHub size={24} />
                </div>
                <span className="text-lg">GitHub</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-4 text-gray-300 hover:text-secondary transition-colors group"
              >
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-lg">contact@example.com</span>
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:outline-none text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:outline-none text-white"
                placeholder="youremail@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:outline-none text-white"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-secondary hover:bg-opacity-90 text-white rounded-xl font-medium transition-all transform hover:scale-105 border-glow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

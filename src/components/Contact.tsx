import React, { useState } from "react";
import { Linkedin, Github as GitHub, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

interface ContactProps {
  t: {
    contact: {
      title: string;
      subtitle: string;
      text: string;
      nameLabel: string;
      namePlaceHolder: string;
      messageLabel: string;
      messagePlaceholder: string;
      emailLabel: string;
      emailPlaceholcer: string;
      sendMessage: string;
      sentMessage: string;
      sending: string;
    };
  };
}

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// Animaciones para el botón con Framer Motion:
const sendingVariants = {
  idle: { scale: 1 },
  sending: {
    scale: [1, 1.07, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const { width, height } = useWindowSize();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const dataObj: Record<string, string> = {};

    formData.forEach((value, key) => {
      dataObj[key] = value.toString();
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(dataObj),
      });

      setIsSubmitted(true);
      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 hero-gradient dark:bg-black">
      <div className="container mx-auto px-6 relative">
      {showConfetti && (
          <Confetti
            width={width}
            height={height}
            recycle={false} 
            numberOfPieces={250}
            gravity={0.3}
            style={{ 
              position: "fixed", 
              top: 0, 
              left: 0, 
              zIndex: 9999,
              pointerEvents: "none" 
            }}
          />
        )}

        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          {t.contact.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              {t.contact.subtitle}
            </h3>
            <p className="text-xl text-gray-300">{t.contact.text}</p>

            <div className="space-y-6">
              <a
                href="https://www.linkedin.com/in/nicolas-hernandez-b9391818a/"
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
                href="https://github.com/NicolasAHF"
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
                href="mailto:nicolashernandezf22@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-secondary transition-colors group"
              >
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-lg">nicolashernandezf22@gmail.com</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>

            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-white mb-2"
              >
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border 
                           border-white/10 focus:border-secondary 
                           focus:outline-none text-white"
                placeholder={t.contact.namePlaceHolder}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white mb-2"
              >
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border 
                           border-white/10 focus:border-secondary 
                           focus:outline-none text-white"
                placeholder={t.contact.emailPlaceholcer}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-white mb-2"
              >
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border 
                           border-white/10 focus:border-secondary 
                           focus:outline-none text-white"
                placeholder={t.contact.messagePlaceholder}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitted || isSending}
              variants={sendingVariants}
              animate={
                isSending 
                  ? "sending"
                  : "idle"
              }
              className={`w-full px-8 py-4 rounded-xl font-medium 
                          transition-all transform border-glow text-white 
                          ${
                            isSubmitted
                              ? "bg-green-500 cursor-default"
                              : "bg-secondary hover:bg-opacity-90"
                          }`}
            >
              {isSubmitted
                ?
                  `${t.contact.sentMessage} 🎉`
                : isSending
                ? t.contact.sending
                : t.contact.sendMessage}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

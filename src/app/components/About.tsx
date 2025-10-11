'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Language, translations } from '@/lib/translations';

interface AboutProps {
  language: Language;
  darkMode: boolean;
}

export default function About({ language, darkMode }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const t = translations[language];

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
            darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
          }`}
        >
          {t.about.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden ${
            darkMode ? 'bg-gray-800/50' : 'bg-white/60'
          } shadow-xl hover:shadow-2xl transition-all`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl" />
          <p className={`text-lg md:text-lg leading-relaxed relative z-10 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t.about.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

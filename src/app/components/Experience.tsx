'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Language, translations } from '@/lib/translations';

interface ExperienceProps {
  language: Language;
  darkMode: boolean;
}

export default function Experience({ language, darkMode }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = translations[language];

  const experiences = [
    {
      id: 'codveda',
      company: t.experience.positions.codveda.company,
      role: t.experience.positions.codveda.role,
      period: t.experience.positions.codveda.period,
      description: t.experience.positions.codveda.description,
      color: 'from-blue-200 to-cyan-200',
    },
    {
      id: 'mfatech',
      company: t.experience.positions.mfatech.company,
      role: t.experience.positions.mfatech.role,
      period: t.experience.positions.mfatech.period,
      description: t.experience.positions.mfatech.description,
      color: 'from-purple-200 to-pink-200',
    },
    {
      id: 'vbt',
      company: t.experience.positions.vbt.company,
      role: t.experience.positions.vbt.role,
      period: t.experience.positions.vbt.period,
      description: t.experience.positions.vbt.description,
      color: 'from-green-200 to-teal-200',
    },
    {
      id: 'bt',
      company: t.experience.positions.bt.company,
      role: t.experience.positions.bt.role,
      period: t.experience.positions.bt.period,
      description: t.experience.positions.bt.description,
      color: 'from-orange-200 to-yellow-200',
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          key={`experience-title-${language}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
            }`}
        >
          {t.experience.title}
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.id}-${language}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-6 md:p-8 rounded-3xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50' : 'bg-white/60'
                } shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl`} />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                      {exp.role}
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2 md:mt-0`}>
                    {exp.period}
                  </span>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
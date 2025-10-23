'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Language, translations } from '@/lib/translations';

interface ExperienceProps {
  language: Language;
  darkMode: boolean;
}

// YENİ: Ana container için varyantlar
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Kartlar arasında 0.15 saniye gecikme
    },
  },
};

// YENİ: Her bir deneyim kartı için varyantlar (Yaylanarak yana kayma)
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
};

export default function Experience({ language, darkMode }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = translations[language];

  // ... (experiences array'i aynı kalır)
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
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Başlık animasyonu göründüğünde başlar
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
            }`}
        >
          {t.experience.title}
        </motion.h2>

        {/* KART CONTAINER - SIRALI GİRİŞ */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Görünür olduğunda başlat
          variants={containerVariants}
        >
          {experiences.map((exp) => (
            <motion.div
              key={`${exp.id}-${language}`}
              variants={itemVariants} // Yeni yana kayma varyantı
              whileHover={{ scale: 1.03, boxShadow: darkMode ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "0 10px 30px rgba(0, 0, 0, 0.1)" }} // Hafif büyüme ve gölge hover
              className={`p-6 md:p-8 rounded-3xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50' : 'bg-white/60'
                } shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group cursor-pointer`}
            >
              {/* Mevcut hover gradyanınızı daha belirgin hale getirdim */}
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-30 transition-opacity rounded-3xl`} />

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
                <ul className={`list-disc ml-6 mt-3 space-y-2 text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.description.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
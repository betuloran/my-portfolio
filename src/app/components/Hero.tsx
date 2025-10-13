'use client';

import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { Download, Briefcase, Mail } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { useRef } from 'react';

interface HeroProps {
  language: Language;
  darkMode: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    }
  },
};

export default function Hero({ language, darkMode }: HeroProps) {
  const t = translations[language];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Paralaks için dikey kaydırma dönüşümleri
  const blob1Y = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const bgColorStart = darkMode ? "#0f0022" : "#fff8ff"; // Başlangıç rengi
  const bgColorEnd = darkMode ? "#2a0a50" : "#ffeffa"; // Bitiş rengi

  // Kaydırma ilerlemesine göre arka plan rengi geçişi
  const backgroundColor = useTransform(scrollYProgress, [0, 1], [bgColorStart, bgColorEnd]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Ana section'a dinamik arka plan rengi atıyoruz
    <motion.section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20"
      style={{ backgroundColor }} //Dinamik arka plan rengi
    >

      <div className="absolute inset-0 overflow-hidden">

        {/* BLOB 1 (Purple/Blue Tone) - Paralaks */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-full blur-3xl opacity-50" // Daha şık gradyan ve düşük opaklık
          style={{ translateY: blob1Y }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* BLOB 2 (Pink/Red Tone) */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tl from-pink-500/30 to-red-500/30 rounded-full blur-3xl opacity-50" // Daha şık gradyan ve düşük opaklık
          style={{ translateY: blob2Y }}
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

      </div>

      {/* TÜM İÇERİĞİ KAPSAYAN ANA CONTAINER */}
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {/* ... (İçerik) */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
            }`}
        >
          {t.hero.subtitle}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {t.hero.title}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className={`p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden mb-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white/60'
            } shadow-xl`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl" />
          <p
            className={`text-base md:text-lg leading-relaxed relative z-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
          >
            {t.about.text}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(192, 38, 211, 0.6)" }}
            href="/cv/BetulOran-CV.pdf"
            download="BetulOran-CV.pdf"
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-2xl transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            {t.about.downloadCV}
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.6)" }}
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-2xl transition-all flex items-center gap-2"
          >
            <Briefcase className="w-5 h-5" />
            {t.about.viewProjects}
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.6)" }}
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:shadow-2xl transition-all flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            {t.about.contactButton}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
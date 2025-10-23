'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Clock } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { projects } from '@/lib/project-data';

interface ProjectsProps {
  language: Language;
  darkMode: boolean;
}

//Ana container (grid) için varyantlar (Kartların sıralı görünmesi için)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Her bir proje kartı için varyantlar (Hafif 3D giriş)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

// Tech badge'ler için varyantlar (Hızlı sıçrama)
const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 }
  },
};

export default function Projects({ language, darkMode }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = translations[language];

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          key={`projects-title-${language}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'}`}
        >
          {t.projects.title}
        </motion.h2>

        {/* KART GRİDİ - ANA CONTAINER */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {projects.map((project) => (
            // HER BİR PROJE KARTI
            <motion.div
              key={`project-card-${language}-${project.titleEn}`}
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotateZ: 0.5 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}

              className={`p-6 rounded-3xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50' : 'bg-white/60'} shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col`}
            >

              {/* SINIR AYDINLATMASI (BORDER SHINE) EFEKTİ */}
              <div
                className="absolute inset-0 z-0 rounded-3xl"
                style={{
                  pointerEvents: 'none',
                  boxShadow: darkMode
                    ? '0 0 20px 5px rgba(168, 85, 247, 0.2), 0 0 30px 10px rgba(236, 72, 153, 0.2)'
                    : '0 0 20px 5px rgba(139, 92, 246, 0.2), 0 0 30px 10px rgba(236, 72, 153, 0.2)',
                }}
              />

              {/* HAREKETLİ IŞIK EFEKTİ İÇİN DİV */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-3xl pointer-events-none"
              >
                <motion.div
                  className="absolute w-full h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{
                    type: 'tween',
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  style={{
                    width: '300%',
                    height: '300%',
                    top: '-100%',
                    left: '-100%',
                    filter: 'blur(30px)', // Parlama efekti
                  }}
                />
              </motion.div>

              {/* İÇERİK - z-10 ile önde kalmalı */}
              <div className="relative z-10 flex flex-col flex-grow">
                {/* Başlık ve Badge */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    {language === 'tr' ? project.titleTr : project.titleEn}
                  </h3>
                  {project.inProgress && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-semibold rounded-full shadow-lg whitespace-nowrap flex-shrink-0"
                    >
                      <Clock className="w-3 h-3" />
                      {language === 'tr' ? 'Devam Ediyor' : 'In Progress'}
                    </motion.span>
                  )}
                </div>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed flex-grow`}>
                  {language === 'tr' ? project.descriptionTr : project.descriptionEn}
                </p>

                {/* TECH BADGES */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.05 }}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={badgeVariants}
                      className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700'}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Butonlar */}
                {(project.github || project.live) && (
                  <div className="flex gap-3 flex-wrap mt-auto">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all"
                      >
                        <Github className="w-4 h-4" />
                        {t.projects.viewGithub}
                      </motion.a>
                    )}

                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.projects.viewLive}
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
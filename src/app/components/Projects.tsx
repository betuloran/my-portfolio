'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Language, translations } from '@/lib/translations';
import { projects } from '@/lib/project-data';

interface ProjectsProps {
  language: Language;
  darkMode: boolean;
}

export default function Projects({ language, darkMode }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = translations[language];

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
            darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
          }`}
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-6 rounded-3xl backdrop-blur-sm ${
                darkMode ? 'bg-gray-800/50' : 'bg-white/60'
              } shadow-lg hover:shadow-2xl transition-all hover:scale-105 group`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                {project.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
                {language === 'tr' ? project.descriptionTr : project.descriptionEn}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs ${
                      darkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all group-hover:scale-105"
              >
                <Github className="w-4 h-4" />
                {t.projects.viewGithub}
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
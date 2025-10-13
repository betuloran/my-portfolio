'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Database, GitBranch, Bot } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface SkillsProps {
  language: Language;
  darkMode: boolean;
}

export default function Skills({ language, darkMode }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = translations[language];

  const skillCategories = [
    {
      category: t.skills.categories.frontend,
      icon: Code2,
      color: 'text-purple-500',
      skills: ['React', 'TypeScript', 'React Hook Form', 'Framer Motion', 'React Router', 'Next.js', 'Redux', 'Zustand'],
    },
    {
      category: t.skills.categories.styling,
      icon: Palette,
      color: 'text-pink-500',
      skills: ['Sass/SCSS', 'CSS Grid/Flexbox', 'Bootstrap', 'Tailwind CSS', 'Shadcn/ui', 'Material UI'],
    },
    {
      category: t.skills.categories.backend,
      icon: Database,
      color: 'text-blue-500',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT'],
    },
    {
      category: t.skills.categories.tools,
      icon: GitBranch,
      color: 'text-green-500',
      skills: ['Git & GitHub', 'VS Code', 'Figma', 'Jira', 'ESLint', 'Postman', 'Vercel/Netlify', 'Notion', 'Slack'],
    },
    {
      category: t.skills.categories.aiml,
      icon: Bot,
      color: 'text-cyan-500',
      skills: ['LangChain', 'OpenAI API', 'RAG Systems', 'Vector DB', 'Prompt Engineering', 'LangSmith'],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          key={`skills-title-${language}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
            }`}
        >
          {t.skills.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={`${category.category}-${language}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50' : 'bg-white/60'
                  } shadow-lg hover:shadow-xl transition-all hover:scale-105`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className={`font-semibold text-lg ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
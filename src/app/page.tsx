'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from '@/lib/translations';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`min-h-screen transition-colors duration-500 ${darkMode
        ? 'bg-gray-900 text-gray-100'
        : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'
      }`}>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Hero language={language} darkMode={darkMode} />
      <Skills language={language} darkMode={darkMode} />
      <Experience language={language} darkMode={darkMode} />
      <Projects language={language} darkMode={darkMode} />
      <Contact language={language} darkMode={darkMode} />
      <Footer language={language} darkMode={darkMode} />
    </main>
  );
}

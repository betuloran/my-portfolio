'use client';

import { Language, translations } from '@/lib/translations';

interface FooterProps {
  language: Language;
  darkMode: boolean;
}

export default function Footer({ language, darkMode }: FooterProps) {
  const t = translations[language];

  return (
    <footer className={`py-8 px-6 text-center ${
      darkMode ? 'bg-gray-900/50' : 'bg-white/30'
    } backdrop-blur-sm`}>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
        {t.footer.text}
      </p>
    </footer>
  );
}
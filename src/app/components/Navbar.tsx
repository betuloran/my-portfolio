'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

// Navigasyon linkleri ve hedef kimlikleri
const SECTION_IDS = ['hero', 'skills', 'experience', 'projects', 'contact'];

export default function Navbar({ language, setLanguage, darkMode, setDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Aktif olan bölümü tutmak için state
  const [activeSection, setActiveSection] = useState('hero');

  const t = translations[language];

  // Kaydırma Takibi (Scrolled)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aktif Bölüm Takibi (Scroll Spy / Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Görünür olduğunda, aktif bölümü ayarla
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // Viewport'u kullan
        rootMargin: '0px 0px -50% 0px', // Görünürlüğün %50'si geçtiğinde tetikle
        threshold: 0,
      }
    );

    // Her bölümü gözlemciye ekle
    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Temizleme fonksiyonu
    return () => {
      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navLinks = [
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#experience', label: t.nav.experience, id: 'experience' },
    { href: '#projects', label: t.nav.projects, id: 'projects' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false); // Mobil menüyü kapat
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? `${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg`
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              // Aktif link kontrolü
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)} // smooth scroll
                  className={`relative transition-colors font-medium group text-md
                    ${
                    // Aktif Değilken Renkler
                    darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
                    }
                    ${
                    // Aktifken Vurgu Renkleri
                    isActive ? (darkMode ? 'text-purple-400' : 'text-purple-600') : ''
                    }
                  `}
                >
                  {link.label}

                  {isActive && (
                    <motion.div
                      layoutId="active-nav-indicator" // Framer Motion ile kayan alt çizgi
                      className="absolute bottom-[-6px] left-0 right-0 h-[3px] rounded-full"
                      style={{
                        background: darkMode
                          ? 'linear-gradient(to right, #a78bfa, #f472b6)'
                          : 'linear-gradient(to right, #8b5cf6, #ec4899)'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all ${darkMode
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-3 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'
            } rounded-lg p-4 backdrop-blur-sm`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)} // smooth scroll ve kapatma
                className={`block py-2 transition-colors ${activeSection === link.id ? (darkMode ? 'text-purple-400 font-bold' : 'text-purple-600 font-bold') : (darkMode ? 'text-gray-300' : 'text-gray-700')
                  } hover:text-purple-400`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
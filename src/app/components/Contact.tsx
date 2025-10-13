'use client';

import { motion, Variants } from 'framer-motion'; 
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Phone, Github } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface ContactProps {
  language: Language;
  darkMode: boolean;
}

// Ana container (grid) için varyantlar (Kartların sıralı görünmesi için)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Kartlar arasında 0.1 saniye gecikme
    },
  },
};

// Her bir iletişim kartı için varyantlar (Yumuşak giriş)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 120,
    },
  },
};

export default function Contact({ language, darkMode }: ContactProps) {
  const ref = useRef(null);
  // Animasyonların sadece görünür olduğunda çalışması için useInView kullanılır
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 
  const t = translations[language];

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'betul.oran2@gmail.com',
      href: 'mailto:betul.oran2@gmail.com',
      color: 'text-purple-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/betuloran',
      href: 'https://github.com/betuloran',
      color: 'text-gray-700 dark:text-gray-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/betüloran',
      href: 'https://linkedin.com/in/betüloran',
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '506 147 2606',
      href: 'tel:5061472606',
      color: 'text-green-500',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          key={`title-${language}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Başlık animasyonu göründüğünde başlar
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
            }`}
        >
          {t.contact.title}
        </motion.h2>

        <motion.p
          key={`subtitle-${language}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Alt başlık animasyonu göründüğünde başlar
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {t.contact.subtitle}
        </motion.p>

        {/* KART GRİDİ - SIRALI GİRİŞ */}
        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Görünür olduğunda başlat
            variants={containerVariants}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={`${method.href}-${language}`}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants} // Yaylanma varyantı
                whileHover={{ scale: 1.05, rotateZ: -1 }} //dönüş hızı
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className={`p-6 rounded-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50' : 'bg-white/60'
                  } shadow-lg hover:shadow-2xl transition-all group`}
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 ${method.color} group-hover:scale-110 transition-transform`} />
                <p className={`font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {method.label}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} break-all`}>
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
export type Language = 'en' | 'tr';

export interface Translations {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  about: {
    title: string;
    text: string;
  };
  skills: {
    title: string;
    categories: {
      frontend: string;
      styling: string;
      backend: string;
      tools: string;
    };
  };
  experience: {
    title: string;
    positions: {
      mfatech: {
        role: string;
        description: string;
      };
      codveda: {
        role: string;
        description: string;
      };
      vbt: {
        role: string;
        description: string;
      };
    };
  };
  projects: {
    title: string;
    viewGithub: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
  };
  footer: {
    text: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Frontend Developer | Computer Engineer',
      subtitle: 'Betül Oran',
      tagline: 'Crafting interactive, scalable, and user-focused web experiences.',
    },
    about: {
      title: 'About Me',
      text: "I'm a computer engineering graduate and passionate frontend developer specializing in React and TypeScript. I love building clean, user-centric interfaces and reusable component systems. With hands-on experience in both frontend and full-stack development, I focus on creating scalable solutions that prioritize user experience. I thrive in Agile environments, enjoy collaborating with teams, and I'm always eager to learn new technologies and improve my craft through thoughtful UI/UX design.",
    },
    skills: {
      title: 'Skills & Technologies',
      categories: {
        frontend: 'Frontend',
        styling: 'Styling',
        backend: 'Backend',
        tools: 'Tools',
      },
    },
    experience: {
      title: 'Experience',
      positions: {
        mfatech: {
          role: 'Frontend Developer',
          description: 'Contributed to building a modern corporate workspace application. Developed reusable React components with TypeScript, integrated REST APIs, and participated in Agile development using Scrum methodology.',
        },
        codveda: {
          role: 'Full Stack Developer Intern',
          description: 'Built a comprehensive User Management System using React, TypeScript, and Node.js. Implemented JWT-based authentication with role-based access control and developed RESTful APIs with Express.js and MongoDB.',
        },
        vbt: {
          role: 'Software Engineer Intern',
          description: 'Participated in frontend development and mobile application design projects. Developed user experience-focused solutions and created cross-device compatible solutions using responsive design principles.',
        },
      },
    },
    projects: {
      title: 'Featured Projects',
      viewGithub: 'View on GitHub',
    },
    contact: {
      title: "Let's Connect!",
      subtitle: "I'm always excited to collaborate on interesting projects or discuss new opportunities.",
      email: 'Email',
      phone: 'Phone',
    },
    footer: {
      text: '© 2025 Betül Oran. Built with Next.js & Tailwind CSS.',
    },
  },
  tr: {
    nav: {
      about: 'Hakkımda',
      skills: 'Yetenekler',
      experience: 'Deneyim',
      projects: 'Projeler',
      contact: 'İletişim',
    },
    hero: {
      title: 'Frontend Developer | Bilgisayar Mühendisi',
      subtitle: 'Betül Oran',
      tagline: 'Etkileşimli, ölçeklenebilir ve kullanıcı odaklı web deneyimleri oluşturuyorum.',
    },
    about: {
      title: 'Hakkımda',
      text: 'Bilgisayar mühendisliği mezunu ve React ile TypeScript konusunda uzmanlaşmış tutkulu bir frontend developer\'ım. Temiz, kullanıcı odaklı arayüzler ve yeniden kullanılabilir komponent sistemleri oluşturmayı seviyorum. Hem frontend hem de full-stack geliştirme deneyimimle, kullanıcı deneyimini ön planda tutan ölçeklenebilir çözümler üretmeye odaklanıyorum. Agile ortamlarda başarılı oluyor, takım çalışmasından keyif alıyor ve düşünceli UI/UX tasarımı yoluyla becerilerimi sürekli geliştiriyorum.',
    },
    skills: {
      title: 'Yetenekler & Teknolojiler',
      categories: {
        frontend: 'Frontend',
        styling: 'Styling',
        backend: 'Backend',
        tools: 'Araçlar',
      },
    },
    experience: {
      title: 'Deneyim',
      positions: {
        mfatech: {
          role: 'Frontend Developer',
          description: 'Modern bir kurumsal çalışma alanı uygulaması geliştirmeye katkıda bulundum. TypeScript ile yeniden kullanılabilir React komponentleri geliştirdim, REST API entegrasyonları yaptım ve Scrum metodolojisi kullanarak Agile geliştirmeye katıldım.',
        },
        codveda: {
          role: 'Full Stack Developer Stajyer',
          description: 'React, TypeScript ve Node.js kullanarak kapsamlı bir Kullanıcı Yönetim Sistemi oluşturdum. Rol tabanlı erişim kontrolü ile JWT tabanlı kimlik doğrulama sistemi uyguladım ve Express.js ve MongoDB ile RESTful API\'ler geliştirdim.',
        },
        vbt: {
          role: 'Yazılım Mühendisi Stajyer',
          description: 'Frontend geliştirme ve mobil uygulama tasarım projelerine katıldım. Kullanıcı deneyimi odaklı çözümler geliştirdim ve responsive tasarım prensipleri kullanarak çapraz cihaz uyumlu çözümler oluşturdum.',
        },
      },
    },
    projects: {
      title: 'Öne Çıkan Projeler',
      viewGithub: "GitHub'da Görüntüle",
    },
    contact: {
      title: 'İletişime Geçelim!',
      subtitle: 'İlginç projeler üzerinde işbirliği yapmak veya yeni fırsatları tartışmak için her zaman heyecanlıyım.',
      email: 'E-posta',
      phone: 'Telefon',
    },
    footer: {
      text: '© 2025 Betül Oran. Next.js & Tailwind CSS ile oluşturuldu.',
    },
  },
};
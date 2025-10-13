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
  };
  about: {
    title: string;
    text: string;
    downloadCV: string;
    viewProjects: string;
    contactButton: string;
  };
  skills: {
    title: string;
    categories: {
      frontend: string;
      styling: string;
      backend: string;
      tools: string;
      aiml: string;
    };
  };
  experience: {
    title: string;
    positions: {
      mfatech: {
        company?: string;
        role: string;
        description: string;
        period?: string;
      };
      codveda: {
        company?: string;
        role: string;
        description: string;
        period?: string;
      };
      vbt: {
        company?: string;
        role: string;
        description: string;
        period?: string;
      };
      bt: {
        company?: string;
        role: string;
        description: string;
        period?: string;
      };
    };
  };
  projects: {
    title: string;
    viewGithub: string;
    viewLive: string;
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
    },
    about: {
      title: 'About Me',
      text: "Computer Engineering graduate and frontend developer who loves blending creativity with technology. I specialize in building intuitive, scalable interfaces with React and TypeScript. Alongside frontend development, I'm deeply interested in generative AI and how it can transform the way we design, build, and personalize digital experiences. My goal is to create interfaces that are not only functional but also intelligently adaptive and engaging.",
      downloadCV: 'Download CV',
      viewProjects: 'View Projects',
      contactButton: 'Contact',
    },
    skills: {
      title: 'Skills & Technologies',
      categories: {
        frontend: 'Frontend',
        styling: 'Styling',
        backend: 'Backend',
        tools: 'Tools',
        aiml: 'AI/ML',
      },
    },
    experience: {
      title: 'Experience',
      positions: {
        codveda: {
          company: 'Codveda Technologies',
          role: 'Full Stack Developer Intern',
          description: 'Built a comprehensive User Management System using React, TypeScript, and Node.js. Implemented JWT-based authentication with role-based access control and developed RESTful APIs with Express.js and MongoDB.',
          period: 'Jun 2025 – Nov 2025',
        },
        mfatech: {
          company: 'mfatech',
          role: 'Frontend Developer',
          description: 'Contributed to building a modern corporate workspace application. Developed reusable React components with TypeScript, integrated REST APIs, and participated in Agile development using Scrum methodology.',
          period: 'Nov 2024 – Jun 2025',
        },
        vbt: {
          company: 'VBT Software Inc.',
          role: 'Software Engineer Intern',
          description: 'Participated in frontend development and mobile application design projects. Developed user experience-focused solutions and created cross-device compatible solutions using responsive design principles.',
          period: 'Jun 2024 – Aug 2024',
        },
        bt: {
          company: 'Simav Municipality IT Department',
          role: 'Hardware Engineer Intern',
          description: 'Worked on various IT projects, gaining hands-on experience in system maintenance, network management, and user support. Assisted in optimizing internal processes and improving overall IT infrastructure.',
          period: 'Jul 2023 – Aug 2023',
        },
      },
    },
    projects: {
      title: 'Featured Projects',
      viewGithub: 'View on GitHub',
       viewLive: 'View Live',
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
      title: 'Frontend Geliştirici | Bilgisayar Mühendisi',
      subtitle: 'Betül Oran',
    },
    about: {
      title: 'Hakkımda',
      text: "Yaratıcılığı teknolojiyle harmanlamayı seven bilgisayar mühendisliği mezunu ve ön uç geliştirici. React ve TypeScript ile sezgisel, ölçeklenebilir arayüzler oluşturma konusunda uzmanım. Ön uç geliştirmenin yanı sıra, üretken yapay zeka ve bunun dijital deneyimleri tasarlama, oluşturma ve kişiselleştirme yöntemlerimizi nasıl dönüştürebileceği konusunda da derin bir ilgi duyuyorum. Amacım, sadece işlevsel değil, aynı zamanda akıllı bir şekilde uyarlanabilir ve ilgi çekici arayüzler oluşturmak.",
      downloadCV: 'CV İndir',
      viewProjects: 'Projelerim',
      contactButton: 'İletişim',
    },
    skills: {
      title: 'Yetenekler & Teknolojiler',
      categories: {
        frontend: 'Ön Uç',
        styling: 'Stil',
        backend: 'Arka Uç',
        tools: 'Araçlar',
        aiml: 'Yapay Zeka/ML',
      },
    },
    experience: {
      title: 'Deneyim',
      positions: {
        codveda: {
          company: 'Codveda Technologies',
          role: 'Full Stack Geliştirici Stajyeri',
          description: 'React, TypeScript ve Node.js kullanarak kapsamlı bir Kullanıcı Yönetim Sistemi oluşturdum. Rol tabanlı erişim kontrolü ile JWT tabanlı kimlik doğrulama sistemi uyguladım ve Express.js ve MongoDB ile RESTful API\'ler geliştirdim.',
          period: 'Haz 2025 – Kas 2025',
        },
        mfatech: {
          company: 'mfatech',
          role: 'Frontend Geliştirici',
          description: 'Modern bir kurumsal çalışma alanı uygulaması geliştirmeye katkıda bulundum. TypeScript ile yeniden kullanılabilir React komponentleri geliştirdim, REST API entegrasyonları yaptım ve Scrum metodolojisi kullanarak Agile geliştirmeye katıldım.',
          period: 'Kas 2024 – Haz 2025',
        },
        vbt: {
          company: 'VBT Yazılım A.Ş',
          role: 'Yazılım Mühendisi Stajyeri',
          description: 'Frontend geliştirme ve mobil uygulama tasarım projelerine katıldım. Kullanıcı deneyimi odaklı çözümler geliştirdim ve responsive tasarım prensipleri kullanarak çapraz cihaz uyumlu çözümler oluşturdum.',
          period: 'Haz 2024 – Ağu 2024',
        },
        bt: {
          company: 'Simav Belediyesi Bilgi İşlem Daire Başkanlığı',
          role: 'Donanım Mühendisi Stajyeri',
          description: 'Sistem bakımı, ağ yönetimi ve kullanıcı desteği konularında uygulamalı deneyim kazanarak çeşitli BT projelerinde çalıştım. İç süreçlerin optimize edilmesine ve genel BT altyapısının iyileştirilmesine yardımcı oldum.',
          period: 'Tem 2023 – Ağu 2023',
        },
      },
    },
    projects: {
      title: 'Öne Çıkan Projeler',
      viewGithub: "GitHub'da Görüntüle",
       viewLive: 'Canlı Görüntüle',
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
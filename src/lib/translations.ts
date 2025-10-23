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
        description: string[];
        period?: string;
      };
      codveda: {
        company?: string;
        role: string;
        description: string[];
        period?: string;
      };
      vbt: {
        company?: string;
        role: string;
        description: string[];
        period?: string;
      };
      bt: {
        company?: string;
        role: string;
        description: string[];
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
      text: "I am a computer engineer and front-end developer who loves blending creativity with technology. I am experienced in creating intuitive, scalable interfaces using React and TypeScript. In addition to front-end development, I have a deep interest in generative AI and how it can transform the way we design, create, and personalize digital experiences. My goal is to create interfaces that are not only functional but also intelligently adaptable and engaging.",
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
        mfatech: {
          company: 'mfatech',
          role: 'Frontend Developer',
          description: [
            'Developed modern and responsive interfaces for the Pviser corporate workspace using React and TypeScript.',
            'Built reusable components and integrated RESTful APIs for efficient data flow and performance.',
            'Improved UI/UX design and usability based on user feedback in an Agile Scrum environment.',
          ],
          period: 'Nov 2024 – Jun 2025',
        },
        codveda: {
          company: 'Codveda Technologies',
          role: 'Full Stack Developer Intern',
          description: [
            'Developed a User Management System using React, TypeScript, Node.js, and MongoDB.',
            'Implemented JWT-based authentication and role-based access control.',
            'Built RESTful APIs with Express.js for CRUD operations and optimized backend performance.',
          ],
          period: 'Aug 2025 – Sep 2025',
        },
        vbt: {
          company: 'VBT Software Inc.',
          role: 'Software Development Engineer Intern',
          description: [
            'Completed a 2-month technical training program on HTML, CSS, SCSS, JavaScript, and Angular.',
            'Gained insights into software development workflows and corporate IT practices.',
            'Developed a Flutter project and improved practical skills in SQL and frontend technologies.',
          ],
          period: 'Jun 2024 – Aug 2024',
        },
        bt: {
          company: 'Simav Municipality IT Department',
          role: 'Hardware Development Engineer Intern',
          description: [
            'Provided technical support in network configuration, firewalls, and server systems setup.',
            'Applied OSI and TCP/IP concepts to real-world IT operations.',
            'Strengthened understanding of hardware systems and network security through hands-on practice.',
          ],
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
      subtitle:
        "I'm always excited to collaborate on interesting projects or discuss new opportunities.",
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
      text: 'Yaratıcılığı teknolojiyle harmanlamayı seven bir bilgisayar mühendisi ve ön uç geliştiriciyim. React ve TypeScript ile sezgisel, ölçeklenebilir arayüzler oluşturma konusunda deneyimliyim. Ön uç geliştirmenin yanı sıra, üretken yapay zeka ve bunun dijital deneyimleri tasarlama, oluşturma ve kişiselleştirme yöntemlerimizi nasıl dönüştürebileceği konusunda da derin bir ilgi duyuyorum. Amacım, yalnızca işlevsel değil, aynı zamanda akıllı bir şekilde uyarlanabilir ve ilgi çekici arayüzler oluşturmaktır.',
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
        mfatech: {
          company: 'mfatech',
          role: 'Frontend Geliştirici',
          description: [
            'React ve TypeScript kullanarak Pviser kurumsal çalışma alanı için modern ve duyarlı arayüzler geliştirdim.',
            'Yeniden kullanılabilir bileşenler oluşturarak RESTful API’leri entegre ettim.',
            'Kullanıcı geri bildirimlerine göre UI/UX iyileştirmeleri yaptım ve çevik Scrum ortamında çalıştım.',
          ],
          period: 'Kas 2024 – Haz 2025',
        },
        codveda: {
          company: 'Codveda Technologies',
          role: 'Full Stack Geliştirici Stajyeri',
          description: [
            'React, TypeScript, Node.js ve MongoDB kullanarak bir Kullanıcı Yönetim Sistemi geliştirdim.',
            'JWT tabanlı kimlik doğrulama ve rol tabanlı erişim kontrolü uyguladım.',
            'Express.js ile RESTful API’ler oluşturarak performansı optimize ettim.',
          ],
          period: 'Ağu 2025 – Eyl 2025',
        },
        vbt: {
          company: 'VBT Yazılım A.Ş.',
          role: 'Yazılım Mühendisi Stajyeri',
          description: [
            'HTML, CSS, SCSS, JavaScript ve Angular konularında 2 aylık teknik eğitim programını tamamladım.',
            'Yazılım geliştirme süreçleri ve kurumsal IT pratikleri hakkında bilgiler edindim.',
            'Flutter projesi geliştirerek SQL ve frontend teknolojilerinde uygulamalı deneyim kazandım.',
          ],
          period: 'Haz 2024 – Ağu 2024',
        },
        bt: {
          company: 'Simav Belediyesi Bilgi İşlem Departmanı',
          role: 'Donanım Mühendisi Stajyeri',
          description: [
            'Ağ yapılandırması, güvenlik duvarı kurulumu ve sunucu sistemlerinde teknik destek sağladım.',
            'OSI ve TCP/IP kavramlarını gerçek BT operasyonlarında uyguladım.',
            'Donanım sistemleri ve ağ güvenliği konularında uygulamalı deneyim kazandım.',
          ],
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
      subtitle:
        'İlginç projeler üzerinde işbirliği yapmak veya yeni fırsatları tartışmak için her zaman heyecanlıyım.',
      email: 'E-posta',
      phone: 'Telefon',
    },
    footer: {
      text: '© 2025 Betül Oran. Next.js & Tailwind CSS ile oluşturuldu.',
    },
  },
};
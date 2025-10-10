export interface Project {
  title: string;
  descriptionEn: string;
  descriptionTr: string;
  technologies: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: 'Feasta',
    descriptionEn: 'A responsive food ordering platform with user authentication, restaurant listings, and order management. Implemented using NextAuth and Redux Toolkit for seamless user experience.',
    descriptionTr: 'Kullanıcı kimlik doğrulama, restoran listeleme ve sipariş yönetimi içeren duyarlı bir yemek sipariş platformu. Sorunsuz kullanıcı deneyimi için NextAuth ve Redux Toolkit kullanılarak geliştirildi.',
    technologies: ['React', 'Next.js', 'NextAuth', 'Redux Toolkit', 'TypeScript'],
    github: 'https://github.com/betuloran',
  },
  {
    title: 'Pviser',
    descriptionEn: 'Internal workspace system with reusable UI components. Built with the frontend team for API integration and participated in code review processes.',
    descriptionTr: 'Yeniden kullanılabilir UI komponentleri ile dahili çalışma alanı sistemi. API entegrasyonu için frontend ekibiyle geliştirildi ve kod inceleme süreçlerine katıldı.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'ShadCN', 'Material UI'],
    github: 'https://github.com/betuloran',
  },
  {
    title: 'User Management System',
    descriptionEn: 'Full-stack user and content management platform with authentication system, database integration, and modern UI design. Built with React frontend and Node.js backend.',
    descriptionTr: 'Kimlik doğrulama sistemi, veritabanı entegrasyonu ve modern UI tasarımı ile full-stack kullanıcı ve içerik yönetim platformu. React frontend ve Node.js backend ile geliştirildi.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/betuloran',
  },
];
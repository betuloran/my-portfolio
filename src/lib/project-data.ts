export interface Project {
  title: string;
  descriptionEn: string;
  descriptionTr: string;
  technologies: string[];
  github?: string;
  live?: string;
  inProgress?: boolean;

}

export const projects: Project[] = [
   {
    title: 'AI-Powered RAG Chatbot',
    descriptionEn: 'The RAG-based chatbot to be developed using a vector database and LangChain is a platform that enables users to engage in intelligent conversations based on documents.',
    descriptionTr: 'Vector database ve LangChain kullanarak geliştirilecek RAG tabanlı chatbot, kullanıcıların dökümanları üzerinden akıllı sohbet edebileceği bir platformdur.',
    technologies: ["LangChain", "OpenAI", "Vector DB", "React", "Next.js"],
    inProgress: true,
  },
  {
    title: 'User Management System',
    descriptionEn: 'Full-stack user and content management platform with authentication system, database integration, and modern UI design. Built with React frontend and Node.js backend.',
    descriptionTr: 'Kimlik doğrulama sistemi, veritabanı entegrasyonu ve modern UI tasarımı ile full-stack kullanıcı ve içerik yönetim platformu. React frontend ve Node.js backend ile geliştirildi.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/betuloran/fullstack-user-management-app',
    inProgress: true,
  },
   {
    title: 'Personal Portfolio',
    descriptionEn: 'A modern personal portfolio website was developed to showcase projects and contact information. Built with Next.js and responsive design principles to deliver a fast, user-friendly experience.',
    descriptionTr: 'Kişisel projeleri ve iletişim bilgilerini sergilemek amacıyla modern bir portföy sitesi geliştirildi. Next.js altyapısı ve responsive tasarım ilkeleriyle performanslı, kullanıcı dostu bir arayüz oluşturuldu.',
    technologies: ['React', 'Next.js', 'TypeScript',' Tailwind CSS', 'Framer Motion'],
     github: 'https://github.com/betuloran/my-portfolio',
    live: 'https://my-portfolio-sigma-wine-87.vercel.app/',
  },
  {
    title: 'Automation Flow Demo Project',
    descriptionEn: 'Experimented with Microsoft Power Automate and Power Apps to create a simple workflow automating task submissions from a SharePoint list.',
    descriptionTr: 'SharePoint listesinden görev gönderimlerini otomatikleştiren basit bir iş akışı oluşturmak için Microsoft Power Automate ve Power Apps ile denemeler yapıldı.',
    technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'Dataverse'],
  },
    {
    title: 'Feasta',
    descriptionEn: 'A responsive food ordering platform with user authentication, restaurant listings, and order management. Implemented using NextAuth and Redux Toolkit for seamless user experience.',
    descriptionTr: 'Kullanıcı kimlik doğrulama, restoran listeleme ve sipariş yönetimi içeren duyarlı bir yemek sipariş platformu. Sorunsuz kullanıcı deneyimi için NextAuth ve Redux Toolkit kullanılarak geliştirildi.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'NextAuth', 'Redux', 'Redux Toolkit'],
    github: 'https://github.com/betuloran/feasta-app',
    live: 'https://feasta-app.vercel.app/', 
  },
  {
    title: 'Pviser',
    descriptionEn: 'Internal workspace system with reusable UI components. Built with the frontend team for API integration and participated in code review processes.',
    descriptionTr: 'Yeniden kullanılabilir UI komponentleri ile dahili çalışma alanı sistemi. API entegrasyonu için frontend ekibiyle geliştirildi ve kod inceleme süreçlerine katıldı.',
    technologies: ['React', 'TypeScript','JavaScript','Tailwind CSS', 'ShadCN', 'Material UI','Zod', 'React Hook Form','React Router'],
  },
   
];
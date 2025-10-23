export interface Project {
  titleTr: string;
  titleEn: string;
  descriptionEn: string;
  descriptionTr: string;
  technologies: string[];
  github?: string;
  live?: string;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    titleEn: 'TechPath Mentor',
    titleTr: 'TechPath Mentor',
    descriptionEn: 'I developed a RAG-based chatbot using LangChain and a vector database to provide personalized guidance for students in tech and individuals exploring a career change. The system delivers accurate and context-aware responses using selected local knowledge datasets, helping users get relevant mentorship-like feedback in real time.',
    descriptionTr: 'LangChain ve vektör veritabanını kullanarak, teknoloji alanında okuyan öğrencilere ve kariyer değişikliği düşünen kişilere kişiselleştirilmiş rehberlik sağlamak için RAG tabanlı bir chatbot geliştirdim. Sistem, seçilen yerel bilgi veri kümelerini kullanarak doğru ve bağlam farkında yanıtlar sunarak, kullanıcıların gerçek zamanlı olarak ilgili mentorluk benzeri geri bildirimler almasına yardımcı oluyor.',
    technologies: ["LangChain", "GenAI", "Vector DB", "Python", "Streamlit"],
    github: 'https://github.com/betuloran/techpath-mentor',
  },
  {
    titleEn: 'User Management System',
    titleTr: 'Kullanıcı Yönetim Sistemi',
    descriptionEn: 'I developed a comprehensive user and content management platform that includes identity verification, database integration, and a clean, modern user interface. The project uses React on the front end and Node.js on the back end, focusing on scalability and seamless data flow.',
    descriptionTr: 'Kimlik doğrulama, veritabanı entegrasyonu ve modern bir kullanıcı arayüzü içeren kapsamlı bir kullanıcı ve içerik yönetim platformu geliştirdim. Proje, React ve Node.js kullanarak ölçeklenebilirlik ve kesintisiz veri akışına odaklanıyor.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/betuloran/fullstack-user-management-app',
    inProgress: true,
  },
  {
    titleEn: 'Personal Portfolio',
    titleTr: 'Kişisel Portföy',
    descriptionEn: 'I designed and developed my personal portfolio website to showcase my projects, experience, and contact information. It’s built with Next.js and designed with responsive principles to ensure fast performance and a user-friendly browsing experience across all devices.',
    descriptionTr: 'Projelerimi, deneyimlerimi ve iletişim bilgilerimi sergilemek için kişisel portföy web sitemi tasarladım ve geliştirdim. Next.js ile oluşturulan bu site, tüm cihazlarda hızlı ve kullanıcı dostu bir deneyim sağlamak için duyarlı tasarım ilkelerine göre geliştirildi.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/betuloran/my-portfolio',
    live: 'https://my-portfolio-sigma-wine-87.vercel.app/',
  },
  {
    titleEn: 'Automation Flow Demo Project',
    titleTr: 'Otomasyon Akış Demo Projesi',
    descriptionEn: 'I experimented with Microsoft Power Automate and Power Apps to create a simple workflow that automates task submissions from a SharePoint list. This project helped me understand the fundamentals of workflow automation and low-code business solutions.',
    descriptionTr: 'SharePoint listesinden görev gönderimlerini otomatikleştiren basit bir iş akışı oluşturmak için Microsoft Power Automate ve Power Apps’i denedim. Bu proje, iş akışı otomasyonu ve düşük kodlu iş çözümlerinin temellerini anlamama yardımcı oldu.',
    technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'Dataverse'],
  },
  {
    titleEn: 'Feasta',
    titleTr: 'Feasta',
    descriptionEn: 'Feasta, a responsive food ordering platform featuring user authentication, restaurant listings, and order management capabilities, was developed using NextAuth for secure login and Redux Toolkit for seamless state management, delivering a smooth and intuitive user experience.',
    descriptionTr: 'Feasta, kullanıcı kimlik doğrulaması, restoran listeleri ve sipariş yönetimi özelliklerine sahip, duyarlı bir yemek sipariş platformudur. Güvenli giriş için NextAuth ve durum yönetimi için Redux Toolkit kullanarak sezgisel bir kullanıcı deneyimi sunar.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'NextAuth', 'Redux', 'Redux Toolkit'],
    github: 'https://github.com/betuloran/feasta-app',
    live: 'https://feasta-app.vercel.app/',
  },
  {
    titleEn: 'Pviser',
    titleTr: 'Pviser',
    descriptionEn: 'As part of the frontend team at mfatech, I contributed to the development of the Pviser internal workspace system. I created reusable UI components, worked on API integrations, and participated in code reviews to maintain code quality and consistency across the project.',
    descriptionTr: 'mfatech’in ön uç ekibinin bir parçası olarak, Pviser iç çalışma alanı sisteminin geliştirilmesine katkıda bulundum. Yeniden kullanılabilir bileşenler oluşturdum, API entegrasyonları yaptım ve kod incelemeleriyle proje genelinde tutarlılığı sağladım.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'ShadCN', 'Material UI', 'Zod', 'React Hook Form', 'React Router'],
  },
];
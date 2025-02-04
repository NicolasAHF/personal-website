// src/data/experience.ts

export interface ExperienceItem {
    role: string;
    company: string;
    logo: string;
    year: string;      
    description?: string;
    color: string;
  }
  
  export const experienceData: ExperienceItem[] = [
    {
      role: "Full Stack Engineer",
      company: "Oracle",
      logo: "/images/oracle.webp", 
      year: "Jul 2024 - Present",
      description: "Leading a team of developers and building scalable web applications.",
      color: '#C74634'
    },
    {
      role: "Software Test Engineer",
      company: "UKG",
      logo: "/images/ukg.webp",
      year: " Feb 2024 - Jul 2024",
      description: "Worked on microservices and cloud solutions.",
      color: '#005151'
    },
    {
      role: "Software Engineer in Test",
      company: "Oracle",
      logo: "/images/oracle.webp",
      year: " Apr 2022 - Feb 2024",
      description: "Assisted in building MVP features for a SaaS platform.",
      color: '#C74634'
    },
    {
        role: "Game QA",
        company: "Globant",
        logo: "/images/globant.webp",
        year: "Jun 2021 - Apr 2022",
        description: "Assisted in building MVP features for a SaaS platform.",
        color: '#BFD732'
    },
    {
        role: "QA Tester",
        company: "TCS",
        logo: "/images/tcs.webp",
        year: "Set 2020 - Jun 2021",
        description: "Assisted in building MVP features for a SaaS platform.",
        color: '#FE0307'
    },
  ];
  
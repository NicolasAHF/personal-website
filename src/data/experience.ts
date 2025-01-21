// src/data/experience.ts

export interface ExperienceItem {
    role: string;
    company: string;
    companyLogo: string;
    period: string;      
    description?: string;
  }
  
  export const experienceData: ExperienceItem[] = [
    {
      role: "Full Stack Engineer",
      company: "Oracle",
      companyLogo: "https://www.webopedia.com/wp-content/uploads/1997/02/Webo.OracleProfile-1024x1024.png", 
      period: "Jul 2024 - Present",
      description: "Leading a team of developers and building scalable web applications.",
    },
    {
      role: "Software Test Engineer",
      company: "UKG",
      companyLogo: "https://mms.businesswire.com/media/20200828005323/en/816549/5/Large.jpg",
      period: " Feb 2024 - Jul 2024",
      description: "Worked on microservices and cloud solutions.",
    },
    {
      role: "Software Engineer in Test",
      company: "Oracle",
      companyLogo: "https://www.webopedia.com/wp-content/uploads/1997/02/Webo.OracleProfile-1024x1024.png",
      period: " Apr 2022 - Feb 2024",
      description: "Assisted in building MVP features for a SaaS platform.",
    },
    {
        role: "Game QA",
        company: "Globant",
        companyLogo: "https://statics.globant.com/production/public/2022-08/globant-logo.jpg",
        period: "Jun 2021 - Apr 2022",
        description: "Assisted in building MVP features for a SaaS platform.",
    },
    {
        role: "QA Testet",
        company: "TCS",
        companyLogo: "https://ibsintelligence.com/wp-content/uploads/2021/09/TCS.jpg",
        period: "Set 2020 - Jun 2021",
        description: "Assisted in building MVP features for a SaaS platform.",
    },
  ];
  
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
      description: "• Developed and implemented end-to-end functionalities, using an internal framework based on React (UIF) and TypeScript for the frontend, and Java for backend services.\n• Increased unit test coverage for the checkout module from 0% to 93%, by using an internal AI tool and prompt engineering.\n• Actively collaborated in cross-functional teams to define, design, and deliver new software requirements.",
      color: '#C74634'
    },
    {
      role: "Software Test Engineer",
      company: "UKG",
      logo: "/images/ukg.webp",
      year: " Feb 2024 - Jul 2024",
      description: "• Executed automated and manual tests for web applications, ensuring product functionality and performance.\n• Closely collaborated with development teams for the identification, documentation, and resolution of software defects.",
      color: '#005151'
    },
    {
      role: "Software Engineer in Test",
      company: "Oracle",
      logo: "/images/oracle.webp",
      year: " Apr 2022 - Feb 2024",
      description: "• Created an end-to-end testing framework from scratch for the SuiteCommerce platform using Playwright and TypeScript.\n• Implemented automated testing that achieved 100% coverage of critical checkout flows.\n• Contributed to the improvement of CI/CD processes to streamline software deployment.",
      color: '#C74634'
    },
    {
        role: "Game QA",
        company: "Globant",
        logo: "/images/globant.webp",
        year: "Jun 2021 - Apr 2022",
        description: "• Analyzed game mechanics and executed test plans to identify, report, and follow up on defects in collaboration with the development team.",
        color: '#BFD732'
    },
    {
        role: "QA Tester",
        company: "TCS",
        logo: "/images/tcs.webp",
        year: "Set 2020 - Jun 2021",
        description: "• Executed manual test cases and actively participated in Agile ceremonies to ensure software quality according to requirements.",
        color: '#FE0307'
    },
  ];
  

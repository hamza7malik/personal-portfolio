export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string | null;
  startDate: string;
  endDate: string | null;
  description: string;
  characterImage: string;
  monsterImage: string;
  portfolioItems: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: 'Freelance Software Developer',
    company: 'Fiverr, Upwork',
    location: null,
    startDate: '2018-01',
    endDate: '2021-01',
    description:
      'Developed and managed outsourced web and mobile development projects, collaborating closely with teams to ensure timely delivery and client satisfaction. Personally contributed to the development of projects related to computer vision, NFT minting DApps, and data science.',
    characterImage: '/images/experience/character1.webp',
    monsterImage: '/images/experience/monster1.webp',
    portfolioItems: ['checkitup', 'inProgress', 'inProgress'],
  },
  {
    id: 2,
    title: 'MERN Stack Developer',
    company: 'Hatch Techs',
    location: 'Karachi, Pakistan',
    startDate: '2021-05',
    endDate: '2023-03',
    description:
      'Developed and launched two high-traffic products, Jagahonline and Joustad, serving over 1,000,000 users, as part of a highly efficient team.',
    characterImage: '/images/experience/character2.webp',
    monsterImage: '/images/experience/monster2.webp',
    portfolioItems: ['jagahonlineWeb', 'jagahonlineMobile'],
  },
  {
    id: 3,
    title: 'MERN Stack Developer',
    company: 'Wisoft Solutions',
    location: 'Dubai UAE',
    startDate: '2023-03',
    endDate: '2024-09',
    description:
      "Developed and delivered both mobile and web applications for esteemed clients such as Heights Papers, Hana Waters, UpGrad, ATSS, and Wisoft Solutions' own website, resulting in enhanced client satisfaction and business growth.",
    characterImage: '/images/experience/character3.webp',
    monsterImage: '/images/experience/monster3.webp',
    portfolioItems: ['wisoft', 'upgrad', 'atss', 'heightsMobile', 'tranquil'],
  },
  {
    id: 4,
    title: 'Senior Fullstack Developer',
    company: 'CodeCraft Studios LLC',
    location: 'Dubai UAE',
    startDate: '2024-10',
    endDate: null,
    description:
      'Lead the development of BLTC: Life Transformation Mobile App and web app, and BeNu: Your AI Coaching. Integrated AI features including RAG pipeline, image analysis, integrated LLM Gemini and OpenAI, auto renewable subscription, Apple Pay, Google Pay, and Stripe.',
    characterImage: '/images/experience/character4.webp',
    monsterImage: '/images/experience/monster4.webp',
    portfolioItems: [],
  },
];

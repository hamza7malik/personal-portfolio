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
    title: 'Freelance Full-Stack Engineer',
    company: 'Remote',
    location: null,
    startDate: '2018-01',
    endDate: '2021-01',
    description:
      'Delivered 15+ web and mobile applications for global clients. Built sports management platforms and NFT minting dApps with smart contract integration.',
    characterImage: '/images/experience/character1.webp',
    monsterImage: '/images/experience/monster1.webp',
    portfolioItems: ['checkitup', 'inProgress', 'inProgress'],
  },
  {
    id: 2,
    title: 'MERN Stack Developer',
    company: 'Hatch Techs / Jagahonline',
    location: 'Karachi, Pakistan',
    startDate: '2021-05',
    endDate: '2023-03',
    description:
      'Built and launched JagahOnline and JO Ustad, serving 1,000,000+ users. Developed cross-platform applications and performed code reviews for scalable architecture.',
    characterImage: '/images/experience/character2.webp',
    monsterImage: '/images/experience/monster2.webp',
    portfolioItems: ['jagahonlineWeb', 'jagahonlineMobile'],
  },
  {
    id: 3,
    title: 'Full-Stack Engineer',
    company: 'Wisoft Solutions',
    location: 'Dubai, UAE',
    startDate: '2023-03',
    endDate: '2024-09',
    description:
      'Developed mobile and web apps for Heights Papers, UpGrad, ATSS, and more. Achieved 95+ PageSpeed scores and collaborated in Agile teams.',
    characterImage: '/images/experience/character3.webp',
    monsterImage: '/images/experience/monster3.webp',
    portfolioItems: ['wisoft', 'upgrad', 'atss', 'heightsMobile', 'tranquil'],
  },
  {
    id: 4,
    title: 'Senior Full Stack Engineer',
    company: 'CodeCraft Studios LLC',
    location: 'Dubai, UAE',
    startDate: '2024-09',
    endDate: null,
    description:
      'Led development of iOS/Android apps for SaaS startup, launched 2 products with AI features (RAG, OpenAI, Gemini). Implemented Apple/Google/Stripe subscriptions, CI/CD pipelines, and managed AWS infrastructure.',
    characterImage: '/images/experience/character4.webp',
    monsterImage: '/images/experience/monster4.webp',
    portfolioItems: ['bltc', 'benu'],
  },
];

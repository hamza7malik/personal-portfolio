export interface WhyMeItem {
  title: string;
  description: string;
  image: string;
  icon: string;
}

export const whyMeData: WhyMeItem[] = [
  {
    title: 'Full-Stack Mastery',
    description:
      '7+ years building production-grade web and mobile apps with React, React Native, and Node.js. From scalable backends to pixel-perfect UIs—I handle the complete development lifecycle with expertise.',
    image: 'url("/images/section/1.webp")',
    icon: '/images/icons/1.webp',
  },
  {
    title: 'AI & Advanced Features',
    description:
      'Specialized in implementing cutting-edge capabilities: custom RAG pipelines, LLM integrations (OpenAI, Gemini), subscription systems (Apple IAP, Google Play, Stripe), and cloud infrastructure on AWS.',
    image: 'url("/images/section/2.webp")',
    icon: '/images/icons/2.webp',
  },
  {
    title: 'Production-Ready Code',
    description:
      'I write clean, maintainable, and scalable code following best practices. Experienced in code reviews, TDD, CI/CD pipelines, and delivering solutions that serve millions of users reliably.',
    image: 'url("/images/section/3.webp")',
    icon: '/images/icons/3.webp',
  },
  {
    title: 'Startup Velocity',
    description:
      'Thrive in fast-paced environments. Agile methodologies, remote collaboration across time zones, and delivering complex features on tight deadlines—all while maintaining quality and innovation.',
    image: 'url("/images/section/4.webp")',
    icon: '/images/icons/4.webp',
  },
];

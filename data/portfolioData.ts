export interface PortfolioItem {
  icon: string;
  image: string;
  title: string;
  stack: string;
  text: string;
}

export interface PortfolioData {
  [key: string]: PortfolioItem;
}

export const portfolioData: PortfolioData = {
  inProgress: {
    icon: '/images/portfolio/portfolio/inProgress.webp',
    image: '/images/portfolio/portfolio/modal/inProgress.webp',
    title: 'Portfolio in Progress',
    stack: '',
    text: "I'm currently working on this portfolio item. Check back soon for updates and fresh details!",
  },
  checkitup: {
    icon: '/images/portfolio/portfolio/checkitup.webp',
    image: '/images/portfolio/portfolio/modal/checkitup.webp',
    title: 'CheckItUp',
    stack: 'React Native, Node js, MongoDB',
    text: 'Checkitup is a sports management mobile application developed using React Native, Node.js/Express, and MongoDB. Scheduled for launch in the USA, the app empowers managers to oversee their teams and allows league owners to manage leagues. Users can join teams, and both managers and league owners can host events that users can attend. The app also features communication tools, enabling team members to chat, create avatars, follow other players, and share videos and highlights.',
  },
  jagahonlineMobile: {
    icon: '/images/portfolio/portfolio/jagah-1.webp',
    image: '/images/portfolio/portfolio/modal/jaga-mobile.webp',
    title: 'Jagahonline (Mobile)',
    stack: 'React Native, Node js, MongoDB',
    text: "Jagahonline is a property portal developed using React JS, Node.js/Express, and MongoDB. Competing with Pakistan's largest property portal, Zameen.com, Jagahonline.com is a free and fair real estate marketplace created by Hundred Alpha, an offshoot of Hatch Techs. The platform offers the world's first integrated B2B ERP, CRM, and CMS on a SaaS model, reducing advertising costs by 90%. It enables real estate B2B users to manage their businesses efficiently while providing B2C users with direct, genuine, and accurate listings at their fingertips.",
  },
  jagahonlineWeb: {
    icon: '/images/portfolio/portfolio/jagah-2.webp',
    image: '/images/portfolio/portfolio/modal/jaga-web.webp',
    title: 'Jagahonline (Website)',
    stack: 'React js, Node js, MongoDB',
    text: "Jagahonline is a property portal developed using React JS, Node.js/Express, and MongoDB. Competing with Pakistan's largest property portal, Zameen.com, Jagahonline.com is a free and fair real estate marketplace created by Hundred Alpha, an offshoot of Hatch Techs. The platform offers the world's first integrated B2B ERP, CRM, and CMS on a SaaS model, reducing advertising costs by 90%. It enables real estate B2B users to manage their businesses efficiently while providing B2C users with direct, genuine, and accurate listings at their fingertips.",
  },
  heightsMobile: {
    icon: '/images/portfolio/portfolio/heights.webp',
    image: '/images/portfolio/portfolio/modal/heights.webp',
    title: 'Heights Papers (Mobile App)',
    stack: 'React Native, Node js, MongoDB',
    text: 'Heights Papers is an e-commerce mobile application developed using React Native, Node.js/Express, and MongoDB. Featuring royalty points and integrated with the Hyperpay payment gateway, the app provides high-quality, soft, and sustainable paper tissue products. My contributions included converting Figma designs to high-quality, responsive React Native layouts, developing backend REST APIs, creating an admin panel, and integrating APIs and payment gateways with a focus on security.',
  },
  upgrad: {
    icon: '/images/portfolio/portfolio/upgrad.webp',
    image: '/images/portfolio/portfolio/modal/upgrad.webp',
    title: 'Upgrad',
    stack: 'React js, Node js, MongoDB',
    text: "Upgrad is South Asia's largest higher EdTech company, leveraging advanced technology, pedagogy, industry partnerships, and world-class faculty to create immersive online learning experiences for learners globally. My contribution involved developing 25 pages for the Upgrad website using React JS, translating designs from Figma into high-quality, pixel-perfect, and fully responsive layouts.",
  },
  wisoft: {
    icon: '/images/portfolio/portfolio/wisoft.webp',
    image: '/images/portfolio/portfolio/modal/wisoft.webp',
    title: 'Wisoft Solutions (Website)',
    stack: 'Vue js, Nuxt js, Node js, MongoDB',
    text: 'Wisoft Solutions is a leading digital marketing company serving businesses across the UAE, Middle East, and North Africa. Since its inception in 2010, it has established itself as a trusted digital marketing agency in Dubai, leveraging big data to enhance marketing efficiency and deliver exceptional results. My contributions included converting Figma designs into high-quality, fully responsive Vue.js layouts optimized for speed and SEO. The website supports both English and Arabic, featuring localization and internationalization. Additionally, I developed highly optimized GSAP animations and handled API optimization and integration following REST standards.',
  },
  tranquil: {
    icon: '/images/portfolio/portfolio/tranquil.webp',
    image: '/images/portfolio/portfolio/modal/tranquil.webp',
    title: 'Tranquil',
    stack: 'React js, Next js, Node js, MongoDB',
    text: "Tranquil is a premier real estate developer in Dubai, known for reshaping the city's skyline with a commitment to quality, innovation, and sustainability. Founded by a visionary team of industry veterans, Tranquil Infra Developers creates not just homes but lifestyles, blending cutting-edge design with unparalleled craftsmanship to set a new standard for refined living. My contribution involved building the frontend of the Tranquil website using Next.js and TypeScript, translating Figma designs into high-quality, fully responsive, and pixel-perfect layouts. The project included reusable and scalable components, GSAP animations, and API integration, ensuring a seamless and engaging user experience.",
  },
  atss: {
    icon: '/images/portfolio/portfolio/atss.webp',
    image: '/images/portfolio/portfolio/modal/atss.webp',
    title: 'ATSS',
    stack: 'Next js',
    text: "ATSS is a project under the Mawarid Digital & Communications Group (MDCG), focusing on advancing IoT, IIoT, satellite communications, and systems integration for government, defense, and business sectors. Leveraging MDCG's connectivity and cloud infrastructure, ATSS supports content localization to meet national security requirements and 2030 economic goals. My contributions included developing the website using Next.js, translating high-quality Figma designs into a fully responsive and pixel-perfect layout. I also handled API integration and optimization to ensure excellent performance.",
  },
};

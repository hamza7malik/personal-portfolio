import React, {useEffect, useState} from 'react';
import './ExperienceSection.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import {Button, Typography} from '@mui/material';
import PortfolioModal from '../PortfolioModal/PortfolioModal';
import StarrySky from '../StarrySky/StarrySky';

const ExperienceSection = () => {
  useEffect(() => {
    const scroller = document.querySelector('.scroller') as HTMLElement | null;
    const expSection = gsap.utils.toArray('.exp-section') as HTMLElement[];

    if (scroller && expSection) {
      let tl = gsap.timeline({
        defaults: {
          ease: 'none',
        },
        scrollTrigger: {
          trigger: scroller,
          pin: true,
          scrub: 2,
          end: () => '+=' + scroller.offsetWidth,
        },
      });
      tl.to(
        scroller,
        {
          xPercent: -80,
        },
        '<',
      );
      expSection.forEach((stop, index) => {
        tl.from(stop.querySelector('.exp-content'), {
          yPercent: -50,
          ease: 'elastic.out(1,1)',
          opacity: 0,
          scrollTrigger: {
            trigger: stop.querySelector('.exp-content'),
            start: 'top 80%',
            end: 'top 0%',
            containerAnimation: tl,
            scrub: true,
            // markers: true,
          },
        }).from(
          stop.querySelector('.monster-img'),
          {
            xPercent: 40,
            yPercent: -100,
            ease: 'elastic.out(1,1)',
            scrollTrigger: {
              trigger: stop.querySelector('.monster-img'),
              start: 'top 125%',
              end: 'top 50%',
              scrub: 2,
              containerAnimation: tl,
              //   markers: true,
            },
          },
          '<',
        );
      });
    }
  }, []);

  const [open, setOpen] = useState(false);
  const portfolioData = {
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
  const [currentPortfolio, setCurrentPortfolio] = useState({
    icon: '',
    image: '',
    title: '',
    stack: '',
    text: '',
  });

  const handleOpen = (
    icon: string,
    image: string,
    title: string,
    stack: string,
    text: string,
  ) => {
    setCurrentPortfolio({icon, image, title, stack, text});
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <section className="bg-[var(--primary-color)] ">
      <div className="outer overflow-hidden">
        <div className="scroller flex w-[500vw]">
          <div className="h-[100vh] w-[100vw] ">
            <div className="first-slide h-[100vh] w-[100vw] container text-center flex justify-center items-center">
              <h1 className="text-white">EXPERIENCE</h1>
            </div>
          </div>
          <div className="exp-section h-[100vh] w-[100vw] ">
            <div className="inner grid grid-cols-1 md:grid-cols-2 m-2 sm:m-12 xl:m-28">
              <img
                className="monster-img"
                src="/images/experience/monster1.webp"
                alt=""
              />
              <div className="exp-content  w-[60%] md:w-[77%] xl:w-[50%] ">
                <img
                  src="/images/experience/character1.webp"
                  className="w-[60%] -ml-0 md:-ml-9 mb-3"
                  alt=""
                />

                <h3 className="text-[var(--accent-color)]">
                  Freelance Software Developer
                </h3>
                <p className="text-white">Fiverr, Upwork</p>
                <p className="text-white">
                  Jan 2018 - Jan 2021 ·{' '}
                  <span className="text-[var(--accent-color)]">
                    3 yrs 1 mos
                  </span>
                </p>
                <p className="mt-4 text-white">
                  Developed and managed outsourced web and mobile development
                  projects, collaborating closely with teams to ensure timely
                  delivery and client satisfaction. Personally contributed to
                  the development of projects related to computer vision, NFT
                  minting DApps, and data science.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className="rounded-full cursor-pointer"
                    onClick={() =>
                      handleOpen(
                        portfolioData.checkitup.icon,
                        portfolioData.checkitup.image,
                        portfolioData.checkitup.title,
                        portfolioData.checkitup.stack,
                        portfolioData.checkitup.text,
                      )
                    }>
                    <Image
                      className="rounded-full w-8 sm:w-10"
                      src={'/images/portfolio/portfolio/checkitup.webp'}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="exp-section h-[100vh] w-[100vw] ">
            <div className="inner grid grid-cols-1 md:grid-cols-2 m-2 sm:m-12 xl:m-28">
              <img
                className="monster-img"
                src="/images/experience/monster2.webp"
                alt=""
              />
              <div className="exp-content  w-[60%] md:w-[77%] xl:w-[50%] ">
                <img
                  src="/images/experience/character2.webp"
                  className="w-[60%] -ml-0 md:-ml-9 mb-3"
                  alt=""
                />
                <h3 className="text-[var(--accent-color)]">
                  MERN Stack Developer
                </h3>
                <p className="text-white">Hatch Techs</p>
                <p className="text-white">
                  May 2021 - Mar 2023 ·{' '}
                  <span className="text-[var(--accent-color)]">
                    1 yr 11 mos
                  </span>
                </p>
                <p className="mt-4 text-white">
                  Developed and launched two high-traffic products, Jagahonline
                  and Joustad, serving over 1,000,000 users, as part of a highly
                  efficient team.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className="rounded-full cursor-pointer"
                    onClick={() =>
                      handleOpen(
                        portfolioData.jagahonlineWeb.icon,
                        portfolioData.jagahonlineWeb.image,
                        portfolioData.jagahonlineWeb.title,
                        portfolioData.jagahonlineWeb.stack,
                        portfolioData.jagahonlineWeb.text,
                      )
                    }>
                    <Image
                      className="rounded-full w-8 sm:w-10"
                      src={'/images/portfolio/portfolio/jagah-1.webp'}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <div
                    className="rounded-full cursor-pointer"
                    onClick={() =>
                      handleOpen(
                        portfolioData.jagahonlineMobile.icon,
                        portfolioData.jagahonlineMobile.image,
                        portfolioData.jagahonlineMobile.title,
                        portfolioData.jagahonlineMobile.stack,
                        portfolioData.jagahonlineMobile.text,
                      )
                    }>
                    <Image
                      className="rounded-full w-8 sm:w-10"
                      src={'/images/portfolio/portfolio/jagah-2.webp'}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="exp-section h-[100vh] w-[100vw] ">
            <div className="inner grid grid-cols-1 md:grid-cols-2 m-2 sm:m-12 xl:m-28">
              <img
                className="monster-img"
                src="/images/experience/monster3.webp"
                alt=""
              />
              <div className="exp-content  w-[60%] md:w-[77%] xl:w-[50%] ">
                <img
                  src="/images/experience/character3.webp"
                  className="w-[60%] -ml-0 md:-ml-9 mb-3"
                  alt=""
                />
                <h3 className="text-[var(--accent-color)]">
                  MERN Stack Developer
                </h3>
                <p className="text-white">Wisoft Solutions</p>
                <p className="text-white">
                  Mar 2023 - Present ·{' '}
                  <span className="text-[var(--accent-color)]">1 yr 5 mos</span>
                </p>
                <p className="mt-4 text-white">
                  Developed and delivered both mobile and web applications for
                  esteemed clients such as Heights Papers, Hana Waters, UpGrad,
                  ATSS, and Wisoft Solutions' own website, resulting in enhanced
                  client satisfaction and business growth.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className="rounded-full cursor-pointer"
                    onClick={() =>
                      handleOpen(
                        portfolioData.wisoft.icon,
                        portfolioData.wisoft.image,
                        portfolioData.wisoft.title,
                        portfolioData.wisoft.stack,
                        portfolioData.wisoft.text,
                      )
                    }>
                    <Image
                      className="rounded-full w-8 sm:w-10"
                      src={'/images/portfolio/portfolio/wisoft.webp'}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <div
                    className="rounded-full cursor-pointer"
                    onClick={() =>
                      handleOpen(
                        portfolioData.upgrad.icon,
                        portfolioData.upgrad.image,
                        portfolioData.upgrad.title,
                        portfolioData.upgrad.stack,
                        portfolioData.upgrad.text,
                      )
                    }>
                    <Image
                      className="rounded-full w-8 sm:w-10"
                      src={'/images/portfolio/portfolio/upgrad.webp'}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <div
                    className="rounded-full cursor-pointer"
                    onClick={() =>
                      handleOpen(
                        portfolioData.atss.icon,
                        portfolioData.atss.image,
                        portfolioData.atss.title,
                        portfolioData.atss.stack,
                        portfolioData.atss.text,
                      )
                    }>
                    <Image
                      className="rounded-full w-8 sm:w-10"
                      src={'/images/portfolio/portfolio/atss.webp'}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <div
                    className="rounded-full cursor-pointer"
                    onClick={() =>
                      handleOpen(
                        portfolioData.heightsMobile.icon,
                        portfolioData.heightsMobile.image,
                        portfolioData.heightsMobile.title,
                        portfolioData.heightsMobile.stack,
                        portfolioData.heightsMobile.text,
                      )
                    }>
                    <Image
                      className="rounded-full w-8 sm:w-10"
                      src={'/images/portfolio/portfolio/heights.webp'}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <div
                    className="rounded-full cursor-pointer"
                    onClick={() =>
                      handleOpen(
                        portfolioData.tranquil.icon,
                        portfolioData.tranquil.image,
                        portfolioData.tranquil.title,
                        portfolioData.tranquil.stack,
                        portfolioData.tranquil.text,
                      )
                    }>
                    <Image
                      className="rounded-full w-8 sm:w-10"
                      src={'/images/portfolio/portfolio/tranquil.webp'}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100vh] w-[100vw] bg-[var(--primary-color)]">
            <div className="last-slide h-[100vh] w-[100vw] container text-center flex justify-center items-center">
              <div>
                <h1 className="text-white">Get in Touch!</h1>
                <div className="mt-6">
                  <CTAPrimary link="#footer-section" text="Contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-container">
        <img src="" alt="" />
      </div> */}
      <div>
        <PortfolioModal
          currentPortfolio={currentPortfolio}
          open={open}
          handleClose={handleClose}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;

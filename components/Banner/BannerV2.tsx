import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import './BannerV2.css';

const BannerV2 = () => {
  const skills = [
    'React.js',
    'React Native',
    'Node.js',
    'TypeScript',
    'Next.js',
    'Redux Toolkit',
    'MongoDB',
    'AWS',
    'OpenAI',
    'Docker',
    'CI/CD',
    'Jest/TDD',
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Check if desktop (width >= 768px)
    const isDesktop = window.innerWidth >= 768;

    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-main-wrap',
        start: 'top top',
        end: 'bottom top',
        scrub: true, // Smoothly animates elements as you scroll
      },
    });

    // Animation for planets-layer (move slightly up)
    tl.to('.planets-layer', {
      y: '20%',
      scale: 0.9,
      duration: 1,
      ease: 'power2.out',
    });

    // Animation for buildings-layer (move slightly up)
    tl.to(
      '.buildings-layer',
      {y: '-10%', scale: 1.05, duration: 1, ease: 'power2.out'},
      '-=1',
    ); // Start 1 second before previous animation ends

    // Animation for floor-layer (move slightly down)
    tl.to(
      '.floor-layer',
      {y: '20%', scale: 1.05, duration: 1, ease: 'power2.out'},
      '-=1',
    ); // Start 1 second before previous animation ends

    // Slide down effect for slide-down-element
    tl.to(
      '.slide-down-element',
      {y: '180%', opacity: 0, scale: 0.8, duration: 1.5, ease: 'power2.out'},
      0,
    ); // Start immediately

    // Animation for background sky (expand/zoom from 100% to 120%) - Desktop only
    if (isDesktop) {
      tl.fromTo(
        '.hero-main-wrap',
        {
          backgroundSize: '130%',
        },
        {
          backgroundSize: '120%',
          duration: 1.5,
          ease: 'power2.out',
        },
        0,
      ); // Start immediately with other animations
    }

    return () => {
      tl.kill();
      const trigger = ScrollTrigger.getById('hero-trigger');
      if (trigger) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <div
      className="hero-main-wrap bg-[var(--primary-color)] bg-center bg-cover w-full h-[100%] overflow-hidden"
      style={{backgroundImage: "url('/images/layered-hero/6_sky.png')"}}>
      <div
        className="c-banner-content text-white relative container z-10"
        data-aos="fade-up">
        <div className="grid grid-cols-1 justify-center items-center">
          <div className="banner-right text-white col-span-2 text-center my-auto mt-40">
            <span className="greeting-tag">HI! I&apos;M,</span> <br />
            <h1 className="mx-auto mt-10">
              HAMZA MALIK, <br />{' '}
              <span className="px-3 bg-[var(--primary-color)] text-white">
                SENIOR FULL STACK
              </span>{' '}
              ENGINEER
            </h1>
            <p className="text-white my-2 sm:my-8">
              7+ Years Building Production-Grade Web & Mobile Apps | React,
              React Native, Node.js | Dubai 🇦🇪
            </p>
            <div className=" flex-wrap justify-center mx-auto w-[70%] flex">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-list-item ml-3 mt-2 sm:mt-7"
                  data-aos="zoom-in-right">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-img-wrap col-span-1  mx-auto relative h-48 sm:h-[70vh] md:h-[100vh]">
        <div className="slide-down-element w-20 h-20 sm:w-24 sm:h-24 absolute top-4 sm:top-12"></div>
        <div className="absolute bottom-0 sm:bottom-16 planets-layer w-full">
          <img
            className="w-full"
            src="images/layered-hero/5_planets.png"
            alt="Hamza Malik-Hero"
          />
        </div>
        <div className="absolute -bottom-12 sm:-bottom-32 buildings-layer w-full">
          <img
            className="w-full"
            src="images/layered-hero/3_buildings.png"
            alt="Hamza Malik-Hero"
          />
        </div>
        <div className="absolute bottom-0 sm:bottom-20 floor-layer w-full">
          <img
            className="w-full"
            src="images/layered-hero/2_floor.png"
            alt="Hamza Malik-Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerV2;

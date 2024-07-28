import React, {useEffect, useRef} from 'react';
import './BannerV2.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';
import Link from 'next/link';

import {duration} from '@mui/material';

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const BannerV2 = () => {
  const skills = [
    'React.js',
    'React Native',
    'Redux',
    'Node.js',
    'Jest',
    'Test Driven Development (TDD)',
    'Vue Js',
    'CI / CD',
    'Next.js / Nuxt.js',
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      {y: '180%', opacity: 0, duration: 0.5, ease: 'power2.out'},
      0,
    ); // Start immediately

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
      {/* <div className="sticky top-0 h-[100%] overflow-hidden">
        <img
          className=""
          src="images/layered-hero/1_rocks.png"
          alt="Hamza Malik-Hero"
        />
      </div> */}
      <div
        className="c-banner-content text-white relative container z-10"
        data-aos="fade-up">
        <div className="grid grid-cols-1 justify-center items-center">
          <div className="banner-right text-white col-span-2 text-center my-auto mt-40">
            <span className="greeting-tag">HI! I&apos;M,</span> <br />
            <h1 className="mx-auto mt-10">
              HAMZA MAIK, <br />{' '}
              <span className="px-3 bg-[var(--accent-color)] text-white">
                MERN STACK
              </span>{' '}
              DEVELOPER
            </h1>
            <p className="text-white my-8">
              Passionate MERN Stack Developer | UAE 🇦🇪 | Let&apos;s Build
              Together!
            </p>
            {/* <CTAPrimary text={'Get Started'} link={'#'} /> */}
            <div className=" flex-wrap justify-center mx-auto w-[70%] flex">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-list-item ml-3 mt-2 sm:mt-7"
                  data-aos="zoom-in-right">
                  {skill}
                </span>
              ))}

              {/* <span
                className="skill-list-item semi-colon ml-3 mt-7"
                data-aos="zoom-in-right">
                ;
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-img-wrap col-span-1  mx-auto relative h-48 sm:h-[70vh] md:h-[100vh]">
        <div className="slide-down-element absolute top-24"></div>
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

        {/* <img
          src="images/layered-hero/1_rocks.png"
          className="absolute top-3"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default BannerV2;

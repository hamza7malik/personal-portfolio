import React, {useEffect, useRef} from 'react';
import './BannerV2.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css';
import {duration} from '@mui/material';

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const BannerV2 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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

  useGSAP(() => {
    gsap.to('.testAnim', {
      duration: 3,
      rotation: 360,
      scale: 2,
      repeat: -1,
    });
  });

  return (
    <div className="bg-[var(--primary-color)] w-full ">
      <div className="c-banner-content text-white container" data-aos="fade-up">
        <div className="grid grid-cols-1 justify-center items-center ">
          <div className="banner-right text-white col-span-2 text-center my-auto mt-40 ">
            <span className="greeting-tag">HI! I'M,</span> <br />
            <h1 className="mx-auto mt-10">
              HAMZA MAIK, <br />{' '}
              <span className="text-[var(--accent-color)]">MERN STACK </span>
              DEVELOPER
            </h1>
            <p className="text-white my-8">
              Passionate MERN Stack Developer | UAE 🇦🇪 | Let's Build Together!
            </p>
            {/* <CTAPrimary text={'Get Started'} link={'#'} /> */}
            <div className="flex flex-wrap justify-center mx-auto w-[70%]">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-list-item ml-3 mt-7"
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
      <div className="hero-img-wrap col-span-1  mx-auto relative">
        <div className="slide-down-element absolute top-48"></div>
        <img src="images/hero/layer-2.png" className="absolute top-3" alt="" />
        <img
          className=""
          src="images/hero/layer-main.png"
          alt="Hamza Malik-Hero"
        />
      </div>
    </div>
  );
};

export default BannerV2;

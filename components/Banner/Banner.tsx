import React, {useEffect} from 'react';
import './Banner.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';
import Link from 'next/link';

const Banner = () => {
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

  return (
    <div className="bg-[var(--primary-color)] w-full">
      <div className="c-banner-content text-white container" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
          <div className="banner-right text-white col-span-2">
            <span className="greeting-tag">HI! I&apos;M,</span> <br />
            <h1 className="mx-auto mt-10">
              HAMZA MAIK, <br />{' '}
              <span className="text-[#1fea00]">MERN STACK </span>
              DEVELOPER
            </h1>
            <p className="text-white my-8">
              🚀 Passionate MERN Stack Developer | UAE 🇦🇪 | Let&apos;s Build
              Together!
            </p>
            {/* <CTAPrimary text={'Get Started'} link={'#'} /> */}
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-list-item ml-3 mt-7"
                  data-aos="zoom-in-right">
                  {skill}
                </span>
              ))}

              <span
                className="skill-list-item semi-colon ml-3 mt-7"
                data-aos="zoom-in-right">
                ;
              </span>
            </div>
          </div>
          <div className="hero-img-wrap col-span-1 py-32">
            <img
              className="h-[80%] w-[80%]"
              src="images/hero/avatar_6.webp"
              alt="Hamza Malik-Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

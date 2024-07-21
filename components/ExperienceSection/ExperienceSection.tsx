import React, {useEffect} from 'react';
import './ExperienceSection.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

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
            <div className="inner grid grid-cols-1 md:grid-cols-2 m-2 md:m-28">
              <img
                className="monster-img"
                src="/images/experience/monster1.png"
                alt=""
              />
              <div className="exp-content  w-[50%] md:w-[50%] ">
                <img
                  src="/images/experience/character1.png"
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
                  Managed 15+ outsourced web development projects, ensuring
                  timely delivery and client satisfaction through efficient
                  project management and coding practices.
                </p>
              </div>
            </div>
          </div>
          <div className="exp-section h-[100vh] w-[100vw] ">
            <div className="inner grid grid-cols-1 md:grid-cols-2 m-2 md:m-28">
              <img
                className="monster-img"
                src="/images/experience/monster2.png"
                alt=""
              />
              <div className="exp-content  w-[50%] md:w-[50%] ">
                <img
                  src="/images/experience/character2.png"
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
              </div>
            </div>
          </div>
          <div className="exp-section h-[100vh] w-[100vw] ">
            <div className="inner grid grid-cols-1 md:grid-cols-2 m-2 md:m-28">
              <img
                className="monster-img"
                src="/images/experience/monster3.png"
                alt=""
              />
              <div className="exp-content  w-[50%] md:w-[50%] ">
                <img
                  src="/images/experience/character3.png"
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
              </div>
            </div>
          </div>
          <div className="h-[100vh] w-[100vw] bg-[var(--primary-color)]">
            <div className="last-slide h-[100vh] w-[100vw] container text-center flex justify-center items-center">
              <div>
                <h1 className="text-white">Get in Touch!</h1>
                <div className="mt-6">
                  <CTAPrimary link="/contact" text="Contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-container">
        <img src="" alt="" />
      </div> */}
    </section>
  );
};

export default ExperienceSection;

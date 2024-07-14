import React, {useRef} from 'react';
import './SectionWhyChooseUs.css';

import IC1 from '../../public/images/why-choose-us/IC1';
import IC2 from '../../public/images/why-choose-us/IC2';
import IC3 from '../../public/images/why-choose-us/IC3';
import IC4 from '../../public/images/why-choose-us/IC4';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Image from 'next/image';

const SectionWhyChooseUs = () => {
  const whyChooseUsData = [
    {
      title: 'MERN Stack Expertise',
      description:
        "I rock the MERN stack! From MongoDB to React, I build sleek, scalable apps that just work. Let's turn ideas into awesome digital realities together!",
      image: 'url("/images/section/1.png")',
      icon: '/images/icons/1.png',
    },
    {
      title: 'Code Ninja',
      description:
        "I write code that's reusable and easy to scale. Think of me as your coding wizard—making tech dreams come true, one line at a time.",
      image: 'url("/images/section/2.png")',
      icon: '/images/icons/2.png',
    },
    {
      title: 'Passion for Tech',
      description:
        "I geek out on software dev! It's not just a job; it's my playground. I'm always learning and tweaking to stay ahead in this fast-paced world.",
      image: 'url("/images/section/3.png")',
      icon: '/images/icons/3.png',
    },
    {
      title: 'Exceeding Expectations',
      description:
        "Need deadlines met with style? I've got you covered. I love blowing minds with solutions that go above and beyond what's expected. Let's push limits!",
      image: 'url("/images/section/4.png")',
      icon: '/images/icons/4.png',
    },
  ];

  const cardRefs = whyChooseUsData.map(() => useRef<HTMLDivElement>(null));
  const visibilityStates = useIntersectionObserver(cardRefs, {
    threshold: 0.8,
  });

  return (
    <section className="pb-0 md:pb-[inherit] ">
      <div className="container">
        <div className="mx-auto text-center w-[100%] md:w-[55%]  2xl:w-[35%]">
          <div>
            <h3>why choose us</h3>
            <h2 className="my-8">What I can do for you</h2>
          </div>
        </div>
      </div>
      <div className="reveal-cards-wrapper-desktop hidden md:hidden grid-cols-4 ">
        {whyChooseUsData.map((item, index) => (
          <div
            key={index}
            className="reveal-card flex justify-center items-center px-16"
            style={{backgroundImage: item.image}}>
            <div className="card-content text-center">
              <div className="card-header">
                <div className="pb-6">{item.icon}</div>

                <h3 className="px-12 md:px-16">{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --------------mobile-part--- */}
      <div className="reveal-cards-wrapper-mobile grid  grid-cols-1 bg-[var(--primary-color)]">
        {whyChooseUsData.map((item, index) => (
          <div
            key={index}
            ref={cardRefs[index]}
            className={`reveal-card flex justify-center items-center px-16 h-screen w-[50%]  ${
              visibilityStates[index] ? 'visible' : ''
            } ${(index + 1) % 2 !== 0 && 'ml-auto'}`}
            style={{backgroundImage: item.image}}>
            <div className="card-content text-center">
              <div className="card-header">
                <div className="pb-6 flex justify-center items-center">
                  {/* {item.icon} */}
                  <Image src={item.icon} alt="" width={150} height={150} />
                </div>

                <h3 className="px-12 md:px-16">{item.title}</h3>
              </div>
              <p className="w-[50%] mx-auto">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWhyChooseUs;

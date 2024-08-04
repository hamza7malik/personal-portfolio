import React, {RefObject, useEffect, useRef, useState} from 'react';
import './SectionWhyMe.css';

import IC1 from '../../public/images/why-choose-us/IC1';
import IC2 from '../../public/images/why-choose-us/IC2';
import IC3 from '../../public/images/why-choose-us/IC3';
import IC4 from '../../public/images/why-choose-us/IC4';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Image from 'next/image';

const SectionWhyMe = () => {
  const [cardRefs, setCardRefs] = useState<RefObject<HTMLDivElement>[]>([]);

  const sectionData = [
    {
      title: 'MERN Stack Expertise',
      description:
        "I rock the MERN stack! From MongoDB to React, I build sleek, scalable apps that just work. Let's turn ideas into awesome digital realities together!",
      image: 'url("/images/section/1.webp")',
      icon: '/images/icons/1.webp',
    },
    {
      title: 'Code Ninja',
      description:
        "I write code that's reusable and easy to scale. Think of me as your coding wizard—making tech dreams come true, one line at a time.",
      image: 'url("/images/section/2.webp")',
      icon: '/images/icons/2.webp',
    },
    {
      title: 'Passion for Tech',
      description:
        "I geek out on software dev! It's not just a job; it's my playground. I'm always learning and tweaking to stay ahead in this fast-paced world.",
      image: 'url("/images/section/3.webp")',
      icon: '/images/icons/3.webp',
    },
    {
      title: 'Exceeding Expectations',
      description:
        "Need deadlines met with style? I've got you covered. I love blowing minds with solutions that go above and beyond what's expected. Let's push limits!",
      image: 'url("/images/section/4.webp")',
      icon: '/images/icons/4.webp',
    },
  ];

  useEffect(() => {
    setCardRefs(sectionData.map(() => React.createRef()));
  }, []);

  const visibilityStates = useIntersectionObserver(cardRefs, {
    threshold: 0.6,
  });

  return (
    <section className="pb-0 md:pb-[inherit] ">
      <div className="container">
        <div className="mx-auto text-center w-[100%] md:w-[55%]  2xl:w-[35%]">
          <div>
            <h3>Why Work with Me</h3>
            <h2 className="my-8">Transforming Ideas into Reality</h2>
          </div>
        </div>
      </div>
      <div className="reveal-cards-wrapper-desktop hidden md:hidden grid-cols-4 ">
        {sectionData.map((item, index) => (
          <div
            key={index}
            className="reveal-card flex justify-center items-center px-16"
            style={{backgroundImage: item.image}}>
            <div className="card-content text-center">
              <div className="card-header">
                <div className="pb-6">{item.icon}</div>

                <h3 className="">{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --------------mobile-part--- */}
      <div className="reveal-cards-wrapper-mobile grid  grid-cols-1 md:grid-cols-4 ">
        {sectionData.map((item, index) => (
          <div
            key={index}
            ref={cardRefs[index]}
            className={`reveal-card flex justify-center items-center px-16 h-screen w-[100%] mx-auto  ${
              visibilityStates[index] ? 'visible' : ''
            } `}
            style={{backgroundImage: item.image}}>
            <div className="card-content text-center">
              <div className="card-header">
                <div className="pb-6 flex justify-center items-center">
                  {/* {item.icon} */}
                  <Image src={item.icon} alt="" width={150} height={150} />
                </div>

                <h3 className="">{item.title}</h3>
              </div>
              <p className="w-[100%] mx-auto">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWhyMe;

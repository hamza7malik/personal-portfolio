import React, {RefObject, useEffect, useState} from 'react';
import Image from 'next/image';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import {whyMeData} from '../../data/whyMeData';
import './SectionWhyMe.css';

const SectionWhyMe = () => {
  const [cardRefs, setCardRefs] = useState<RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    setCardRefs(whyMeData.map(() => React.createRef()));
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
        {whyMeData.map((item, index) => (
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
        {whyMeData.map((item, index) => (
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

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import CTAPrimary from '../CTAPrimary/CTAPrimary';
import PortfolioModal from '../PortfolioModal/PortfolioModal';
import {calculateDuration} from '../../utils/dateHelpers';
import {experienceData} from '../../data/experienceData';
import {portfolioData} from '../../data/portfolioData';
import {initHorizontalScroll} from '../../utils/animations';
import './ExperienceSection.css';

const ExperienceSection = () => {
  useEffect(() => {
    initHorizontalScroll('.scroller', '.exp-section');
  }, []);

  const [open, setOpen] = useState(false);
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
          {experienceData.map(exp => {
            const startDateFormatted = new Date(
              exp.startDate,
            ).toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
            const endDateFormatted = exp.endDate
              ? new Date(exp.endDate).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })
              : 'Present';
            const duration = calculateDuration(exp.startDate, exp.endDate);

            return (
              <div key={exp.id} className="exp-section h-[100vh] w-[100vw] ">
                <div className="inner grid grid-cols-1 md:grid-cols-2 m-2 sm:m-12 xl:m-28">
                  <Image
                    className="monster-img"
                    src={exp.monsterImage}
                    alt="Monster character"
                    width={800}
                    height={800}
                  />
                  <div className="exp-content  w-[60%] md:w-[77%] xl:w-[50%] ">
                    <Image
                      src={exp.characterImage}
                      className="w-[60%] -ml-0 md:-ml-9 mb-3"
                      alt="Character"
                      width={400}
                      height={400}
                    />
                    <h3 className="text-[var(--accent-color)]">{exp.title}</h3>
                    <p>
                      <span className="text-white font-bold">
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="text-[var(--accent-color)]">
                          , {exp.location}
                        </span>
                      )}
                    </p>
                    <p className="text-white">
                      {startDateFormatted} - {endDateFormatted} ·{' '}
                      <span className="text-[var(--accent-color)]">
                        {duration}
                      </span>
                    </p>
                    <p className="mt-4 text-white">{exp.description}</p>
                    {exp.portfolioItems.length > 0 && (
                      <div className="flex items-center gap-3 mt-2">
                        {exp.portfolioItems.map((item, index) => {
                          const portfolio =
                            portfolioData[item as keyof typeof portfolioData];
                          return (
                            <div
                              key={index}
                              className="rounded-full cursor-pointer"
                              onClick={() =>
                                handleOpen(
                                  portfolio.icon,
                                  portfolio.image,
                                  portfolio.title,
                                  portfolio.stack,
                                  portfolio.text,
                                )
                              }>
                              <Image
                                className="rounded-full w-8 sm:w-10"
                                src={portfolio.icon}
                                width={40}
                                height={40}
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="h-[100vh] w-[100vw] bg-[var(--primary-color)]">
            <div className="last-slide h-[100vh] w-[100vw] container text-center flex justify-center items-center">
              <div>
                <h1 className="text-white">Get in Touch!</h1>
                <div className="mt-6 flex gap-4 justify-center">
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('openContact'));
                    }}
                    className="primary-cta">
                    Contact
                  </button>
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('openChat'));
                    }}
                    className="border border-white text-white transition-all duration-400 rounded-[var(--border-radius)] px-12 py-3 mt-10 hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)]">
                    Chat with Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

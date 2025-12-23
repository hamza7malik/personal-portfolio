import React from 'react';
import './SectionAboutMe.css';
import {calculateYearsOfExperience} from '../../utils/calculateExperience';

const SectionAboutMe = () => {
  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <section id="about-section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-26 lg:gap-36">
          <div>
            <h3>About Me</h3>
            <h2 className="my-8">
              {yearsOfExperience} Years of Full Stack Excellence
            </h2>
            <p className="pr-0 xxl:pr-64">
              Senior Full Stack Engineer with 7+ years of experience building
              and scaling production-grade web and mobile applications for iOS &
              Android. Proven expertise in{' '}
              <span className="font-medium">
                React, React Native, Node.js, TypeScript, and Next.js
              </span>
              , delivering solutions that serve millions of users.
              <br /> <br />
              Specialized in implementing complex features including
              Apple/Google/Stripe in-app subscription systems, AI-driven
              capabilities (retrieval-augmented generation pipelines, LLM
              integrations), and scalable cloud infrastructure on AWS.
              Experienced in fast-paced startup environments, following Agile
              methodologies, and collaborating with remote teams across multiple
              time zones.
              <br /> <br />
              Passionate about writing clean, maintainable code and building
              architectures that scale. From mobile app submissions to CI/CD
              pipelines, I handle the full development lifecycle with precision
              and attention to detail.
            </p>
            <div className="mt-8">
              <p className="text-lg font-medium mb-4">Want to know more?</p>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openChat'));
                }}
                className="px-8 py-3 bg-[var(--accent-color)] text-white rounded-[var(--border-radius)] font-semibold hover:scale-105 transition-transform duration-300 mt-4">
                Chat with Me
              </button>
            </div>
          </div>
          <div className="about-image-container">
            <img
              src="/images/character/1-1.webp"
              alt=""
              className="floating-bg"
            />
            <img
              src="/images/character/1-22.webp"
              alt=""
              className="floating-character"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;

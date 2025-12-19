import React from 'react';
import './SectionAboutMe.css';

const SectionAboutMe = () => {
  return (
    <section id="about-section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-26 lg:gap-36">
          <div>
            <h3>About Me</h3>
            <h2 className="my-8">7+ Years of Full Stack Excellence</h2>
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
          </div>
          <div className="">
            <img src="/images/character/1.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;

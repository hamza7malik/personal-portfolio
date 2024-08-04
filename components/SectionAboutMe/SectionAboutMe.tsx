import React from 'react';
import './SectionAboutMe.css';

const SectionAboutMe = () => {
  return (
    <section id="about-section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-26 lg:gap-36">
          <div>
            <h3>About Me</h3>
            <h2 className="my-8">About me in 1 minute</h2>
            <p className="pr-0 xxl:pr-64">
              Dedicated to creating exceptional user experiences through
              innovative solutions in web and mobile development. Skilled in the
              MERN stack with expertise in{' '}
              <span className="font-medium">
                React Native, Vue.js, React.js, Node.js, and Next.js.
              </span>
              <br /> <br />
              Experienced in building impactful web ad mobile applications with
              a focus on writing scalable, readable, and reusable code.
              Proficient in conducting code reviews, providing feedback, and
              ensuring best practices for enhanced team collaboration and code
              quality.
              <br /> <br />
              Committed to continuous learning and growth, always seeking new
              challenges and opportunities to bring remarkable ideas to life.
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

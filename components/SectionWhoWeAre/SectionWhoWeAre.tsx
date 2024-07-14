import React from 'react';
import './SectionWhoWeAre.css';

const SectionWhoWeAre = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-26 lg:gap-36">
          <div>
            <h3>About Me</h3>
            <h2 className="my-8">About me in 1 minute</h2>
            <p className="pr-0 xxl:pr-64">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              consequuntur magni provident reiciendis. Autem debitis excepturi
              porro quis praesentium consectetur quia dolore quam perferendis
              assumenda, blanditiis cumque molestias numquam! Exercitationem?
            </p>
          </div>
          <div className="">
            <img src="/images/character/1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhoWeAre;

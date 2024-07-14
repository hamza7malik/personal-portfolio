import React from 'react';
import './SectionWhoWeAre.css';

const SectionWhoWeAre = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-26 lg:gap-36">
          <div>
            <h3>Who we are</h3>
            <h2 className="my-8">
              Tranquil Infra Developers is at the forefront
            </h2>
            <p className="pr-0 xxl:pr-64">
              Founded by a visionary team of industry veterans, Tranquil Infra
              Developers is at the forefront in reshaping the future of Dubai's
              skyline, harnessing quality, innovation and sustainability to
              create value for investors and enhance the communities we serve.
            </p>
          </div>
          <div className="">
            <img src="/images/hero/pic-2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhoWeAre;

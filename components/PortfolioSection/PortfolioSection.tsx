import React from 'react';
import './PortfolioSection.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const PortfolioSection = () => {
  return (
    <section className="pt-0">
      <div
        className="section-img-wrapper pt-24 pb-24 md:pt-52"
        style={{
          backgroundColor: 'var(--primary-color)',
        }}>
        <div className="container h-flex justify-center items-center">
          <div className="top-part text-center">
            <h2 className="text-white ">MY PORTFOLIO</h2>
            <div className="mt-12 mb-8">
              <CTAPrimary text="Download CV" link="#" />
            </div>
            <p className="text-white">Here is sme of my best work</p>
            <div className="icon-row mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-24">
                <div>
                  <img
                    className="mx-auto scale-125 pb-3"
                    src="/images/portfolio/icons/1.svg"
                    alt=""
                  />
                  <span className="text-white text-center">Icon Item</span>
                </div>
                <div>
                  <img
                    className="mx-auto scale-125 pb-3"
                    src="/images/portfolio/icons/2.svg"
                    alt=""
                  />
                  <span className="text-white text-center">Icon Item</span>
                </div>
                <div>
                  <img
                    className="mx-auto scale-125 pb-3"
                    src="/images/portfolio/icons/3.svg"
                    alt=""
                  />
                  <span className="text-white text-center">Icon Item</span>
                </div>
                <div>
                  <img
                    className="mx-auto scale-125 pb-3"
                    src="/images/portfolio/icons/4.svg"
                    alt=""
                  />
                  <span className="text-white text-center">Icon Item</span>
                </div>
                <div>
                  <img
                    className="mx-auto scale-125 pb-3"
                    src="/images/portfolio/icons/5.svg"
                    alt=""
                  />
                  <span className="text-white text-center">Icon Item</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-part  w-full mt-14">
          <div className="image-row w-full">
            <div className="container">
              <Swiper
                // spaceBetween={32}
                slidesPerView={3}
                loop
                autoplay
                grabCursor>
                <SwiperSlide>
                  <div className="portfolio-card">
                    <img src="images/portfolio/portfolio/1.webp" alt="" />
                    <div>
                      <p className="head">ATSS - website</p>
                      <p className="tech">technology:</p>
                      <p className="tech-list">REACT JS/NUXT JS</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio-card">
                    <img src="images/portfolio/portfolio/2.webp" alt="" />
                    <div>
                      <p className="head">ATSS - website</p>
                      <p className="tech">technology:</p>
                      <p className="tech-list">REACT JS/NUXT JS</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio-card">
                    <img src="images/portfolio/portfolio/3.webp" alt="" />
                    <div>
                      <p className="head">ATSS - website</p>
                      <p className="tech">technology:</p>
                      <p className="tech-list">REACT JS/NUXT JS</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio-card">
                    <img src="images/portfolio/portfolio/1.webp" alt="" />
                    <div>
                      <p className="head">ATSS - website</p>
                      <p className="tech">technology:</p>
                      <p className="tech-list">REACT JS/NUXT JS</p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* <div className="swiper-button-prev">
                <button>Prev</button>
              </div>
              <div className="swiper-button-next">
                <button>Next</button>
              </div> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

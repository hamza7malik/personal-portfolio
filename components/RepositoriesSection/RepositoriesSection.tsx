import React from 'react';
// import CTAPrimary from "../CTAPrimary/CTAPrimary";
import CTAPrimary from '../CTAPrimary/CTAPrimary';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import './RepositoriesSection.css';
import Link from 'next/link';
import ArrowButton from '../ArrowButton/ArrowButton';

const RepositoriesSection = () => {
  const blogData = [
    {
      title:
        "Investing in Dubai's Thriving Real Estate Market: A Guide to Off-Plan Properties",
      url: '#',
      image: 'images/repositories-section/1.png',
    },
    {
      title:
        'Smart Homes, Smarter Investments: The Rise of Technology in Dubai Real Estate',
      url: '#',
      image: 'images/repositories-section/2.png',
    },
    {
      title:
        "The Future is Green: Sustainable Living in Dubai's New Developments",
      url: '#',
      image: 'images/repositories-section/3.png',
    },
    {
      title:
        'Investing in Dubai’s Thriving Real Estate Market: A Guide to Off-Plan Properties',
      url: '#',
      image: 'images/repositories-section/1.png',
    },
  ];
  return (
    <section className="pt-0">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h2 className="pb-5">Repositories</h2>
            <p className="w-[100%] sm:w-[70%]">
              From buying guides to the latest industry updates, learn
              everything you need to know about the real estate market in the
              UAE.
            </p>
          </div>
          <div className="ml-0 md:ml-auto pt-10 md:pt-0">
            <CTAPrimary text="Know More" link="#" outlined={true} />
          </div>
        </div>
      </div>
      <div className="container pr-[] lg:pr-0">
        <div className="swiper-wrapper mt-12">
          <Swiper
            spaceBetween={32}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
            loop
            autoplay
            grabCursor
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}>
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                {/* <img src="images/repositories-section/1.png" alt="" /> */}
                <div
                  className="blog-card bg-cover bg-center w-full flex items-end h-[381px] "
                  style={{
                    backgroundImage: `url('${blog.image}')`,
                  }}>
                  <div className="blog-card-content-wrap w-full">
                    <div className="blog-card-title px-4 md:px-12">
                      <h3 className="text-white">{blog.title}</h3>
                    </div>

                    <div className="know-more-btn px-4 md:px-12 pb-12 pt-5 bg-gradient-to-t from-[var(--primary-color)] to-transparent">
                      <ArrowButton text={'Know More'} link={blog.url} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RepositoriesSection;

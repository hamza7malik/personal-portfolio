import React, {useEffect, useState} from 'react';
// import CTAPrimary from "../CTAPrimary/CTAPrimary";
import CTAPrimary from '../CTAPrimary/CTAPrimary';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import './RepositoriesSection.css';
import Link from 'next/link';
import ArrowButton from '../ArrowButton/ArrowButton';
import axios from 'axios';

type Repository = {
  id: number;
  name: string;
  html_url: string;
  [key: string]: any; // Optional: If there are other properties you're not using, but want to include them.
};

const RepositoriesSection = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const github = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });

  async function fetchPublicRepositories() {
    try {
      const response = await github.get(`/users/hamza7malik/repos`);
      setRepositories(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
    }
  }
  useEffect(() => {
    fetchPublicRepositories();
  });
  const [randomImages, setRandomImages] = useState<Number[]>([]);
  useEffect(() => {
    if (repositories.length) {
      for (let i = 0; i < repositories.length; i++) {
        randomImages.push(getRandomNumber());
      }
    }
  }, [repositories]);
  function getRandomNumber() {
    return Math.floor(Math.random() * 44) + 1;
  }
  return (
    <section className="" id="repositories-section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h2 className="pb-5">Repositories</h2>
            <p className="w-[100%] sm:w-[70%]">
              Discover my open-source projects and contributions, showcasing my
              skills and passion for coding.
            </p>
          </div>
          <div className="ml-0 md:ml-auto pt-10 md:pt-0">
            <div>
              <CTAPrimary
                link="https://github.com/hamza7malik/"
                blank
                text="Github"
                outlined={true}
              />
            </div>
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
            {repositories.map((repos: Repository, index: number) => (
              <SwiperSlide key={index}>
                {/* <img src="images/repositories-section/1.png" alt="" /> */}
                <a target="_blank" href={repos?.html_url}>
                  <div
                    className="repos-card bg-cover bg-center w-full flex items-end h-[381px] "
                    style={{
                      backgroundImage: `url('/images/planets/${randomImages[index]}.png')`,
                    }}>
                    <div className="repos-card-content-wrap w-full bg-gradient-to-t from-[var(--primary-color)] to-transparent">
                      <div className="repos-card-title px-4 md:px-12">
                        <h3 className="text-white font-bold">
                          {repos?.name.length > 20
                            ? repos.name.substring(0, 20) + '...'
                            : repos?.name}
                        </h3>
                      </div>

                      <div className="know-more-btn px-4 md:px-12 pb-12 pt-5 ">
                        <ArrowButton
                          text={'Know More'}
                          link={repos?.html_url}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RepositoriesSection;

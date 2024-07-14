import React from 'react';

import './FloatingButtons.css';
import Link from 'next/link';

const FloatingButtons = () => {
  return (
    <div>
      <div className="c-banner-cta-tray right-3 bottom-5 md:right-10 md:bottom-20 fixed z-10">
        <Link href={'#'}>
          <div className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-r-50">
            <img
              className="scale-[0.7] md:scale-1"
              src="/images/CTA-Tray/1.png"
              alt=""
            />
          </div>
        </Link>
        <Link href={'#'}>
          <div className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 my-3 rounded-full bg-white border-r-50">
            <img
              className="scale-[0.7] md:scale-1"
              src="/images/CTA-Tray/2.png"
              alt=""
            />
          </div>
        </Link>
        <Link href={'#'}>
          <div className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-r-50">
            <img
              className="scale-[0.7] md:scale-1"
              src="/images/CTA-Tray/3.png"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FloatingButtons;

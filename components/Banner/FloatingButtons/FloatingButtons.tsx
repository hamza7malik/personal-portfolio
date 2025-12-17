import React from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import MessageCTAIcon from '../../../public/images/CTA-Tray/MessageCTAIcon';
import PhoneCTAIcon from '../../../public/images/CTA-Tray/PhoneCTAIcon';
import WhatsappCTAIcon from '../../../public/images/CTA-Tray/WhatsappCTAIcon';
import './FloatingButtons.css';

const FloatingButtons = () => {
  return (
    <div>
      <div className="c-banner-cta-tray right-3 bottom-5 md:right-10 md:bottom-20 fixed z-10">
        <Link href={'tel:+971523125845'}>
          <div className="floating-button flex justify-center items-center w-10 h-10 md:w-14 md:h-14  rounded-full border-r-50">
            <div className="scale-[0.7] md:scale-1">
              <PhoneCTAIcon />
            </div>
          </div>
        </Link>
        <Link href={'mailto:crhamza7@gmail.com'}>
          <div className="floating-button flex justify-center items-center w-10 h-10 md:w-14 md:h-14 my-3 rounded-full  border-r-50">
            <div className="scale-[0.7] md:scale-1">
              <MessageCTAIcon />
            </div>
          </div>
        </Link>

        <Link href={'whatsapp://send?phone=+971523125845'}>
          <div className="floating-button flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-full border-r-50">
            <div className="scale-[0.7] md:scale-1">
              <WhatsappCTAIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FloatingButtons;

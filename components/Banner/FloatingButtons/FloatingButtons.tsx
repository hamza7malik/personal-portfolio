import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import MessageCTAIcon from '../../../public/images/CTA-Tray/MessageCTAIcon';
import PhoneCTAIcon from '../../../public/images/CTA-Tray/PhoneCTAIcon';
import WhatsappCTAIcon from '../../../public/images/CTA-Tray/WhatsappCTAIcon';
import Chatbot from '../../Chatbot/Chatbot';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsChatOpen(true);
    };

    window.addEventListener('openChat', handleOpenChat);

    return () => {
      window.removeEventListener('openChat', handleOpenChat);
    };
  }, []);

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
          <div className="floating-button flex justify-center items-center w-10 h-10 md:w-14 md:h-14 my-3 rounded-full border-r-50">
            <div className="scale-[0.7] md:scale-1">
              <WhatsappCTAIcon />
            </div>
          </div>
        </Link>

        <button
          onClick={() => setIsChatOpen(true)}
          className="floating-button flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-full border-r-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-[0.7] md:scale-100">
            <path
              d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Half Circle Bottom Center Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 chat-half-circle-btn">
        <div className="typing-lines">
          <div className="typing-line typing-line-1"></div>
          <div className="typing-line typing-line-2"></div>
          <div className="typing-line typing-line-3"></div>
        </div>
      </button>

      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default FloatingButtons;

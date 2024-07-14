import React, {useState} from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isNav, setIsNav] = useState(false);

  const handleNav = () => {
    setIsNav(!isNav);
  };

  return (
    <div className="bg-[var(--primary-color)] w-full py-4 fixed top-0 z-50">
      <div className="container mx-auto">
        <div className="c-nav-wrapper flex items-center justify-between">
          <div className="c-logo-wrapper">funkaar</div>
          <div className="c-nav-cta-wrapper text-white  gap-3 hidden lg:flex">
            <div className="c-nav-wrapper hidden lg:block  my-auto">
              <ul className="c-nav-ul text-white flex gap-10">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Portfolio</a>
                </li>
                <li>
                  <a href="">Repositories</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            {/* <a href="" className="c-nav-cat-1">
              Become An Agent
            </a> */}
            <a href="" className="c-nav-cat-2">
              Download Resume
            </a>
          </div>
          <div className="block lg:hidden text-white p-2" onClick={handleNav}>
            <img
              className={`transition-transform duration-500 ${
                isNav ? 'animate-rotate' : 'animate-rotate-back'
              }`}
              src={
                isNav
                  ? 'images/navigation/cross.png'
                  : 'images/navigation/ham.svg'
              }
              alt="Nav-Icon"
            />
          </div>
        </div>
      </div>
      {/* --------mobile-nav-menu----------- */}
      <div
        className={
          isNav
            ? 'fixed top-0 left-0 w-[70%] bg-[var(--primary-color)] h-full ease-in-out duration-500'
            : 'fixed top-0 left-[-100%] w-[70%] bg-[var(--primary-color)] h-full ease-in-out duration-500'
        }>
        <div className="c-logo-wrapper p-4">funkaar</div>
        <ul className="text-white pt-8">
          <li className="p-4">
            <a href="">About</a>
          </li>
          <li className="p-4">
            <a href="">Portfolio</a>
          </li>
          <li className="p-4">
            <a href="">Repositories</a>
          </li>
          <li className="p-4">
            <a href="">Contact</a>
          </li>
          <li className="p-4 border-t border-t-[#fbf7ed] w-[90%]">
            <a href="" className="c-nav-cat-1">
              Become An Agent
            </a>
          </li>
          <li className="p-4">
            <a href="" className="c-nav-cat-2">
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;

import React from 'react';
import Link from 'next/link';
import './ArrowButton.css';

type ArrowButtonPropTypes = {
  text: string;
  link: string;
};

const ArrowButton = ({text, link}: ArrowButtonPropTypes) => {
  return (
    <Link href={'#'}>
      <div className="arrow-btn text-white inline-flex items-center gap-2 pb-2">
        {text}
        <img src="images/arrow-btn/arrow.svg" alt="" />
      </div>
    </Link>
  );
};

export default ArrowButton;

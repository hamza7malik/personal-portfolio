import Link from 'next/link';
import React from 'react';
import './ArrowButton.css';

type ArrowButtonProps = {
  text: string;
  link: string;
};

const ArrowButton = ({text, link = '#'}: ArrowButtonProps) => {
  return (
    <Link href={link}>
      <div className="arrow-btn text-white inline-flex items-center gap-2 pb-2">
        {text}
        <img src="images/arrow-btn/arrow.svg" alt="" />
      </div>
    </Link>
  );
};

export default ArrowButton;

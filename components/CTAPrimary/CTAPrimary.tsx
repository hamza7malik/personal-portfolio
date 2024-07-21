import React from 'react';
import './CTAPrimary.css';
import Link from 'next/link';

type CTAPropTypes = {
  text: string;
  link?: string;
  outlined?: boolean;
  blank?: boolean;
};

const CTAPrimary = ({text, link, outlined, blank}: CTAPropTypes) => {
  return (
    <Link
      target={blank ? '_blank' : ''}
      className={outlined ? 'primary-cta-outlined' : ' primary-cta'}
      href={link ? link : '#'}>
      {text}
    </Link>
  );
};

export default CTAPrimary;

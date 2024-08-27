import React from 'react';
import './CTAPrimary.css';
import Link from 'next/link';

type CTAPropTypes = {
  text: string;
  link?: string;
  outlined?: boolean;
  blank?: boolean;
  full?: boolean;
};

const CTAPrimary = ({text, link, outlined, blank, full}: CTAPropTypes) => {
  return (
    <Link
      target={blank ? '_blank' : ''}
      className={
        outlined
          ? `primary-cta-outlined ${full && 'w-full block'}`
          : `primary-cta ${full && 'w-full block'}`
      }
      href={link ? link : '#'}>
      {text}
    </Link>
  );
};

export default CTAPrimary;

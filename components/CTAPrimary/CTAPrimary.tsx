import React from "react";
import "./CTAPrimary.css";
import Link from "next/link";

type CTAPropTypes = {
  text: string;
  link: string;
  outlined?: boolean;
};

const CTAPrimary = ({ text, link, outlined }: CTAPropTypes) => {
  return (
    <Link
      className={outlined ? "primary-cta-outlined" : " primary-cta"}
      href={link}
    >
      {text}
    </Link>
  );
};

export default CTAPrimary;

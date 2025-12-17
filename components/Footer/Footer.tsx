import React from 'react';
import Link from 'next/link';
import LinkedinIcon from '../../public/images/footer/LinkedinIcon';
import GithubIcon from '../../public/images/footer/GithubIcon';
import './Footer.css';

const Footer = () => {
  return (
    <section
      id="footer-section"
      className="pb-20 md:pb-0 pt-0 section-footer bg-[var(--primary-color)]">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="footer-left pb-10 pt-20  md:py-20">
              <div className="c-logo-wrapper">funkaar</div>
              <div className="socials-footer flex gap-5  items-center mt-8">
                <a
                  href="https://www.linkedin.com/in/hamza7malik/"
                  target="_blank">
                  <div className="social-icon">
                    <LinkedinIcon />
                  </div>
                </a>
                <a href="https://github.com/hamza7malik/" target="_blank">
                  <div className="social-icon">
                    <GithubIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="footer-right py-0 md:py-20 pl-0 md:pl-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[inherit]">
                <div className="footer-col">
                  <h3 className="pb-3 text-white">Quick Links</h3>
                  <Link href="#about-section">
                    <p className="text-white">About</p>
                  </Link>
                  <Link href="#repositories-section">
                    <p className="text-white">Repositories</p>
                  </Link>
                </div>

                <div className="footer-col">
                  <h3 className="pb-3 text-white">Get In Touch</h3>

                  <Link href="mailto:crhamza7@gmail.com">
                    <p className="text-white">crhamza7@gmail.com</p>
                  </Link>
                  <Link href="tel:+971523125845">
                    <p className="text-white">+971 523125845</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";

import "./Footer.css";
import CTAPrimary from "../CTAPrimary/CTAPrimary";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="pb-20 md:pb-0 pt-0 section-footer">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="footer-left py-20">
              <img src="images/logos/logo-footer.png" alt="Tranquil Logo" />
              <h2 className="pt-6 pb-3 pr-10 sm:pr-0">
                Subscribe to our newsletter
              </h2>
              <input
                className="block mb-8 p-2 focus:outline-none 
               focus-visible:border-b-2
               border-b-2 border-b-[#e3dccc]"
                type="text"
                placeholder="Enter your email ID"
              />
              <CTAPrimary text="Subscribe" link="#" outlined />
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="footer-right py-0 md:py-20 pl-5 md:pl-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[inherit]">
                <div className="footer-col">
                  <h3 className="pb-3">Quick Links</h3>
                  <Link href="#">
                    <p>Who We Are</p>
                  </Link>
                  <Link href="#">
                    <p>Properties</p>
                  </Link>
                  <Link href="#">
                    <p>Become an Agent</p>
                  </Link>
                  <Link href="#">
                    <p>Blogs</p>
                  </Link>
                </div>
                <div className="footer-col">
                  <h3 className="pb-3">Information</h3>
                  <Link href="#">
                    <p>Privacy Policy</p>
                  </Link>
                  <Link href="#">
                    <p>Terms & Conditions</p>
                  </Link>
                </div>
                <div className="footer-col">
                  <h3 className="pb-3">Get In Touch</h3>
                  <Link href="#">
                    <p className="pr-32">
                      Address: 107, 108, First Floor, Building 8, Bay Square,
                      Business Bay
                    </p>
                  </Link>
                  <br />
                  <Link href="#">
                    <p>enquiry@tranquilinfra.com</p>
                  </Link>
                  <div className="socials-footer flex gap-5 pt-7 items-center">
                    <Link href="#">
                      <img
                        src="images/footer/facebook.png"
                        alt="tranquil-facebook"
                      />
                    </Link>
                    <Link href="#">
                      <img
                        src="images/footer/twitter.png"
                        alt="tranquil-twitter"
                      />
                    </Link>
                    <Link href="#">
                      <img
                        src="images/footer/instagram.png"
                        alt="tranquil-instagram"
                      />
                    </Link>
                    <Link href="#">
                      <img
                        src="images/footer/linkedin.png"
                        alt="tranquil-linkedin"
                      />
                    </Link>
                    <Link href="#">
                      <img
                        src="images/footer/youtube.png"
                        alt="tranquil-youtube"
                      />
                    </Link>
                    <Link href="#">
                      <img
                        src="images/footer/tiktok.png"
                        alt="tranquil-tiktok"
                      />
                    </Link>
                  </div>
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

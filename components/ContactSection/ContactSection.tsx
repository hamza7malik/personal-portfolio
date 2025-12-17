import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import ContactForm from '../ContactForm';

const ContactSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 px-7 py-14 ">
          <div className="w-[90%]">
            <h2 className="mb-4">Contact</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit eaque soluta ipsam dicta inventore itaque esse
              repellendus distinctio sunt quod veritatis exercitationem, sint,
              maxime ex. Corrupti eaque blanditiis eveniet minima!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

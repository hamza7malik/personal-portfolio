import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="bg-[var(--primary-color)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 px-7 py-14 ">
          <div className="w-[90%]">
            <h2 className="mb-4 text-white">Contact</h2>
            <p className="text-white">
              Want to discuss how we can work together? I'd love to hear from
              you! Fill out the form and I'll get back to you as soon as
              possible. Let's create something amazing together.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

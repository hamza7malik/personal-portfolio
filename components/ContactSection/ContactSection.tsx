import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="bg-[var(--primary-color)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 px-7 py-14 ">
          <div className="w-[90%]">
            <h2 className="mb-4 text-white">Let's Build Something Great</h2>
            <p className="text-white">
              Looking for a Senior Full Stack Engineer to bring your vision to
              life? Whether it's a production-grade mobile app, scalable web
              platform, or AI-powered solution—I'm here to help. Fill out the
              form and I'll get back to you promptly. Let's discuss your
              project!
            </p>
            <p className="text-white mt-4">
              <strong>Email:</strong> crhamza7@gmail.com
              <br />
              <strong>Phone:</strong> +971 523 125 845
              <br />
              <strong>Location:</strong> Dubai, UAE 🇦🇪
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from 'react';
import './ContactForm.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';

const ContactForm = () => {
  const handleSendMessage = () => {
    console.log('send message!');
  };

  return (
    <div className="px-7 py-14 bg-[var(--primary-color)]">
      <div className="w-full">
        <h2 className="text-white mb-10">Message</h2>
        <form action="mx-auto">
          <div className="mb-8">
            <p className="text-white">Name</p>
            <input
              className="w-full rounded-sm mt-1 h-8"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="mb-8">
            <p className="text-white">E-mail</p>
            <input
              className="w-full rounded-sm mt-1 h-8"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="mb-8">
            <p className="text-white">Message</p>
            <textarea
              className="w-full rounded-sm mt-1"
              rows={5}
              name="message"
              id="message"></textarea>
          </div>
          <div onClick={handleSendMessage}>
            <CTAPrimary text="send" full />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

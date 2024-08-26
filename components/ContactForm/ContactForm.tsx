import React from 'react';
import './ContactForm.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';

const ContactForm = () => {
  const handleSendMessage = () => {
    console.log('send message!');
  };

  return (
    <div>
      <h2>Message</h2>
      <form action="">
        <div>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <textarea name="message" id="message"></textarea>
        </div>
        <div onClick={handleSendMessage}>
          <CTAPrimary text="send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

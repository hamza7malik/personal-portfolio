import React, {useEffect, useState} from 'react';
import './ContactForm.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';

const ContactForm = () => {
  const handleSendMessage = () => {
    console.log('send message!');
    console.log(formValues);
    validateForm();
  };

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (val: string, name: string) => {
    setFormValues(prev => ({...prev, [name]: val}));
  };

  //test form values
  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const [formError, setFormError] = useState('');
  const validateForm = () => {
    if (
      formValues.email === '' ||
      formValues.name === '' ||
      formValues.message === ''
    ) {
      setFormError('Please fill all form fields');
    } else {
      setFormError('');
    }
  };

  return (
    <div className="px-7 py-14 bg-[var(--primary-color)]">
      <div className="w-full">
        <h2 className="text-white mb-10">Message</h2>
        <form>
          <div className="mb-8">
            <p className="text-white">Name</p>
            <input
              className="w-full rounded-sm mt-1 h-8 p-2"
              placeholder="Your name"
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              onChange={e => handleInputChange(e.target.value, e.target.name)}
            />
          </div>
          <div className="mb-8">
            <p className="text-white">E-mail</p>
            <input
              className="w-full rounded-sm mt-1 h-8 p-2"
              placeholder="Your email"
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={e => handleInputChange(e.target.value, e.target.name)}
            />
          </div>
          <div className="mb-8">
            <p className="text-white">Message</p>
            <textarea
              placeholder="Your Message"
              className="w-full rounded-sm mt-1 p-2"
              rows={5}
              name="message"
              id="message"
              value={formValues.message}
              onChange={e =>
                handleInputChange(e.target.value, e.target.name)
              }></textarea>
          </div>
          <div>
            <p className="text-orange-400">{formError}</p>
          </div>
        </form>
        <div onClick={handleSendMessage}>
          <CTAPrimary text="send" full />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

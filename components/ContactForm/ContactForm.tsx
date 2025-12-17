import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import CTAPrimary from '../CTAPrimary/CTAPrimary';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsLoading(true);
    setStatus('idle');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      )
      .then(
        () => {
          setStatus('success');
          setIsLoading(false);
          formRef.current?.reset();
        },
        error => {
          console.error('EmailJS error:', error);
          setStatus('error');
          setIsLoading(false);
        },
      );
  };

  return (
    <div className="px-7 py-14 bg-[var(--primary-light)]">
      <div className="w-full">
        <h2 className="text-white mb-10">Message</h2>
        <form ref={formRef} onSubmit={handleSendMessage}>
          <div className="mb-8">
            <p className="text-white">Name</p>
            <input
              className="w-full rounded-sm mt-1 h-8 px-2"
              type="text"
              name="from_name"
              id="name"
              required
            />
          </div>
          <div className="mb-8">
            <p className="text-white">E-mail</p>
            <input
              className="w-full rounded-sm mt-1 h-8 px-2"
              type="email"
              name="from_email"
              id="email"
              required
            />
          </div>
          <div className="mb-8">
            <p className="text-white">Message</p>
            <textarea
              className="w-full rounded-sm mt-1 px-2 py-1"
              rows={5}
              name="message"
              id="message"
              required></textarea>
          </div>

          {status === 'success' && (
            <p className="text-green-400 mb-4">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 mb-4">
              Failed to send message. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`primary-cta w-full block text-center ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

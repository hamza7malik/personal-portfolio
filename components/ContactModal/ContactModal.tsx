import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-content" onClick={e => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose}>
          ×
        </button>
        <div className="contact-modal-inner">
          <div className="contact-modal-info">
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
            <div className="mt-6">
              <p className="text-white mb-3">Have any quick questions?</p>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openChat'));
                  onClose();
                }}
                className="px-6 py-2 bg-[var(--accent-color)] text-white rounded-[var(--border-radius)] font-semibold hover:scale-105 transition-transform duration-300">
                Chat with Me
              </button>
            </div>
          </div>
          <div className="contact-modal-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    setStatus('Success! Your message has been sent.');
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" required placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" className="counter">Send Message</button>
      </form>
      {status && <p className="success-msg">{status}</p>}
    </section>
  );
};

export default ContactForm;
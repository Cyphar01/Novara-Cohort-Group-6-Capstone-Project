import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

 
  const [status, setStatus] = useState({ loading: false, success: false });

  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false });

    // Simulating an API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setStatus({ loading: false, success: true });
      // Note: We don't clear the name immediately so the success message can use it
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus({ loading: false, success: false });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="form-container">
        <h2>Contact Us</h2>
        
        {status.success ? (
          <div className="success-box">
            <p>Thank you, <strong>{formData.name}</strong>! Your message has been sent to the stars.</p>
            <button onClick={handleReset} className="submit-btn">
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            {/* THIS ROW IS THE KEY TO THE FORMAL LAYOUT */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Name" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="your@email.com" 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="How can we help?"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={status.loading}>
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
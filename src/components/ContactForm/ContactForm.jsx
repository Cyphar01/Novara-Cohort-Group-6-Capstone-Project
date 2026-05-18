import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  // 1. Logic: State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. Logic: State for submission status
  const [status, setStatus] = useState({ loading: false, success: false });

  // 3. Logic: Update state on every keystroke
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  // 4. Logic: Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false });

    // Simulating an API call (e.g., to a backend or service like Formspree)
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setStatus({ loading: false, success: true });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      
      {status.success ? (
        <div className="success-box">
          <p>Thank you, {formData.name}! Your message has been sent.</p>
          <button onClick={() => setStatus({ ...status, success: false })} className="counter">
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
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
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              placeholder="How can we help?"
            ></textarea>
          </div>
          
          <button type="submit" className="counter" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
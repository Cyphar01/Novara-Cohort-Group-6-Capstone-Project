import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="ticks"></div> 
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Timeless Spaces</h3>
          <p>Geography & Space Exploration Data</p>
        </div>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#planets">Planets</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Abdulrahman Olodeankirun. Phoenix Cohort.</p>
      </div>
    </footer>
  );
};

export default Footer;

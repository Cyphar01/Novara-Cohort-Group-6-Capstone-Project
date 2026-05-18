import React from 'react';
import './Footer.css';

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Timeless Spaces</h3>
        <p>Geography & Space Exploration Data</p>
        
        {/* The links were here - they are now removed */}

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Abdulrahman Olodeankirun. Phoenix Cohort.</p>
        </div>
      </div>
   
    </footer>
  );
};

export default Footer;

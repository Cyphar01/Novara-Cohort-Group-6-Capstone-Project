import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        {/* You can replace this with an <img> if you have a logo file */}
        <span className="logo-text">TIMELESS SPACES</span>
      </div>
      
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#planets">Data</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      {/* Optional: Dark mode indicator or CTA button */}
      <div className="header-action">
        <a href="#planets" className="counter">Explore</a>
      </div>
    </header>
  );
};

export default Header;
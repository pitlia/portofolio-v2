import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">F</div>
        <span className="logo-text">Aulia</span>
      </div>
      
      <nav className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#portfolio" className="nav-link">Portfolio</a>
        <a href="#testimonial" className="nav-link">Testimonial</a>
      </nav>
      
      <div className="header-actions">
        <button className="btn btn-outline download-cv">Download CV</button>
      </div>
    </header>
  );
};

export default Header;

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
        <a href="#about" className="nav-link">Tentang</a>
        <a href="#skills" className="nav-link">Keahlian</a>
        <a href="#portfolio" className="nav-link">Portofolio</a>
        <a href="#testimonial" className="nav-link">Testimoni</a>
      </nav>
      
      <div className="header-actions">
        <button className="btn btn-outline download-cv">Unduh CV</button>
      </div>
    </header>
  );
};

export default Header;

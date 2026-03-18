import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="welcome-badge">Welcome</div>
        <h1 className="hero-title">
          I have <span className="highlight">Creative</span> <br />
          <span className="highlight">Design</span> Experience
        </h1>
        <p className="hero-description">
          I'm Fitri Aulia, a creative Product Designer. I've been helping businesses 
          to solve their problems with my design for 2 years.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Contact Me</button>
          <a href="#portfolio" className="portfolio-link">
            View Portfolio ↗
          </a>
        </div>
      </div>
      
      <div className="hero-image-wrapper">
        <div className="image-bg-box"></div>
        <div className="image-border-box"></div>
        {/* Placeholder for the person image */}
        <div className="person-placeholder"></div>
      </div>
      
      <div className="social-sidebar">
        <span className="social-text">Follow me on</span>
        <div className="social-line"></div>
        <a href="#" className="social-icon" aria-label="Facebook">f</a>
        <a href="#" className="social-icon" aria-label="Instagram">ig</a>
        <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
      </div>
      
      {/* Background decoration dots */}
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div>
      <div className="dot dot-4"></div>
      <div className="dot dot-5"></div>
      <div className="dot dot-6"></div>
      <div className="dot dot-7"></div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="welcome-badge">Selamat Datang</div>
        <h1 className="hero-title">
          Saya Memiliki <br />
          Pengalaman <span className="highlight">Desain Kreatif</span>
        </h1>
        <p className="hero-description">
          Saya Fitri Aulia, seorang Desainer Produk yang kreatif. Saya telah membantu berbagai bisnis memecahkan masalah mereka melalui desain saya selama 2 tahun.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Hubungi Saya</button>
          <a href="#portfolio" className="portfolio-link">
            Lihat Portofolio ↗
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
        <span className="social-text">Ikuti saya di</span>
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

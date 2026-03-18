import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <span className="section-subtitle">Portofolio</span>
        <h2 className="section-title">
          Karya Kreatif Saya <br />
          <span className="highlight-text">Proyek</span> Terbaru
        </h2>
        <p className="portfolio-description">
          Saya telah memilih dan menyebutkan di sini beberapa proyek terbaru saya untuk dibagikan dengan Anda.
        </p>
        <button className="btn btn-primary">Tampilkan Lebih Banyak</button>
      </div>

      <div className="portfolio-gallery">
        {/* Mockup 1: Mobile App */}
        <div className="mockup mockup-mobile">
          <div className="mockup-header-blue"></div>
          <div className="mockup-body">
            <div className="skeleton-line w-half"></div>
            <div className="skeleton-box"></div>
            <div className="skeleton-line w-full"></div>
            <div className="skeleton-line w-full"></div>
            <div className="skeleton-avatar-row">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-avatar"></div>
            </div>
            <div className="skeleton-button"></div>
          </div>
        </div>

        {/* Mockup 2: Web Dashboard */}
        <div className="mockup mockup-web-1">
          <div className="mockup-header-dark"></div>
          <div className="mockup-body dark-bg">
             <div className="skeleton-banner orange"></div>
             <div className="skeleton-grid">
               <div className="skeleton-card"></div>
               <div className="skeleton-card"></div>
             </div>
          </div>
        </div>

        {/* Mockup 3: Web Landing Page */}
        <div className="mockup mockup-web-2">
          <div className="mockup-header-light">
             <div className="skeleton-nav"></div>
          </div>
          <div className="mockup-body">
             <div className="skeleton-hero-img"></div>
             <div className="skeleton-text-block"></div>
          </div>
        </div>

        {/* Background dots for portfolio */}
        <div className="dot p-dot-1"></div>
        <div className="dot p-dot-2"></div>
      </div>
    </section>
  );
};

export default Portfolio;

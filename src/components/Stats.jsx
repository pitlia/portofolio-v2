import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stat-item">
        <h2 className="stat-number">80+</h2>
        <p className="stat-text">Klien puas</p>
      </div>
      
      <div className="stat-divider"></div>
      
      <div className="stat-item">
        <h2 className="stat-number">200+</h2>
        <p className="stat-text">Proyek selesai</p>
      </div>
      
      <div className="stat-divider"></div>
      
      <div className="stat-item">
        <h2 className="stat-number">99+</h2>
        <p className="stat-text">Ulasan diberikan</p>
      </div>
      
      {/* Background decoration dots */}
      <div className="stats-dot sd-1"></div>
      <div className="stats-dot sd-2"></div>
    </section>
  );
};

export default Stats;

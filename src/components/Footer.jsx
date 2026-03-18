import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024. Hak Cipta Dilindungi</p>
        <p className="footer-text">Didesain oleh Fitri Aulia</p>
        <div className="footer-socials">
          <a href="#" className="footer-icon">f</a>
          <a href="#" className="footer-icon">t</a>
          <a href="#" className="footer-icon">in</a>
          <a href="#" className="footer-icon">ig</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

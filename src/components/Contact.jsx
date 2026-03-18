import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span className="section-subtitle">Kontak</span>
        <h2 className="section-title">
          Mari Diskusikan <span className="highlight-text">Proyek</span> Anda
        </h2>
        <p className="contact-description">
          Mari buat sesuatu yang baru, berbeda dan lebih bermakna atau buat sesuatu yang lebih visual dan konseptual.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">
              <span className="icon">📞</span>
            </div>
            <div className="info-content">
              <h4>Hubungi saya</h4>
              <p>+62 877-3909-7660</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <span className="icon">✉️</span>
            </div>
            <div className="info-content">
              <h4>Email</h4>
              <p>fi4020308@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <span className="icon">📍</span>
            </div>
            <div className="info-content">
              <h4>Alamat</h4>
              <p>Pamekasan, Jawa Timur, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Nama lengkap" className="form-input" />
              <input type="email" placeholder="Email Anda" className="form-input" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Nomor telepon" className="form-input" />
              <input type="text" placeholder="Anggaran" className="form-input" />
            </div>
            <textarea placeholder="Pesan" className="form-input form-textarea"></textarea>
            <div className="form-submit">
              <button type="submit" className="btn btn-primary">Kirim Pesan</button>
            </div>
          </form>
          
          {/* form decorative dot */}
          <div className="cdot c-dot-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span className="section-subtitle">Contact</span>
        <h2 className="section-title">
          Let's Discuss Your <span className="highlight-text">Project</span>
        </h2>
        <p className="contact-description">
          Let's make something new, different and more meaningful or make thing more visual or conceptual.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">
              <span className="icon">📞</span>
            </div>
            <div className="info-content">
              <h4>Call me</h4>
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
              <h4>Address</h4>
              <p>Pamekasan, Jawa Timur, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Full name" className="form-input" />
              <input type="email" placeholder="Your email" className="form-input" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone number" className="form-input" />
              <input type="text" placeholder="Budget" className="form-input" />
            </div>
            <textarea placeholder="Message" className="form-input form-textarea"></textarea>
            <div className="form-submit">
              <button type="submit" className="btn btn-primary">Submit Message</button>
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

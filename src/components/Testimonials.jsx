import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "Kami juga akan memfasilitasi pemasaran bisnis produk-produk ini dengan ahli SEO kami sehingga menjadi situs web yang siap digunakan dan membantu menjual produk dari perusahaan.",
      name: "Amir Uddin",
      role: "Desainer UX",
    },
    {
      id: 2,
      text: "Kami juga akan memfasilitasi pemasaran bisnis produk-produk ini dengan ahli SEO kami sehingga menjadi situs web yang siap digunakan dan membantu menjual produk dari perusahaan.",
      name: "Salim Ahmed",
      role: "Desainer UI",
    },
    {
      id: 3,
      text: "Kami juga akan memfasilitasi pemasaran bisnis produk-produk ini dengan ahli SEO kami sehingga menjadi situs web yang siap digunakan dan membantu menjual produk dari perusahaan.",
      name: "Guy Hawkins",
      role: "Desainer UI",
    }
  ];

  return (
    <section className="testimonials" id="testimonial">
      <div className="testimonials-header">
        <span className="section-subtitle">Ulasan</span>
        <h2 className="section-title">
          Apa Kata Pelanggan <br />
          <span className="highlight-text">Tentang Kami</span>
        </h2>
      </div>

      <div className="testimonials-grid">
        {reviews.map((review) => (
          <div className="testimonial-card" key={review.id}>
            <div className="stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="review-text">{review.text}</p>
            <div className="reviewer">
              <div className="reviewer-avatar"></div>
              <div className="reviewer-info">
                <h4>{review.name}</h4>
                <p>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Background decoration dots */}
      <div className="tdot t-dot-1"></div>
      <div className="tdot t-dot-2"></div>
    </section>
  );
};

export default Testimonials;

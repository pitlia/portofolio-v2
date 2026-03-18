import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website and help sell product from company.",
      name: "Amir Uddin",
      role: "UX Designer",
    },
    {
      id: 2,
      text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website and help sell product from company.",
      name: "Salim Ahmed",
      role: "UI Designer",
    },
    {
      id: 3,
      text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website and help sell product from company.",
      name: "Guy Hawkins",
      role: "UI Designer",
    }
  ];

  return (
    <section className="testimonials" id="testimonial">
      <div className="testimonials-header">
        <span className="section-subtitle">Reviews</span>
        <h2 className="section-title">
          Our Customer Say <br />
          Something <span className="highlight-text">About Us</span>
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

import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <span className="section-subtitle">My Skills</span>
        <h2 className="section-title">
          Why Hire Me For Your <br />
          Next <span className="highlight-text">Project?</span>
        </h2>
        <p className="skills-description">
          I'm specialist in UI/UX Design. My passion is designing & solving
          problems through user experience and research.
        </p>
        <button className="btn btn-primary">Hire Me</button>
      </div>

      <div className="skills-cards">
        <div className="skill-card card-visual">
          <div className="icon-wrapper">
            <span className="icon">💎</span>
          </div>
          <h3 className="card-title">Visual Design</h3>
          <p className="card-desc">
            Create user interface design with unique & modern ideas
          </p>
        </div>

        <div className="skill-card card-research">
          <div className="icon-wrapper">
            <span className="icon">📄</span>
          </div>
          <h3 className="card-title">UX Research</h3>
          <p className="card-desc">
            Create digital user products with updated ideas
          </p>
        </div>

        <div className="skill-card card-prototype">
            <div className="icon-wrapper">
            <span className="icon">📈</span>
          </div>
          <h3 className="card-title">Design Prototype</h3>
          <p className="card-desc">
            Create advance design prototype with figma apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

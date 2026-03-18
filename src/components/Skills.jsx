import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <span className="section-subtitle">Keahlian Saya</span>
        <h2 className="section-title">
          Mengapa Mempekerjakan Saya Untuk <br />
          <span className="highlight-text">Proyek</span> Anda Selanjutnya?
        </h2>
        <p className="skills-description">
          Saya spesialis di Desain UI/UX. Gairah saya adalah merancang & memecahkan
          masalah melalui penelitian dan pengalaman pengguna.
        </p>
        <button className="btn btn-primary">Pekerjakan Saya</button>
      </div>

      <div className="skills-cards">
        <div className="skill-card card-visual">
          <div className="icon-wrapper">
            <span className="icon">💎</span>
          </div>
          <h3 className="card-title">Desain Visual</h3>
          <p className="card-desc">
            Membuat desain antarmuka pengguna dengan ide unik & modern
          </p>
        </div>

        <div className="skill-card card-research">
          <div className="icon-wrapper">
            <span className="icon">📄</span>
          </div>
          <h3 className="card-title">Riset UX</h3>
          <p className="card-desc">
            Menciptakan produk digital pengguna dengan ide-ide terbaru
          </p>
        </div>

        <div className="skill-card card-prototype">
            <div className="icon-wrapper">
            <span className="icon">📈</span>
          </div>
          <h3 className="card-title">Prototipe Desain</h3>
          <p className="card-desc">
            Membuat prototipe desain tingkat lanjut dengan aplikasi figma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

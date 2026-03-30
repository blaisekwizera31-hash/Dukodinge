import React from 'react';

const AboutSection: React.FC = () => (
  <section className="section about" id="about">
    <h2>&lt;About us&gt;</h2>
    <div className="about-grid">
      <article>
        <h3>Who are we?</h3>
        <p>We are a creative tech academy that teaches frontend, backend, design, and cybersecurity skills through project-based learning and community support.</p>
      </article>
      <article>
        <h3>What we do.</h3>
        <p>We assist learners with mentoring, real-world challenges, and a modern curriculum with fast-paced progress.</p>
      </article>
      <article>
        <h3>Payments!</h3>
        <p>Flexible plans and transparent pricing. Access all courses for free with scholarship opportunities.</p>
      </article>
    </div>
  </section>
);

export default AboutSection;

import React from 'react';

const HeroSection: React.FC = () => (
  <section className="section hero" id="home">
    <nav className="top-nav">
      <div className="brand">Dukodinge</div>
      <div className="menu">
        <a href="#about">About us</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Reach out</a>
        <a href="#start" className="cta">Get Started</a>
      </div>
    </nav>
    <div className="hero-content">
      <h1>Empowering the next generation of digital creators.</h1>
      <p>Dukodinge is a premier web-based platform offering free, world-class education in programming and robotics. Master the language of tomorrow and start building the future, today.</p>
      <div className="hero-actions">
        <button>Cook the codes!</button>
        <button>Stay in the loop</button>
      </div>
    </div>
  </section>
);

export default HeroSection;

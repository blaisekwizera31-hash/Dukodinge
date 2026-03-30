import React from 'react';

const HeroSection: React.FC = () => (
  <section className="section hero" id="home">
    <div className="hero-shapes">
      <span className="hero-circle top-right" />
      <span className="hero-circle bottom-left" />
      <span className="hero-circle top-left" />
    </div>

    <nav className="top-nav hero-nav">
      <a href="#about">&lt;About us&gt;</a>
      <a href="#courses">&lt;Courses&gt;</a>
      <a href="#contact">&lt;Reach out&gt;</a>
      <a href="#start" className="cta">&lt;Get Started&gt;</a>
    </nav>

    <div className="hero-inner">
      <h1 className="hero-logo">Duk&lt;/&gt;dinge</h1>
      <div className="hero-codepanel">
        <div className="hero-code-line"><span className="line-number">50</span>{'{'}</div>
        <div className="hero-code-line"><span className="line-number">51</span>"headline": "Empowering the next generation of digital creators.",</div>
        <div className="hero-code-line"><span className="line-number">52</span>"description": "Dukodinge is a premier web-based platform offering</div>
        <div className="hero-code-line"><span className="line-number">53</span>free, world-class education in programming and</div>
        <div className="hero-code-line"><span className="line-number">54</span>robotics.",</div>
        <div className="hero-code-line"><span className="line-number">55</span>"mission": "Master the language of tomorrow and start building the</div>
        <div className="hero-code-line"><span className="line-number">56</span>future, today."</div>
        <div className="hero-code-line"><span className="line-number">57</span>{'}'}</div>
      </div>

      <div className="hero-actions">
        <button>Cook the codes!</button>
        <button>Stay in the loop</button>
      </div>
    </div>
  </section>
);

export default HeroSection;

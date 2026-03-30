import React from 'react';

const FooterSection: React.FC = () => (
  <footer className="section footer" id="start">
    <div className="footer-grid">
      <div>
        <h4>Quick links</h4>
        <a href="#about">About us</a>
        <a href="#start">Get started</a>
      </div>
      <div>
        <h4>Courses</h4>
        <a href="#">Frontend</a>
        <a href="#">Backend</a>
        <a href="#">Robotics</a>
        <a href="#">Cybersecurity</a>
      </div>
      <div>
        <h4>Legals</h4>
        <a href="#">Privacy policy</a>
        <a href="#">Terms of service</a>
      </div>
      <div>
        <h4>Social</h4>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">X</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
    <p>Build 2026 // Dukodinge</p>
  </footer>
);

export default FooterSection;

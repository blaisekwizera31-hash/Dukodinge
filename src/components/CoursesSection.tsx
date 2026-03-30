import React from 'react';

const CoursesSection: React.FC = () => (
  <section className="section courses" id="courses">
    <h2>&lt;Available courses&gt;</h2>
    <div className="courses-main">
      <div className="course-categories">
        <button>Frontend skills</button>
        <button>Backend skills</button>
        <button>Design skills</button>
        <button>Cybersecurity skills</button>
      </div>
      <div className="course-tiles">
        <div className="tile">React & TypeScript</div>
        <div className="tile">Node.js & Express</div>
        <div className="tile">UI/UX Design</div>
        <div className="tile">Ethical Hacking</div>
      </div>
    </div>
    <a href="#start" className="start-btn">Get started</a>
  </section>
);

export default CoursesSection;

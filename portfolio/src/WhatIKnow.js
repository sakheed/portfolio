import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

function WhatIKnow() {
  const [index, setIndex] = useState(0);
  const totalSlides = 2; // Number of slides (Technologies and Courses)

  const technologies = [
    'Python',
    'Javascript',
    'SQL',
    'Swift',
    'Java',
    'C/C++',
    'React',
    'Typescript',
    'Oracle Database',
    'R',
    'HTML',
    'CSS',
    'Docker',
    'Kubernetes',
    'Sharepoint'
  ];

  const courses = [
    'Machine Learning',
    'Computer Vision (Graduate Level)',
    'Artificial Intelligence (Graduate Level)',
    'Database Systems',
    'Automata Theory',
    'Linear Algebra',
    'Intro to Algorithms',
    'Intro to Software Engineering',
    'Data Structures',
    'Discrete Math',
    'Data Mining',
    'Corporate Finance I & II',
    'Investments',
    'Intro to FinTech'
  ];

  const handleChangeIndex = (idx) => {
    setIndex(idx);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? totalSlides - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex((index + 1) % totalSlides);
  };

  return (
    <section id="what-i-know" className="what-i-know-section">
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        {/* Technologies Slide */}
        <div className="slide">
          <h3>Technologies</h3>
          <div className="card-grid">
            {technologies.map((tech, i) => (
              <div key={i} className="card">
                {tech}
              </div>
            ))}
          </div>
        </div>
        {/* Courses Slide */}
        <div className="slide">
          <h3>Courses</h3>
          <div className="card-grid">
            {courses.map((course, i) => (
              <div key={i} className="card">
                {course}
              </div>
            ))}
          </div>
        </div>
      </SwipeableViews>
      {/* Arrow Navigation with Active Highlight */}
      <div className="arrow-container">
        <button className={`arrow left ${index === 0 ? 'active' : ''}`} onClick={handlePrev}>◀</button>
        <button className={`arrow right ${index === 1 ? 'active' : ''}`} onClick={handleNext}>▶</button>
      </div>
    </section>
  );
}

export default WhatIKnow;

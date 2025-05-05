// src/Resume.js
import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">My Resume</h2>

      <div className="resume-viewer">
        <iframe
          src="/resume.pdf"
          title="My Resume"
          width="100%"
          height="800px"
          frameBorder="0"
        >
          Your browser does not support PDFs. 
          <a href="/resume.pdf">Click here to download.</a>
        </iframe>
      </div>

      <div className="resume-download">
        <a href="/resume.pdf" download className="section-button">
          Download Resume
        </a>
      </div>
    </section>
  );
}

import React, {useEffect} from 'react';
import './App.css';
import WhatIKnow from './WhatIKnow';
import Projects from './Projects'; 

import headshot from './images/photo.jpeg';




function Header() {
  return (
    <header className="header">
      {/* Left Side: Name and Title */}
      <div className="header-left">
        <div className="logo-box"></div>
        <h1 className="name-title">
          Sakhee Desai <span>/ software engineer</span>
        </h1>
      </div>

      {/* Right Side: Nav Links */}
      <nav>
        <ul className="nav-links">
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#resume">RESUME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          {/* <li><a href="#contact">CONTACT</a></li> */}
        </ul>
      </nav>
    </header>
  );
}


function About() {
  return (
    <section id="about" className="about-section">
      <div className="profile-container">
        <img 
          src={headshot}
          alt="Your Photo" 
          className="profile-photo"
        />
        <h1>Sakhee Desai</h1>
        <div className="contact-icons">
          <a href="mailto:sakheed@udel.edu" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e0e0e0" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V6c0-1.11-.89-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sakheedesai" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e0e0e0" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.78-1.75-1.7s.78-1.7 1.75-1.7 1.75.78 1.75 1.7-.78 1.7-1.75 1.7zm13.5 10.3h-3v-4.6c0-1.1-.9-2-2-2s-2 .9-2 2v4.6h-3v-9h3v1.3c.67-1.05 2.15-1.8 3.5-1.8 2.48 0 4.5 2.02 4.5 4.5v4z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="about-text">
      <h1>{"</About Me>"}</h1>
      <div className="about-buttons">
      <a
  href={process.env.PUBLIC_URL + '/resume.pdf'}
  className="section-button"
  target="_blank"
  rel="noopener noreferrer"
>
  View Resume
</a>
        <a href="#projects" className="section-button">See Projects</a>
      </div>

      <p>
        I am a highly motivated and analytical individual with a strong background in <span className="highlight">computer science</span>, a passion for <span className="highlight">finance</span>, and <span className="highlight">eagerness to learn</span> from top professionals in industry!
      </p>
      <p>
        I recently completed my undergraduate degree at the University of Delaware, where I double majored in <span className="highlight">computer science</span> and <span className="highlight">finance</span>, with a minor in <span className="highlight">entrepreneurship</span> and concentration in <span className="highlight">artificial intelligence</span>. I am a firm believer of traversing traditional walls in academia and building a repertoire that synthesizes multiple fields.
      </p>
      <p>
        During my time at UD, I have taken on challenging projects and coursework that require me to think critically and come up with innovative solutions. My academic coursework provides me with a strong foundation in programming languages including Python, Swift, Java, C++, R, SQL, Javascript.
      </p>
      <p>
        In my internship experiences at JPMC, AmeriHealth Caritas, and the Siegfried Group, I have thrived in a <span className="highlight">fast-paced collaborative work environment</span>. Going beyond producing deliverables, presenting at team meetings, and learning the inner workings of fintech, I have taken extra steps to <span className="highlight">automate processes</span> which used to be manual and brainstorm new technological capabilities to benefit internal and external stakeholders.
      </p>
      <p>
        Finally, as a student body president of my high school, member of Project Stree, a nonprofit organization that empowers underprivileged females in India, and Delaware Youth Environmental Summit, a student-led conference to educate and take action against climate change, I am always looking for ways to use my voice for advocacy.
      </p>
      <p>
        My experiences have taught me how to be an effective communicator, quick learner, and an able leader. I look forward to a future in <span className="highlight">technical product management</span> where I can synthesize my skills and experiences to <span className="highlight">bridge the gap between programming and business teams</span>!
      </p>

      </div>
    </section>
  );
}

function Resume() {
  const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <div className="resume-container">
        <iframe
          src={resumeUrl}
          title="Resume"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
        />
      </div>
      <div className="resume-buttons" style={{ marginTop: '1rem' }}>
        <a
          href={resumeUrl}
          download
          className="section-button"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sakhee Desai. All rights reserved.</p>
    </footer>
  );
}

function App() {
  useEffect(() => {
    // Disable automatic scroll restoration
    window.history.scrollRestoration = 'manual';
    // Scroll to top immediately
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <WhatIKnow />
        <Projects /> 
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;

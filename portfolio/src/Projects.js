import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

function Projects() {
  // List of projects with updated fields.
  const projectsArr = [
    {
      title: "SignalQ",
      photo: "projects/signalq.jpg",
      date: "September 2024 - Present",
      description:
        "Collaborated in an Agile Team to build an iOS app in Swift that records low-latency audio, employs machine learning algorithms to classify gunshots, and triggers storage of associated geographic data in Objectbox. Still in progress so links to come. ",
      websiteLink: "#", // Placeholder, update as needed.
      codeLink: "#", // Placeholder, update as needed.
    },
    {
      title: "MoviePedia",
      photo: "projects/moviepedia.png",
      date: "September 2024 - Present",
      description:
        "Collaborated in Agile team to create a website for users to drag and drop movies into custom lists and admin to add new movies.",
      websiteLink: "https://amansjot.github.io/Team5-MoviePedia/",
      codeLink: "https://github.com/amansjot/Team5-MoviePedia",
    },
    {
      title: "MathBridge",
      date: "March 2024",
      description:
        "Created a React WebApp with an embedded Python compiler using Typescript, HTML, CSS & Chakra to strengthen K-12 students’ performance in mathematical reasoning.",
      websiteLink: "#",
      codeLink: "#",
    },
    {
      title: "HAKSafety",
      photo: "projects/haksafety.png",
      date: "April 2023",
      description:
        "Worked in an Agile team to develop and deploy an online panic button using TypeScript, React, HTML, CSS, & Chakra. Won first place for M&T Bank’s Hack, out of 50 projects.",
      websiteLink: "https://amansjot.github.io/HAKSafety/",
      codeLink: "https://github.com/amansjot/HAKSafety",
    }
  ];

  const total = projectsArr.length;
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (idx) => {
    setIndex(idx);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        {projectsArr.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-left">
              <div className="project-image">
                <img
                  src={project.photo ? project.photo : "placeholder.jpg"}
                  alt="Project screenshot"
                  className="project-screenshot"
                />
              </div>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <div className="project-right">
              <div className="project-buttons">
                <a
                  href={project.websiteLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Link to Website
                </a>
                <a
                  href={project.codeLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Link to Code
                </a>
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </SwipeableViews>
      {/* Pagination dots for navigation */}
      <div className="pagination">
        {projectsArr.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${index === dotIndex ? 'active' : ''}`}
            onClick={() => setIndex(dotIndex)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import haksafety from './images/projects/haksafety.png';
import sudokuImg from './images/projects/sudoku.png';
import moviepediaImg from './images/projects/moviepedia.png';
import signalqImg from './images/projects/signalq.PNG';

function Projects() {
  // List of projects with updated fields.
  const projectsArr = [
    {
      title: "SignalQ",
      photo: signalqImg,
      date: "September 2024 - Present",
      description:
        "Collaborated in an Agile Team to build an iOS app in Swift that records low-latency audio, employs machine learning algorithms to classify gunshots, triggers storage of associated geographic data in Realm database, and facilitates upload to remote server via GRPC.",
      codeLink: "https://github.com/sakheed/capstone-ios-app",
    },
    {
      title: "MoviePedia",
      photo: moviepediaImg,
      date: "December 2023",
      description:
        "Collaborated in Agile team to create a website for users to drag and drop movies into custom lists and admin to add new movies.",
      websiteLink: "https://amansjot.github.io/Team5-MoviePedia/",
      codeLink: "https://github.com/amansjot/Team5-MoviePedia",
    },
    {
      title: "Sudoku",
      photo: sudokuImg,
      date: "March 2024",
      description:
        "Created an AI algorithm to solve a sudoku puzzle.",
      codeLink: "https://github.com/sakheed/sudoku",
    },
    {
      title: "HAKSafety",
      photo: haksafety,
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
                  src={project.photo}
                  alt={`${project.title} screenshot`}
                  className="project-screenshot"
                />
              </div>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <div className="project-right">
              <div className="project-buttons">
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    Link to Website
                  </a>
                )}
                <a
                  href={project.codeLink}
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

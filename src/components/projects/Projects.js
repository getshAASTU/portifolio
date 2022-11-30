import React, { useState } from "react";
import { projectsList } from "../../consts/projectsData";
import { GrProjects, GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./projects.css";

const Projects = (props) => {
  const [index, setIndex] = useState(0);
  const { name, desc, image } = projectsList[index];
  const checkNumber = (number) => {
    if (number > projectsList.length - 1) {
      return 0;
    } else if (number < 0) {
      return projectsList.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <div id="projects" className="projects-container">
      <div className="projects">
        <div className="project-title">
          <GrProjects
            style={{ color: "red" }}
            id="service-titleIcon"
            className="serviceMain-icon"
          />
          <h3>Projects</h3>
        </div>
        <div className="projectContent">
          <div className="projects-list">
            <div>
              <img src={image} alt={name} className="projectImg" />
            </div>
            <h5 style={{ color: "black" }}>{name}</h5>
            <p>{desc}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => prevPerson()}
          className="prev-btn project-btn"
        >
          <GrFormPrevious />
        </button>
        <button
          type="button"
          onClick={() => nextPerson()}
          className="next-btn project-btn"
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Projects;

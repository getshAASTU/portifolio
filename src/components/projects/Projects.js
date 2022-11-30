import React, { useState } from "react";
import { projectsList } from "../../consts/projectsData";
import { GrProjects } from "react-icons/gr";
import "./projects.css";

const Projects = (props) => {
  const [index, setIndex] = useState(0);
  const { id, name, desc, img } = projectsList[index];
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
              <img
                src={`/assets/${props.img}`}
                alt="portofil"
                className="projectImg"
              />
            </div>
            <h5 style={{ color: "black" }}>{name}</h5>
            <p>{desc}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => prevPerson()}
          className="prev-btn btn"
        >
          prev
        </button>
        <button
          type="button"
          onClick={() => nextPerson()}
          className="next-btn btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;

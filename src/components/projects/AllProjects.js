import React from "react";
import { GrProjects} from "react-icons/gr";
import "./projects.css";
import Project from "./Project";
const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div 
      // className="projects"
      >
        <div
         className="project-title"
         >
          <GrProjects
            id="projectIcon"
            className="serviceMain-icon"
          />
          <h3>Projects</h3>
        </div>
        <Project />
      </div>
    </div>
  );
};

export default Projects;

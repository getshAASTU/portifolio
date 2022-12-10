import React, { useState, useEffect } from "react";
import { projectsList } from "../../consts/projectsData";
import { GrProjects} from "react-icons/gr";
import "./projects.css";
import Project from "./Project";
const Projects = () => {
  const [index, setIndex] = useState(0);
  const handleIndex=()=>{
   if(index < projectsList.length-1){
    setIndex(index+1)
   }
   else setIndex(0);
  }
  useEffect(()=>{
    const interval=setInterval(()=>{
      handleIndex()
    },2000)
    return ()=>{
      clearInterval(interval)
    }
  })
  return (
    <div id="projects" className="projects-container">
      <div className="projects">
        <div className="project-title">
          <GrProjects
            id="projectIcon"
            className="serviceMain-icon"
          />
          <h3>Projects</h3>
        </div>
        <Project  id={index} />
      </div>
    </div>
  );
};

export default Projects;

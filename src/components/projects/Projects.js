import React, { useState, useEffect } from "react";
import { projectsList } from "../../consts/projectsData";
import { GrProjects, GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./projects.css";
import Project from "./Project";
const Projects = (props) => {
  const [index, setIndex] = useState(0);
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
  const handleIndex=()=>{
    console.log(`huruy ${index}`)
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
  },[index])
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
        <Project id={index} />
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

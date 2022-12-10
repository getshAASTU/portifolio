import React from "react";
import { projectsList } from "../../consts/projectsData";

const Project = ({ id }) => {
  
  const { name, desc, image } = projectsList[id];
  return (
    <div className="projectContent">
      <div className="projects-list">
        <div className="projectImgs">
          <img src={image} alt={name} className="projectImg img" />
        </div>
        <h5 style={{ color: "black" }}>{name}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Project;

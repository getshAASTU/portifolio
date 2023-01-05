import React from "react";
import { projectsList } from "../../consts/projectsData";

const Project = () => {
  return (
    <div className="grid">
      {projectsList.map((project) => {
        const { name, image, href, id } = project;
        return (
          <a href={href} target="_blank" rel="noreferrer" key={id}>
            <div className="card-container">
              <div className="imageContainer">
                <img className="card-img" src={image} alt={name} />
              </div>
              <div className="desc">
                <h4>{name}</h4>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Project;

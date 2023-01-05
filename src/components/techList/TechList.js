import React from "react";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { FaBootstrap } from "react-icons/fa";
import { SiCss3, SiRedux } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import "./techList.css";

const TechList = () => {
  return (
    <div className="tech-iconsContainer">
      <div className="tech-icons">
        <div className="tech-icon">
          <TiHtml5 className="icons" style= {{ color: "#ffa62f" }} />
        </div>
        <div className="tech-icon">
          <SiCss3 className="icons" style={{ color: "#ee82ee" }} />
        </div>
        <div className="tech-icon">
          <FaBootstrap className="icons" style={{ color: "#8155ef" }} />
        </div>
        <div className="tech-icon">
          <TbBrandTailwind className="icons" style={{ color: "#ff70f8" }} />
        </div>
        <div className="tech-icon">
          <TbBrandJavascript className="icons" style={{ color: "#ffd800" }} />
        </div>
        <div className="tech-icon">
          <GrReactjs className="icons" style={{ color: "#00e8ff" }} />
        </div>
        <div className="tech-icon">
          <SiRedux className="icons" style={{ color: "#ff5300" }} />
        </div>
      </div>
    </div>
  );
};

export default TechList;

import React from "react";
import { FiHexagon } from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaConnectdevelop, FaDatabase } from "react-icons/fa";
import { GrHost, GrServices } from "react-icons/gr";
import "./services.css";

const Services = (props) => {
  const scrollFunction = () => {
    const serviceAnimate = document.querySelectorAll(".animate");
    const serviceContainer = document.querySelector(".service-container");
    const triggerBottom = (window.innerHeight / 5) * 4;
    const serviceContainerTop = serviceContainer.getBoundingClientRect().top;
    if (serviceContainerTop < triggerBottom) {
      serviceAnimate.forEach((servicCon) => {
        servicCon.classList.add("serviceAnimate");
      });
    } else {
      serviceAnimate.forEach((servicCon) => {
        servicCon.classList.remove("serviceAnimate");
      });
    }
  };
  window.addEventListener("scroll", scrollFunction);
  return (
    <section className="service-container" id="services">
      <div className="service-title">
        <GrServices
          style={{ color: "red" }}
          id="service-titleIcon"
          className="serviceMain-icon"
        />
        <h3>Services</h3>
      </div>
      <div className="services">
        <div className="service-img animate">
          <img src={`/assets/${props.img}`} alt="" className="img" />
        </div>
        <div className="serviceText animate">
          <div className="service-desc">
            <div className="serviceIcon-container">
              <FiHexagon className="serviceMain-icon" />
              <MdOutlineDesignServices className="serviceInner-icon" />
            </div>
            <div>
              <h5>Design</h5>
              <p>
                Never settle for a poor design. Take your business to the next
                level with custom designed websites.
              </p>
            </div>
          </div>
          <div className="service-desc">
            <div className="serviceIcon-container">
              <FiHexagon className="serviceMain-icon" />
              <FaConnectdevelop className="serviceInner-icon" />
            </div>
            <div>
              <h5>Developement</h5>
              <p>
                Have your website or mobile app professionally built with
                security, performance and reliability in mind.
              </p>
            </div>
          </div>
          <div className="service-desc">
            <div className="serviceIcon-container">
              <FiHexagon className="serviceMain-icon" />
              <FaDatabase className="serviceInner-icon" />
            </div>
            <div>
              <h5>Database</h5>
              <p>
                Have a customized database solution to store your business data both reliably and securely.
              </p>
            </div>
          </div>
          <div className="service-desc">
            <div className="serviceIcon-container">
              <FiHexagon className="serviceMain-icon" />
              <GrHost className="serviceInner-icon" />
            </div>
            <div>
              <h5>Hosting</h5>
              <p>
                Have your new website or mobile app hosted on decicated hosting
                solutions with high security and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

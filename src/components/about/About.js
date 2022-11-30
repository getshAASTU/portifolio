import React from "react";
// import about from "about.jpg";
import "./about.css";

function handleClick() {
  let x = document.getElementById("aboutImg");
  x.classList.toggle("slideInFromLeft");
}
const About = (props) => {
  return (
    <>
      <section id="about" className="about-container">
        <article className="about">
          <div className="aboutImg-container">
            <img
              id="aboutImg"
              src={`/assets/${props.img}`}
              className="img about-img"
              alt="goitom"
              onClick={handleClick}
            />
          </div>
          <div className="aboutInfo-container">
            <div className="about-info">
              <h3>about me</h3>
              <p>
                I'm Goitom, I have been working as a front end developer for the
                last 3 years. Over the years I have built many kinds of web
                applications including personal, business, e-commerce, and
                healthcare web apps. I will help you build a web app which
                perfectly fits your demand. Fast, Secure, and Responsive are the
                descriptions of my web apps. <span>lets go to work!!</span>
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;

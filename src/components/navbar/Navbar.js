import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import "./navbar.css";

const navToggle = (props) => {
  const navContainer = document.querySelector(".list-container");
  const navList = document.querySelector(".nav-list");
  const navContainerHeight = navContainer.getBoundingClientRect().height;
  const navListHeight = navList.getBoundingClientRect().height;
  const backgroundColor = "#0f172a";
  if (navContainerHeight === 0) {
    navContainer.style.height = `${navListHeight}px`;
    navContainer.style.backgroundColor = backgroundColor;
  } else {
    navContainer.style.height = 0;
    navContainer.style.backgroundColor = "transparent";
  }
};
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <section className="nav-center">
        <div className="nav-header">
          <a href="#home" className="nav-logo">
            <img className="logo-img" src={`/assets/${props.img}`} alt="" />
            <span>
              <p>GOITOM</p> <FaLaptopCode id="nav-laptop" />
            </span>
          </a>
          <button onClick={navToggle} className="btn toggle-btn">
            <GoThreeBars />
          </button>
        </div>
        <div className="list-container">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="scroll-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="scroll-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="scroll-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="scroll-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#faqs" className="scroll-link">
                FAQS
              </a>
            </li>
            <li className="nav-item">
              <a type="button" id="darkTheme">
                <BsFillMoonFill />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

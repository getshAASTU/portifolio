import React from "react";
import {GiGamepad} from 'react-icons/gi'
import "./hobbies.css";

const Hobbies = (props) => {

  const scrollFunction = () => {
    const imgContainer = document.querySelectorAll(".img-container");
    const hobbiesContainer = document.querySelector(".hobbies-container");
    const hobbyText = document.querySelectorAll(".hobbyText");
    const triggerBottom = window.innerHeight/5*4
    const hobbiesContainerTop = hobbiesContainer.getBoundingClientRect().top
    if (hobbiesContainerTop < triggerBottom) {
      imgContainer.forEach((imgcon) => {
        imgcon.classList.add("hobbyImgAnimate");
      });
      hobbyText.forEach((textcon) => {
        textcon.classList.add("hobbyTextAnimate");
      });
    }
     else{
      imgContainer.forEach((imgcon) => {
        imgcon.classList.remove("hobbyImgAnimate");
      });
      hobbyText.forEach((textcon) => {
        textcon.classList.remove("hobbyTextAnimate");
      });
    }
  }
  window.addEventListener("scroll", scrollFunction);
  return (
    <section  className="hobbies-container">
      <div className="hobbyTitle">
        <GiGamepad className="hobby-icon"/>
        <h3>Hobbies</h3>
      </div>
      <div className=" hobbies">
        <div className="hobby">
          <div className="img-container">
            <img
              src={`/assets/${props.codeImg}`}
              alt=""
              className="img hobbyImg"
            />
          </div>
          <div className="hobbyText">
            <h5>What Better Way To Spend my Free Time than Coding</h5>
            <p>
              Who does not love coding? just only who can start it. When I code
              I feel happy. I feel as if I have other no worries and all I need
              to think about is finding how to make things work the right way. I
              always code in my free time. You guys are worrying to spend your
              free time ...ahh, start coding right and you will shift your
              profession suddenly
            </p>
          </div>
        </div>
        <div className="hobby">
          <div className="img-container">
            <img
              src={`/assets/${props.sportsImg}`}
              alt=""
              className="img hobbyImg sportsImg"
            />
          </div>
          <div className="hobbyText">
            <h5>Playing Video Games and watching soccer matches</h5>
            <p>
              GOOOOOOOOAL!!!! Watching sports and Playing Video games is very
              relaxing to me. It's Plain and Simple Fun, Makes You Smarter, and
              Improve's Relationships. They type you play with your feet, not
              the one where you are crushed by 400 pound monsters. I enjoy
              sitting and watching a game and cheering on my favourite team!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

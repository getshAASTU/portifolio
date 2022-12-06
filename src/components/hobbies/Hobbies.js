import React, { useEffect, useState } from "react";
import "./hobbies.css";

const Hobbies = (props) => {
  const [position, setPosition] = useState();
  // useEffect(()=>{
  //   const element = document.querySelector(".hobbies-container");
  //   console.log(element)
  //    setPosition(() => element.offsetTop);
  //   console.log(position);
  // },[position])
  return (
    <section className="hobbies-container">
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
            <h4>What Better Way To Spend my Free Time than Coding</h4>
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
            <h4>Playing Video Games and watching soccer matches</h4>
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

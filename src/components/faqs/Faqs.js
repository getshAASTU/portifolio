import React, { useState, useEffect } from "react";
import { FaQuestion } from "react-icons/fa";
import { BsChevronDown, BsArrowUpCircle } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { faq } from "../../consts/faqs";
import "./faqs.css";

const Faqs = () => {
  const [questions, setQuestions] = useState(faq);
  const [accordion, setAccordion] = useState(-1);
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = window.pageYOffset;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  const toggleAccordion = (index) => {
    if (index === accordion) {
      setAccordion(-1);
    }
    setAccordion(index);
  };
  return (
    <div id="faqs" className="faq-container">
      <div className="faqs-icon">
        <FaQuestion id="faqs-icon" />
        <h3>FAQS</h3>
      </div>
      <div className="faq">
        {questions.map((item, index) => {
          const { id, question, answer } = item;
          return (
            <>
              <div
                key={id}
                className="questionAndanswer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="question">
                  <div>
                    <h5>{question}</h5>
                  </div>
                  <div>
                    <button type="button" className="faq-btn">
                      {accordion === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <BsChevronDown />
                      )}
                    </button>
                  </div>
                </div>
                <p className={accordion === index ? "" : "collapse"}>
                  {answer}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <div className="scroll-icon">
        <a href="#home" onClick={scrollToTop}>
          <BsArrowUpCircle style={{ display: visible ? "block" : "none" }} />
        </a>
      </div>
    </div>
  );
};

export default Faqs;

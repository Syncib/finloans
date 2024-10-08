import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./AccordionBar.css";

const AccordionBar = ({ heading, content}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion" data-aos="fade-up">
      <h3
        className="accordion-head"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <FaChevronDown /> : <FaChevronUp />} {heading}
      </h3>
      <p
        className={
          !isOpen ? "accordion-content" : "accordion-content opened"
        }
      >
        {content}
      </p>
      <hr />
    </div>
  );
};

export default AccordionBar;

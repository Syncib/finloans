import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import slider1 from "../assets/testmonial/author.png";
import "./Quote.css"
const Quote = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-3">
        <div className="d-inline-block position-relative">
          <img src={slider1} alt="testimonial" />
          <div className="d-inline-flex justify-content-center align-items-center bg-info rounded-circle p-3 position-absolute quote">
            <RiDoubleQuotesL color="white" size="25px" />
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <p className="testimonial-text">
          "Working in conjunction with humanitarian aid agencies, we have
          supported programmes to help alleviate human suffering through animal
          welfare when people might depend on livestock as their only source of
          income or food.
        </p>
        <p className="textimonial-authname text-italic">-Mickey Mouse</p>
      </div>
    </div>
  );
};

export default Quote;

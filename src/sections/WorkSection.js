import React, { useEffect } from "react";
import AOS from "aos"
import "./WorkSection.css";
const WorkSection = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
      },[])
  return (
    <div className="work-section">
      <div className="container">
        <div className="offertxt">
          <h1 className="text-center offer-title" data-aos="fade-up">How it Works</h1>
          <p className="text-center pay-para" data-aos="fade-up">
            We provide online instant cash loans with quick approval that suit
            your term
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-lg" data-aos="fade-up">
            <div className="d-inline-flex rounded-circle workno justify-content-center align-items-center">
              <span>01</span>
            </div>
            <h3 className="work-subhead mt-3">Apply for loan</h3>
            <p className="pay-para">
              We will customize a loan based on the amount of cash your company
              need term
            </p>
          </div>
          <div className="col-12 col-lg" data-aos="fade-up">
            <div className="d-inline-flex rounded-circle workno justify-content-center align-items-center">
              <span>02</span>
            </div>
            <h3 className="work-subhead mt-3">Application review</h3>
            <p className="pay-para">
              We will customize a loan based on the amount of cash your company
              need term
            </p>
          </div>
          <div className="col-12 col-lg" data-aos="fade-up">
            <div className="d-inline-flex rounded-circle workno justify-content-center align-items-center">
              <span>03</span>
            </div>
            <h3 className="work-subhead mt-3">Get funding fast</h3>
            <p className="pay-para">
              We will customize a loan based on the amount of cash your company
              need term
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;

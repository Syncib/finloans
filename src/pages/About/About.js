import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WorkSection from "../../sections/WorkSection";
import FaqSection from "../../sections/FaqSection";
import ReviewSection from "../../sections/ReviewSection";
import LoanSection from "../../sections/LoanSection";
import chooseus from "../../assets/about/about.png";
import "./About.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="about-div">
        <Navbar />
        <div className="container aboutloan">
          <div className="row align-items-center gap-3">
            <div className="col-12 col-lg-5">
              <h1 className="hero-title white" data-aos="fade-left">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container choose-section mt-2">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5" data-aos="fade-right">
            <img className="img-fluid" src={chooseus} alt="chooseus" />
          </div>
          <div className="col-12 col-lg-5 m-auto">
            <h1 className="offer-title mb-4" data-aos="fade-up">
              We provide loan for any purpose
            </h1>
            <p className="pay-para" data-aos="fade-up">
              Esteem spirit temper too say adieus who direct esteem.It esteems
              luckily or picture placing drawing. Apartments frequently or
              motionless on reasonable.s
            </p>
            <p className="intrate" data-aos="fade-left">
              <span className="bullet rounded-circle d-inline-block me-2"></span>
              Loans with quick approval.
            </p>
            <p className="intrate" data-aos="fade-left">
              <span className="bullet rounded-circle d-inline-block me-2"></span>
              Customize a loan based on the amount.
            </p>
            <p className="intrate" data-aos="fade-left">
              <span className="bullet rounded-circle d-inline-block me-2"></span>
              Good credit profile and you have built your loan.
            </p>
            <p className="intrate" data-aos="fade-left">
              <span className="bullet rounded-circle d-inline-block me-2"></span>
              We provide online instant cash loans.
            </p>
            <button
              className="btn btn-info white px-4 py-2 mt-4"
              data-aos="fade-left"
            >
              Apply for Loan
            </button>
          </div>
        </div>
      </div>
      <WorkSection />
      <FaqSection />
      <ReviewSection />
      <LoanSection />
      <Footer />
    </div>
  );
};

export default About;

import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WorkSection from "../../sections/WorkSection";
import "./Apply.css";
const Apply = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="apply-div">
        <Navbar />
        <div className="container aboutloan">
          <div className="row align-items-center gap-3">
            <div className="col-12 col-lg-5">
              <h1 className="hero-title white" data-aos="fade-left">
                Apply Now
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="apply-form container">
        <div className="form-frame border rounded p-5">
          <h1 className="text-center pay-head">How much do you want?</h1>
          <p className="text-center pay-para">
            We provide online instant cash loans with quick approval that suit
            your term length
          </p>
          <form>
            <div className="position-relative mb-3 border rounded py-1 w-100">
              <input
                type="text"
                placeholder="Your name"
                className="form-control applyinp"
              />
            </div>
            <div className="position-relative mb-3 border rounded py-1 w-100">
              <input
                type="email"
                placeholder="Email"
                className="form-control applyinp"
              />
            </div>
            <div className="position-relative mb-3 border rounded py-1 w-100">
              <input
                type="text"
                placeholder="Phone no."
                className="form-control applyinp"
              />
            </div>
            <div className="position-relative mb-3 border rounded py-1 w-100">
              <select className="form-select applyinp text-secondary">
                <option>Purpose</option>
                <option>Purpose1</option>
                <option>Purpose2</option>
              </select>
            </div>
            <div className="position-relative mb-3 border rounded py-1 w-100">
              <select className="form-select applyinp text-secondary">
                <option>Amount</option>
                <option>$10</option>
                <option>$20</option>
                <option>$30</option>
              </select>
            </div>
            <div className="position-relative mb-3 border rounded py-1 w-100">
              <input
                type="date"
                className="form-control applyinp text-secondary"
              />
            </div>
            <p className="pay-para">You have to pay:$0</p>
            <div className="position-relative mb-3 border rounded py-1 w-100">
              <textarea
                placeholder="Message"
                className="form-control applyinp"
                rows="7"
              />
            </div>
            <button className="btn btn-info white w-100 py-3">Apply Now</button>
          </form>
        </div>
      </div>
      <WorkSection />
      <Footer />
    </div>
  );
};

export default Apply;

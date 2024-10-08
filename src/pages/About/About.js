import React, { useEffect } from 'react'
import AOS from "aos"
import Navbar from "../../components/Navbar";
import ApplyCard from "../../components/ApplyCard";
import Footer from "../../components/Footer";
import WorkSection from "../../sections/WorkSection";
import FaqSection from "../../sections/FaqSection";
import ReviewSection from "../../sections/ReviewSection";
import LoanSection from "../../sections/LoanSection";
import service1 from "../../assets/svg_icon/service_1.png";
import service2 from "../../assets/svg_icon/service_2.png";
import service3 from "../../assets/svg_icon/service_3.png";
import chooseus from "../../assets/about/about.png";
import "./About.css"
const About = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div className="overflow-hidden">
    <div className="homepage-div">
      <Navbar />
      <div className="container getloan">
        <div className="row justify-content-around align-items-center gap-3">
          <div className="col-12 col-lg-5">
            <h1 className="hero-title white" data-aos="fade-left">
              Get Loan for your Business growth or startup
            </h1>
            <button className="btn btn-info white py-2 px-4 mt-4" data-aos="fade-right">
              How it Works
            </button>
          </div>
          <div className="col-12 col-lg-4 p-5 bg-white rounded pay-form " data-aos="fade-down">
            <h1 className="text-center pay-head mb-4">
              How much do you want?
            </h1>
            <p className="text-center pay-para mb-4">
              We provide online instant cash loans with quick
            </p>

            <select className="form-select mb-3 p-3">
              <option>Amount</option>
              <option>$10</option>
              <option>$40</option>
              <option>$50</option>
            </select>

            <select className="form-select p-3 mb-4">
              <option>Month</option>
              <option>3 Month</option>
              <option>6 Month</option>
              <option>9 Month</option>
              <option>12 Month</option>
            </select>
            <p className="pay-para my-4">You have to pay:$0</p>
            <button className="btn btn-info w-100 white p-3">Continue</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container offer-section">
      <div className="offertxt">
        <h1 className="text-center offer-title">What we offer for you</h1>
        <p className="text-center pay-para">
          We provide online instant cash loans with quick approval that suit
          your term
        </p>
      </div>
      <div className="row justify-content-center gap-3">
        <div className="col-12 col-lg" data-aos="fade-right">
          <ApplyCard cardimage={service1} />
        </div>
        <div className="col-12 col-lg" data-aos="fade-up">
          <ApplyCard cardimage={service2} />
        </div>
        <div className="col-12 col-lg" data-aos="fade-left">
          <ApplyCard cardimage={service3} />
        </div>
      </div>
    </div>
    <div className="container choose-section mt-2">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5" data-aos="fade-right">
          <img className="img-fluid" src={chooseus} alt="chooseus" />
        </div>
        <div className="col-12 col-lg-5 m-auto">
          <h1 className="offer-title mb-4" data-aos="fade-up">Why Choose Us?</h1>
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
          <button className="btn btn-info white px-4 py-2 mt-4" data-aos="fade-left">
            About Us
          </button>
        </div>
      </div>
    </div>
    <WorkSection/>
    <FaqSection/>
    <ReviewSection/>
    <LoanSection/>
      <Footer/>
  </div>
  )
}

export default About
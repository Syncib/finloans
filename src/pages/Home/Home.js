import React, { useState } from "react";
import Slider from "react-slick/lib/slider";
import Navbar from "../../components/Navbar";
import ApplyCard from "../../components/ApplyCard";
import AccordionBar from "../../components/Accordionbar";
import Quote from "../../components/Quote";
import service1 from "../../assets/svg_icon/service_1.png";
import service2 from "../../assets/svg_icon/service_2.png";
import service3 from "../../assets/svg_icon/service_3.png";
import chooseus from "../../assets/about/about.png";
import faq from "../../assets/faq/faq.png";
import brand1 from "../../assets/brand/1.png";
import brand2 from "../../assets/brand/2.png";
import brand3 from "../../assets/brand/3.png";
import brand4 from "../../assets/brand/4.png";
import brand5 from "../../assets/brand/5.png";
import "./Home.css";
const Home = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let settingsBrand = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden">
      <div className="homepage-div">
        <Navbar />
        <div className="container getloan">
          <div className="row justify-content-around align-items-center gap-3">
            <div className="col-12 col-lg-5">
              <h1 className="hero-title white">
                Get Loan for your Business growth or startup
              </h1>
              <button className="btn btn-info white py-2 px-4 mt-4">
                How it Works
              </button>
            </div>
            <div className="col-12 col-lg-4 p-5 bg-white rounded pay-form">
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
          <div className="col-12 col-lg">
            <ApplyCard cardimage={service1} />
          </div>
          <div className="col-12 col-lg">
            <ApplyCard cardimage={service2} />
          </div>
          <div className="col-12 col-lg">
            <ApplyCard cardimage={service3} />
          </div>
        </div>
      </div>
      <div className="container choose-section mt-2">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5">
            <img className="img-fluid" src={chooseus} alt="chooseus" />
          </div>
          <div className="col-12 col-lg-5 m-auto">
            <h1 className="offer-title mb-4">Why Choose Us?</h1>
            <p className="pay-para">
              Esteem spirit temper too say adieus who direct esteem.It esteems
              luckily or picture placing drawing. Apartments frequently or
              motionless on reasonable.s
            </p>
            <p className="intrate">
              <span className="bullet rounded-circle d-inline-block me-2"></span>
              Loans with quick approval.
            </p>
            <p className="intrate">
              <span className="bullet rounded-circle d-inline-block me-2"></span>
              Customize a loan based on the amount.
            </p>
            <p className="intrate">
              <span className="bullet rounded-circle d-inline-block me-2"></span>
              Good credit profile and you have built your loan.
            </p>
            <p className="intrate">
              <span className="bullet rounded-circle d-inline-block me-2"></span>
              We provide online instant cash loans.
            </p>
            <button className="btn btn-info white px-4 py-2 mt-4">
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className="work-section">
        <div className="container">
          <div className="offertxt">
            <h1 className="text-center offer-title">How it Works</h1>
            <p className="text-center pay-para">
              We provide online instant cash loans with quick approval that suit
              your term
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-lg">
              <div className="d-inline-flex rounded-circle workno justify-content-center align-items-center">
                <span>01</span>
              </div>
              <h3 className="work-subhead mt-3">Apply for loan</h3>
              <p className="pay-para">
                We will customize a loan based on the amount of cash your
                company need term
              </p>
            </div>
            <div className="col-12 col-lg">
              <div className="d-inline-flex rounded-circle workno justify-content-center align-items-center">
                <span>02</span>
              </div>
              <h3 className="work-subhead mt-3">Application review</h3>
              <p className="pay-para">
                We will customize a loan based on the amount of cash your
                company need term
              </p>
            </div>
            <div className="col-12 col-lg">
              <div className="d-inline-flex rounded-circle workno justify-content-center align-items-center">
                <span>03</span>
              </div>
              <h3 className="work-subhead mt-3">Get funding fast</h3>
              <p className="pay-para">
                We will customize a loan based on the amount of cash your
                company need term
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-section">
        <div className="row">
          <div className="col-5 d-none d-lg-block">
            <img className="img-fluid" src={faq} alt="faq" />
          </div>
          <div className="col-12 col-lg-4">
            <div className="offertxt">
              <h1 className="offer-title">Frequently ask</h1>
              <AccordionBar
                heading="Adieus who direct esteem It esteems luckily?"
                content="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
              />
              <AccordionBar
                heading="Who direct esteem It esteems?"
                content="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
              />
              <AccordionBar
                heading="Duis consectetur feugiat auctor?"
                content="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
              />
              <AccordionBar
                heading=" Consectetur feugiat auctor?"
                content="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="review-section container">
        <div className="slider-container">
          <Slider {...settings}>
            <Quote />
          </Slider>
        </div>
        <div className="slider-container p-lg-5">
          <Slider {...settingsBrand}>
            {[brand1, brand2, brand3, brand4, brand5].map((brand) => (
              <img src={brand} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;

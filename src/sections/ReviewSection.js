import React from 'react'
import Slider from 'react-slick/lib/slider';
import Quote from "../components/Quote";
import brand1 from "../assets/brand/1.png";
import brand2 from "../assets/brand/2.png";
import brand3 from "../assets/brand/3.png";
import brand4 from "../assets/brand/4.png";
import brand5 from "../assets/brand/5.png";
import "./ReviewSection.css"
const ReviewSection = () => {
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
    <div className="review-section container">
    <div className="slider-container">
      <Slider {...settings}>
        <Quote />
      </Slider>
    </div>
    <div className="slider-container p-lg-5">
      <Slider {...settingsBrand}>
        {[brand1, brand2, brand3, brand4, brand5].map((brand) => (
          <img src={brand} alt="brand" data-aos="fade-up"/>
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default ReviewSection
import React, { useEffect } from "react";
import AOS from "aos"
import footerlogo from "../assets/footer_logo.png";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";


const Footer = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div className="footer-section">
    <div className="container">
      <div className="row gap-4 gap-md-0" data-aos="fade-up">
        <div className="col-lg-3 footer-p">
          <img src={footerlogo} alt="footer" />
          <div className="my-5 pay-para">
            <p>finloan@support.com</p>
            <p>+10 873 672 6782</p>
            <p>600/D, Green road, NewYork</p>
          </div>
          <div className="d-flex gap-2">
            <div className="d-flex align-items-center justify-content-center footico border rounded-circle">
              <FaFacebookF />
            </div>
            <div className="d-flex align-items-center justify-content-center footico border rounded-circle">
              <FaGooglePlusG />
            </div>
            <div className="d-flex align-items-center justify-content-center footico border rounded-circle">
              <FaTwitter />
            </div>
            <div className="d-flex align-items-center justify-content-center footico border rounded-circle">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <h5 className="footer-title mb-5">Services</h5>
          <div className="footer-content">
              <p>SEO/SEM</p>
              <p>Web design</p>
              <p>Ecommerce</p>
              <p>Digital marketing</p>
          </div>
        </div>
        <div className="col-lg-3">
          <h5 className="footer-title mb-5">Useful Links</h5>
          <div className="footer-content">
              <p>About</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>Support</p>
          </div>
        </div>
        <div className="col-lg-3">
          <h5 className="footer-title mb-5">Subscribe</h5>
          <div className="footer-content">
              <div className="position-relative mb-3 border rounded py-1 w-100">
                <input type="email" placeholder="Enter your email" className="form-control footinp" />
                <button className="btn btn-primary footsub position-absolute">Subscribe</button>
              </div>
              <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
          </div>
        </div>
      </div>
      <p className="pay-para text-center mt-5">Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
    </div>
    </div>
  );
};

export default Footer;

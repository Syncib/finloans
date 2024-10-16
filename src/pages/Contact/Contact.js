import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { TiHomeOutline, TiDeviceTablet, TiMail } from "react-icons/ti";
import "./Contact.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="contact-div">
        <Navbar />
        <div className="container aboutloan">
          <div className="row align-items-center gap-3">
            <div className="col-12 col-lg-5">
              <h1 className="hero-title white" data-aos="fade-left">
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h3 className="mb-5 fw-bold">Get in Touch</h3>
            <form>
              <textarea
                className="form-control p-4 mb-3"
                rows={7}
                placeholder="Enter Message"
              />
              <div className="row mb-3 gap-3 gap-lg-0">
                <div className="col-12 col-lg-6">
                  <input
                    className="form-control py-3"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <input
                    className="form-control  py-3"
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <input
                className="form-control px-4 py-3 mb-3"
                type="text"
                placeholder="Enter Subject"
              />
              <button className="btn btn-outline-info rounded-0 px-5 py-3">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-12 col-lg-4 my-5">
            <div className="d-flex gap-3 align-items-start my-5">
              <TiHomeOutline size="7%" />
              <div>
                <h5>Buttonwood,California.</h5>
                <div className="pay-para">Rosemead,CA 91770</div>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-start my-5">
              <TiDeviceTablet size="7%" />
              <div>
                <h5>00 (440) 9865 562</h5>
                <div className="pay-para">Mon to Fri 9am to 6pm</div>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-start my-5">
              <TiMail size="8%" />
              <div>
                <h5>support@colorlib.com</h5>
                <div className="pay-para">Send us your query anytime!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

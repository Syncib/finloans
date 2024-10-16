import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogSection from "../../sections/BlogSection";
import AsideSection from "../../sections/AsideSection";
import "./SingleBlog.css";

const SingleBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="blog-div">
        <Navbar />
        <div className="container aboutloan">
          <div className="row align-items-center gap-3">
            <div className="col-12 col-lg-5">
              <h1 className="hero-title white" data-aos="fade-left">
                Single Blog
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="blog container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <BlogSection />
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column gap-4">
            <AsideSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlog;

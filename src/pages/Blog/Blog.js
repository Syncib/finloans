import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import AsideSection from "../../sections/AsideSection";
import blog1 from "../../assets/blogs/single_blog_1.webp";
import blog2 from "../../assets/blogs/single_blog_2.webp";
import blog3 from "../../assets/blogs/single_blog_3.webp";
import blog4 from "../../assets/blogs/single_blog_4.webp";
import blog5 from "../../assets/blogs/single_blog_5.webp";
import "./Blog.css";


const blogs = [
  {
    img: blog1,
    title: "Google inks pact for new 35-storey office",
    text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  },
  {
    img: blog2,
    title: "Google inks pact for new 35-storey office",
    text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  },
  {
    img: blog3,
    title: "Google inks pact for new 35-storey office",
    text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  },
  {
    img: blog4,
    title: "Google inks pact for new 35-storey office",
    text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  },
  {
    img: blog5,
    title: "Google inks pact for new 35-storey office",
    text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  },
];
const Blog = () => {
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
                Blog
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="blog container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-column gap-3">
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column gap-4">
            <AsideSection/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

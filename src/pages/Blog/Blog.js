import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import { HiMagnifyingGlass } from "react-icons/hi2";
import post1 from "../../assets/posts/post_1.webp";
import post2 from "../../assets/posts/post_2.webp";
import post3 from "../../assets/posts/post_3.webp";
import post4 from "../../assets/posts/post_4.webp";
import blog1 from "../../assets/blogs/single_blog_1.webp";
import blog2 from "../../assets/blogs/single_blog_2.webp";
import blog3 from "../../assets/blogs/single_blog_3.webp";
import blog4 from "../../assets/blogs/single_blog_4.webp";
import blog5 from "../../assets/blogs/single_blog_5.webp";
import "./Blog.css";

const posts = [
  {
    img: post1,
    title: "From life was you fish...",
    date: "January 12, 2019",
  },
  {
    img: post2,
    title: "The Amazing Hubble",
    date: "02 Hours ago",
  },
  {
    img: post3,
    title: "Astronomy Or Astrology",
    date: "03 Hours ago",
  },
  {
    img: post4,
    title: "Asteroids telescope.",
    date: "01 Hours ago",
  },
];
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
            <div className="search-frame p-5">
              <div class="input-group mb-3">
                <input
                  type="search"
                  className="form-control"
                  placeholder = "Search Keyword"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.value
                      ? (e.target.placeholder = "")
                      : (e.target.placeholder = "Search Keyword");
                  }}
                />
                <span class="input-group-text custom-set" id="basic-addon2">
                  <HiMagnifyingGlass />
                </span>
              </div>

              <button className="btn btn-outline-info w-100 searchbtn">
                Search
              </button>
            </div>
            <div className="category-frame p-5">
              <h4 className="">Category</h4>
              <hr />
              <p className="pay-para">Resaurant food (37)</p>
              <hr />
              <p className="pay-para">Travel news (10)</p>
              <hr />
              <p className="pay-para">Modern technology (03)</p>
              <hr />
              <p className="pay-para">Product (11)</p>
              <hr />
              <p className="pay-para">Inspiration 21</p>
              <hr />
              <p className="pay-para">Health Care (21) 09</p>
            </div>
            <div className="recentpost-frame p-5">
              <h4 className="">Recent Post</h4>
              <hr />
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center gap-3 mb-3"
                >
                  <img src={post.img} alt="" />
                  <div>
                    <h6>{post.title}</h6>
                    <p className="pay-para recentdate">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

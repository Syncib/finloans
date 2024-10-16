import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import post1 from "../assets/posts/post_1.webp";
import post2 from "../assets/posts/post_2.webp";
import post3 from "../assets/posts/post_3.webp";
import post4 from "../assets/posts/post_4.webp";
import post5 from "../assets/posts/post_5.webp";
import post6 from "../assets/posts/post_6.webp";
import post7 from "../assets/posts/post_7.webp";
import post8 from "../assets/posts/post_8.webp";
import post9 from "../assets/posts/post_9.webp";
import post10 from "../assets/posts/post_10.webp";
import "./AsideSection.css";
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
const AsideSection = () => {
  return (
    <>
      <div className="search-frame p-3 p-lg-5">
        <div class="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Search Keyword"
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
        <button className="btn btn-outline-info w-100 searchbtn">Search</button>
      </div>
      <div className="category-frame p-3 p-lg-5">
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
      <div className="recentpost-frame p-3 p-lg-5">
        <h4 className="">Recent Post</h4>
        <hr />
        {posts.map((post, index) => (
          <div key={index} className="d-flex align-items-center gap-3 mb-3">
            <img src={post.img} alt="" />
            <div>
              <h6>{post.title}</h6>
              <p className="pay-para recentdate">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tagclouds-frame p-3 p-lg-5">
        <h4>Tag Clouds</h4>
        <hr />
        <div className="d-flex gap-3 flex-wrap">
          {[
            "project",
            "love",
            "technology",
            "travel",
            "restaurant",
            "life style",
            "design",
            "illustration",
          ].map((cloud) => (
            <div className="tagcloud pay-para">{cloud}</div>
          ))}
        </div>
      </div>
      <div className="instafeed-frame p-3 p-lg-5">
        <h4>Instagram Feeds</h4>
        <hr />
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {[post5, post6, post7, post8, post9, post10].map((item) => (
            <img src={item} />
          ))}
        </div>
      </div>
      <div className="search-frame p-3 p-lg-5">
        <h4>Newsletter</h4>
        <hr />
        <div class="mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Enter Email"
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              e.target.value
                ? (e.target.placeholder = "")
                : (e.target.placeholder = "Search Keyword");
            }}
          />
        </div>
        <button className="btn btn-outline-info w-100 searchbtn">Subscribe</button>
      </div>
    </>
  );
};

export default AsideSection;

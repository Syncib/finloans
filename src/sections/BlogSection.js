import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaHeart,
  FaTwitter,
  FaUser,
  FaComments,
} from "react-icons/fa";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import blogimg from "../assets/blogs/single_blog_1.webp";
import prevpost from "../assets/preview.webp";
import author from "../assets/comments/author.webp";
import "./BlogSection.css";
import CommentSection from "./CommentSection";
import ReplySection from "./ReplySection";
const BlogSection = () => {
  return (
    <div>
      <img className="img-fluid mb-3" src={blogimg} alt="" />
      <h3>
        Second divided from form fish beast made every of seas all gathered us
        saying he our
      </h3>
      <div className="d-inline-flex align-items-center gap-2 comsec pay-para mb-3">
        <FaUser size={"12px"} />
        <span>Travel,Lifestyle</span>|<FaComments />
        <span>03 Comments</span>
      </div>
      <p className="pay-para">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower
      </p>
      <p className="pay-para">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower
      </p>
      <div className="parafocus">
        <div className="pay-para fst-italic innerpara">
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower to actually sit through a
          self-imposed MCSE training.
        </div>
      </div>
      <p className="pay-para">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower
      </p>
      <p className="pay-para">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower
      </p>
      <hr />
      <div class="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center pay-para gap-2">
          <FaHeart />
          <span> Lily and 4 people like this</span>
        </div>
        <div className="d-flex align-items-center pay-para gap-3">
          <FaFacebookF />
          <FaTwitter />
          <FaDribbble />
          <FaBehance />
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-5">
        <div className="d-inline-flex align-items-center gap-3">
          <div className="switchcont">
            <img className="switchimg" src={prevpost} alt="" />
            <MdArrowBack className="arrow" size="60%" />
          </div>
          <div className="d-inline-block">
            <p className="pay-para m-0">Prev Post</p>
            <h5 className="">Space The Final Frontier</h5>
          </div>
        </div>
        <div className="d-inline-flex align-items-center gap-3">
          <div className="d-inline-block text-end">
            <p className="pay-para m-0">Next Post</p>
            <h5 className="">Space The Final Frontier</h5>
          </div>
          <div className="switchcont">
            <img className="switchimg" src={prevpost} alt="" />
            <MdArrowForward className="arrow" size="60%" />
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="author-frame d-flex align-items-center p-4 gap-3">
        <img src={author} alt="" />
        <div>
          <h5>Harvard milan</h5>
          <p className="pay-para m-0">
            Second divided from form fish beast made. Every of seas all gathered
            use saying you're, he our dominion twon Second divided from
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <CommentSection />
      <hr className="my-5" />
      <ReplySection />
    </div>
  );
};

export default BlogSection;

import React from 'react';
import { FaComment } from 'react-icons/fa'; 
import "./BlogCard.css"
const BlogCard = ({blog}) => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src={blog.img}
          alt="Blog cover"
        />
        <div className="card-date">
          <span className="date-day">15</span>
          <span className="date-month">Jan</span>
        </div>
      </div>
      <div className="card-content">
        <h3>{blog.title}</h3>
        <p>
         {blog.text}
        </p>
        <div className="card-footer">
          <span className="card-category">Travel, Lifestyle</span>
          <span className="card-comments">
            <FaComment /> 3 Comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

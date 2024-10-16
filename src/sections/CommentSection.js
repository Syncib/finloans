import React from "react";
import CommentBar from "../components/CommentBar";
import com1 from "../assets/comments/comment_1.webp";
import com2 from "../assets/comments/comment_2.webp";
import com3 from "../assets/comments/comment_3.webp";
const comments = [
  {
    img: com1,
  },
  {
    img: com2,
  },
  {
    img: com3,
  },
];
const CommentSection = () => {
  return (
    <div>
      <h5>05 Comments</h5>
      <div class="d-flex flex-column gap-3">
          {comments.map((item) => (
            <CommentBar comment={item} />
          ))}
      </div>
    </div>
  );
};

export default CommentSection;

import React from "react";
import "./CommentBar.css"
const CommentBar = ({comment}) => {
  return (
    <div className="d-flex align-items-center gap-3 p-2">
      <img src={comment.img} alt="" />
      <div className="pay-para">
        <p>
          Multiply sea night grass fourth day sea lesser rule open subdue female
          fill which them Blessed, give fill lesser bearing multiply sea night
          grass fourth day sea lesser
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3 align-items-center">
            <h6 className="m-0">Emily Blunt</h6>
            <p className="m-0 comdate">December 4, 2017 at 3:12 pm</p>
          </div>
          <p className="text-lead m-0 comreply">REPLY</p>
        </div>
      </div>
    </div>
  );
};

export default CommentBar;

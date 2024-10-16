import React from "react";

const ReplySection = () => {
  return (
    <div>
      <h5 className="my-5">Leave a Reply</h5>
      <form>
        <textarea
          className="form-control p-4 mb-3"
          rows={7}
          placeholder="Write Comment"
        />
        <div className="row mb-3">
          <div className="col-12 col-lg-6">
            <input
              className="form-control py-3"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="col-12 col-lg-6">
            <input
              className="form-control  py-3"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <input
          className="form-control px-4 py-3 mb-3"
          type="text"
          placeholder="Website"
        />
        <button className="btn btn-outline-info rounded-0 px-5 py-3">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ReplySection;

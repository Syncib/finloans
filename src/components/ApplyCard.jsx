import React from "react";
import "./ApplyCard.css";
const ApplyCard = ({ cardimage }) => {
  return (
    <div className="apply-card rounded text-white py-5">
      <div className="text-center">
      <img className="img-fluid" src={cardimage} alt="card-img"/>
        <p className="pt-5">Home Loan</p>
        <h3>$3000-$10000</h3>
      </div>
      <hr />
      <div className="intdiv m-auto">
        <p className="intrate">
          <span className="olf bg-info rounded-circle d-inline-block me-2"></span>
          Borrow - $350 over 3 months
        </p>
        <p className="intrate">
          <span className="olf bg-info rounded-circle d-inline-block me-2"></span>
          Interest rate - 292% pa fixed
        </p>
        <p className="intrate">
          <span className="olf bg-info rounded-circle d-inline-block me-2"></span>
          Total amount payable - $525.12
        </p>
        <p className="intrate">
          <span className="olf bg-info rounded-circle d-inline-block me-2"></span>
          Total amount payable - $525.12
        </p>
      <button className="btn btn-info w-100 white p-3 d-block mx-auto mt-4 fw-bold">Apply Now</button>
      </div>
    </div>
  );
};
export default ApplyCard;

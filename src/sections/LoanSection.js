import React from 'react'
import "./LoanSection.css"
const LoanSection = () => {
  return (
    <div className="loan-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-7" data-aos="fade-right"> <h1 className="offer-title white">Apply for a Loan for your startup, education or company</h1></div>
            <div className="col-12 col-lg-2" data-aos="fade-up"><button className="btn btn-info white py-3 px-5 fw-bold">Apply Now</button></div>
          </div>
        </div>
      </div>
  )
}

export default LoanSection
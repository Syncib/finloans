import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg py-4 custom-position ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container nav-cont">
        <Link className="navbar-brand white" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="navbar-nav d-none d-lg-flex gap-4 gap-xxl-5 navlinks align-items-center">
          <Link className="nav-link white" to="/">
            Home
          </Link>
          <Link className="nav-link white" to="/loan">
            Loan
          </Link>
          <Link className="nav-link white" to="/about">
            About
          </Link>
          <div className="position-relative pages">
            <Link className="nav-link white" to="/home">
              Pages<FaChevronDown />
            </Link>
            <div className="position-absolute bg-white inpage text-nowrap">
              <h6>Apply Loan</h6>
              <h6>Elements</h6>
            </div>
          </div>
          <div className="position-relative pages">
            <Link className="nav-link white" to="/home">
              Blog<FaChevronDown />
            </Link>
            <div className="position-absolute bg-white inpage text-nowrap">
              <h6>Apply Loan</h6>
              <h6>Elements</h6>
            </div>
          </div>
          <Link className="nav-link white" to="/home">
            FAQ
          </Link>
          <Link className="nav-link white" to="/home">
            Contact
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <div className="nav-link d-none d-xxl-inline text-nowrap white">
            10 673 567 367
          </div>
          <button className="btn btn-outline-info text-nowrap py-2 px-4 ms-3 navapply">
            Apply for a Loan
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

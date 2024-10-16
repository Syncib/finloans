import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuExpand, setMenuExpand] = useState(false);
  const [isPagesExpand, setPagesExpand] = useState(false);
  const [isBlogExpand, setBlogExpand] = useState(false);
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
    <>
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
                Pages
                <FaChevronDown />
              </Link>
              <div className="position-absolute bg-white inpage text-nowrap">
                <Link className="nav-link" to="/apply">
                  Apply Loan
                </Link>
                <Link className="nav-link" to="/elements">
                  Elements
                </Link>
              </div>
            </div>
            <div className="position-relative pages">
              <Link className="nav-link white" to="/home">
                Blog
                <FaChevronDown />
              </Link>
              <div className="position-absolute bg-white inpage text-nowrap">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
                <Link className="nav-link" to="/single-blog">
                  Single Blog
                </Link>
              </div>
            </div>
            <Link className="nav-link white" to="/home">
              FAQ
            </Link>
            <Link className="nav-link white" to="/contact">
              Contact
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <div className="nav-link d-none d-xxl-inline text-nowrap white">
              10 673 567 367
            </div>
            <button className="btn btn-outline-info text-nowrap py-2 px-4 ms-3 navapply d-none d-lg-inline">
              Apply for a Loan
            </button>
          </div>
        </div>
      </nav>
      <div className="mobile-nav d-block d-lg-none">
        <div className="d-flex flex-row-reverse d-lg-none">
          <div
            className="menu-button m-3 rounded"
            onClick={() => {
              setMenuExpand(!isMenuExpand);
            }}
          >
            <GiHamburgerMenu />
            MENU
          </div>
        </div>
        <div
          className={`${isMenuExpand ? "ms-4  menu-opened" : "ms-4 menu-closed"}`}
        >
          <Link className="nav-link white mb-2" to="/">
            Home
          </Link>
          <Link className="nav-link white mb-2" to="/loan">
            Loan
          </Link>
          <Link className="nav-link white mb-2" to="/about">
            About
          </Link>
          <div>
            <div className="nav-link white mb-2" onClick={()=>{setPagesExpand(!isPagesExpand)}}>
              Pages
              <FaChevronDown />
            </div>
            <div className={`${isPagesExpand ? "ms-4  pages-opened" : "ms-4 pages-closed"}`}>
              <Link className="nav-link white" to="/apply">
                Apply Loan
              </Link>
              <Link className="nav-link white" to="/elements">
                Elements
              </Link>
            </div>
          </div>
          <div>
            <div className="nav-link white mb-2" to="/home" onClick={()=>{setBlogExpand(!isBlogExpand)}}>
              Blog
              <FaChevronDown />
            </div>
            <div className={`${isBlogExpand ? "ms-4  blog-opened" : "ms-4 blog-closed"}`}>
              <Link className="nav-link white" to="/blog">
                Blog
              </Link>
              <Link className="nav-link white" to="/single-blog">
                Single Blog
              </Link>
            </div>
          </div>
          <Link className="nav-link white mb-2" to="/home">
            FAQ
          </Link>
          <Link className="nav-link white mb-2" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

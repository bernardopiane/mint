import React from "react";
import logo from "../img/LOGO.png";
import "./MyNavbar.css";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <div className="container" style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="img-fluid" />
        </Link>
        <div>
          <Link to="/work" className="link">
            Work
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/blog" className="link">
            Blog
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

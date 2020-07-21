import React from "react";
import logo from "../img/LogoInvert.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#1e1e1e" }}>
      <div className="container py-5">
        <div className="d-flex align-items-center">
          <Link to="/">
            <img src={logo} alt="" className="img-fluid" />
          </Link>
          <div className="col-11 ml-4 text-white">
            <small>2020 Mint Tradermark</small>
          </div>
        </div>
      </div>
    </div>
  );
}

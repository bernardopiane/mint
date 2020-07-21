import React from "react";
import { Link, useLocation } from "react-router-dom";
import face1 from "../img/face1.jpg";
import face2 from "../img/face2.jpg";
import "./About.css";
import AboutImage from "./AboutImage";

export default function About() {
  const location = useLocation();

  return (
    <div className="container section-pad">
      <h1>About Us.</h1>
      <div className="row" style={{ paddingTop: "2em" }}>
        <div className="col-12 col-lg-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            inventore aliquam molestiae ipsa delectus a praesentium impedit ad
            doloribus
          </p>
        </div>
      </div>
      <div className="row align-items-center" style={{ paddingTop: "2em" }}>
        <div className="col-6 col-lg-4 pt-4 pt-lg-0">
          <AboutImage
            image={face1}
            title="Luke Skywalker"
            subtitle="Web Designer"
          />
        </div>
        <div className="col-6 col-lg-4 pt-4 pt-lg-0">
          <AboutImage
            image={face2}
            title="Luke Skywalker"
            subtitle="Web Designer"
          />
        </div>
        <div className="col-12 col-lg-4 pt-4 pt-lg-0">
          <div className="pad4">
            <h4>Little About Us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur aliquam ea officiis incidunt vitae deserunt voluptas
              dicta, molestias soluta magni, saepe numquam earum itaque neque
              recusandae! Debitis explicabo ullam soluta?
            </p>
            {renderButton()}
          </div>
        </div>
      </div>
    </div>
  );

  function renderButton() {
    if (location.pathname !== "/about") {
      return (
        <Link to="/about" className="btn">
          Read More
        </Link>
      );
    }
  }
}

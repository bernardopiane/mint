import React from "react";
import placeholder from "../img/IMAGE.png";
import "./Header.css";
import Button from "./Button";

export default function Header() {
  return (
    <div className="container section-pad">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <h1>Hello!!!</h1>
          <h1>We Are Creative Digital Agency.</h1>
          <p style={{ paddingTop: "1em", paddingBottom: "1em" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button text="Send message" />
        </div>
        <div className="col d-none d-lg-block">
          {/* <img src={placeholder} alt="Placeholder" className="img-fluid" /> */}
          <img src="https://picsum.photos/1000/1200" alt="Placeholder" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

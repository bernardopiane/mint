import React from "react";
import partner1 from "../img/partner 1.png";
import partner2 from "../img/partner 2.png";
import partner3 from "../img/partner 3.png";
import partner4 from "../img/partner 4.png";
import partner5 from "../img/partner 5.png";
import partner6 from "../img/partner 6.png";
import "./Partners.css";

export default function Partners() {
  return (
    <div style={{ backgroundColor: "#fdfdfd" }}>
      <div className="container section-pad">
        <div className="grid-partners">
          <img src={partner1} alt="partner 1" />
          <img src={partner2} alt="partner 2" />
          <img src={partner3} alt="partner 3" />
          <img src={partner4} alt="partner 4" />
          <img src={partner5} alt="partner 5" />
          <img src={partner6} alt="partner 6" />
        </div>
      </div>
    </div>
  );
}

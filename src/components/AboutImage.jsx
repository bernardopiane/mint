import React from "react";

export default function AboutImage({ image, title, subtitle }) {
  return (
    <div className="image">
      <img
        src={image}
        alt="Placeholder"
        style={{ height: "100%", width: "100%" }}
      />
      <div className="content">
        <span>{title}</span>
        <br />
        <span className="sub-text">{subtitle}</span>
      </div>
    </div>
  );
}

import React from "react";

export default function MasonryImage({ image, height, title, content }) {
  return (
    <div className="bg-transparent image">
      <img
        src={image}
        height={`${height}px`}
        width="100%"
        alt="Place"
        style={{ padding: "1em", objectFit: "cover" }}
      />
      <div className="content">
        <div className="bg-color d-flex flex-column text-center justify-content-center">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

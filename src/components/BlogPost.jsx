import React from "react";

export default function BlogPost({image, title, content, date}) {
  return (
    <div>
      <div className="overlay">
        <img
          src={image}
          alt="Placeholder"
          className="image-overlay my-4 my-lg-0"
        />
        <div className="absolute">
          <div className="content">
            <h3>Read More</h3>
          </div>
        </div>
      </div>
      <h4 className="pt-4">{title}</h4>
      <p>
        {content}
      </p>
      <p>{date}</p>
    </div>
  );
}

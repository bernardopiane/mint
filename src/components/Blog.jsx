import React from "react";
import image from "../img/IMAGE3.png";
import "./Blog.css";
import BlogPost from "./BlogPost";

export default function Blog() {
  return (
    <div style={{ backgroundColor: "#fdfdfd" }}>
      <div className="container section-pad">
        <h1>Our Blog</h1>
        <div className="row">
          <div className="col-12 col-lg-6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem maiores laborum maxime nobis suscipit accusamus optio
              tempore necessitatibus pariatur
            </p>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-lg-4">
            <BlogPost
              image={image}
              title="Super Blog Article"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            laborum sapiente, quae dolorem quibusdam excepturi."
              date="20 May 2020"
            />
          </div>
          <div className="col-12 col-lg-4">
            <BlogPost
              image={image}
              title="Super Blog Article"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            laborum sapiente, quae dolorem quibusdam excepturi."
              date="20 May 2020"
            />
          </div>
          <div className="col-12 col-lg-4">
            <BlogPost
              image={image}
              title="Super Blog Article"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            laborum sapiente, quae dolorem quibusdam excepturi."
              date="20 May 2020"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

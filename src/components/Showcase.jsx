import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Masonry from "react-masonry-css";
import placeholder from "../img/IMAGE.png";
import Button from "./Button";
import MasonryImage from "./MasonryImage";
import "./Showcase.css";

export default function Showcase() {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    750: 1,
  };

  const [all, setAll] = useState(true);
  const [branding, setBranding] = useState(false);
  const [illustration, setIllustration] = useState(false);
  const [web, setWeb] = useState(false);

  const [order, setOrder] = useState("Newest First");

  return (
    <div className="container section-pad">
      <h1>Work Showcase</h1>
      <div
        className="d-flex justify-content-between"
        style={{ paddingTop: "2em", flexFlow: "row wrap" }}
      >
        {renderButtons()}
        <div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="float-right"
              style={{
                backgroundColor: "transparent",
                color: "black",
                border: "0px",
              }}
            >
              {order}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setOrder("Newest First")}>
                Newest First
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setOrder("Oldest First")}>
                Oldest First
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setOrder("Most Popular")}>
                Most Popular
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setOrder("Least Popular")}>
                Least Popular
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Masonry
        style={{ paddingTop: "3em" }}
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <MasonryImage
          image="https://picsum.photos/200/300"
          // image={placeholder}
          height="200"
          title="Artwork"
          content="lorem"
        />
        <MasonryImage
          image="https://picsum.photos/500"
          height="500"
          title="Artwork"
          content="lorem"
        />
        <MasonryImage
          image="https://picsum.photos/400"
          height="400"
          title="Artwork"
          content="lorem"
        />
        <MasonryImage
          image="https://picsum.photos/600"
          height="600"
          title="Artwork"
          content="lorem"
        />
        <MasonryImage
          image="https://picsum.photos/300"
          height="300"
          title="Artwork"
          content="lorem"
        />
        <MasonryImage
          image="https://picsum.photos/400"
          height="400"
          title="Artwork"
          content="lorem"
        />
        {/* <div className="bg-transparent image">
          <img
            src={placeholder}
            height="200px"
            width="100%"
            alt="Place"
            style={{ padding: "1em", objectFit: "cover" }}
          />
          <div className="content flex-column text-center">
            <h3>Artwork</h3>
            <p>lorem</p>
          </div>
        </div>
        <div className="bg-transparent image">
          <img
            src={placeholder}
            height="500px"
            width="100%"
            alt="Place"
            style={{ padding: "1em", objectFit: "cover" }}
          />
          <div className="content flex-column text-center">
            <h3>Artwork</h3>
            <p>lorem</p>
          </div>
        </div>
        <div className="bg-transparent image">
          <img
            src={placeholder}
            height="400px"
            width="100%"
            alt="Place"
            style={{ padding: "1em", objectFit: "cover" }}
          />
          <div className="content flex-column text-center">
            <h3>Artwork</h3>
            <p>lorem</p>
          </div>
        </div>
        <div className="bg-transparent image">
          <img
            src={placeholder}
            height="600px"
            width="100%"
            alt="Place"
            style={{ padding: "1em", objectFit: "cover" }}
          />
          <div className="content flex-column text-center">
            <h3>Artwork</h3>
            <p>lorem</p>
          </div>
        </div>
        <div className="bg-transparent image">
          <img
            src={placeholder}
            height="300px"
            width="100%"
            alt="Place"
            style={{ padding: "1em", objectFit: "cover" }}
          />
          <div className="content flex-column text-center">
            <h3>Artwork</h3>
            <p>lorem</p>
          </div>
        </div>
        <div className="bg-transparent image">
          <img
            src={placeholder}
            height="400px"
            width="100%"
            alt="Place"
            style={{ padding: "1em", objectFit: "cover" }}
          />
          <div className="content flex-column text-center">
            <h3>Artwork</h3>
            <p>lorem</p>
          </div>
        </div> */}
      </Masonry>
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "2em" }}
      >
        <Button text="Show me more" />
      </div>
    </div>
  );

  function renderButtons() {
    return (
      <div>
        <button
          className={all ? "btn mr-4 btn-warning" : "btn mr-4"}
          onClick={() => toggleClass("All")}
        >
          All
        </button>
        <button
          className={branding ? "btn mr-4 btn-warning" : "btn mr-4"}
          onClick={() => toggleClass("Branding")}
        >
          Branding
        </button>
        <button
          className={illustration ? "btn mr-4 btn-warning" : "btn mr-4"}
          onClick={() => toggleClass("Illustration")}
        >
          Illustration
        </button>
        <button
          className={web ? "btn mr-4 btn-warning" : "btn mr-4"}
          onClick={() => toggleClass("Web")}
        >
          Web
        </button>
      </div>
    );
  }

  function toggleClass(cat) {
    switch (cat) {
      case "All":
        setAll(true);
        setBranding(false);
        setIllustration(false);
        setWeb(false);
        break;
      case "Branding":
        setAll(false);
        setBranding(!branding);
        break;
      case "Illustration":
        setAll(false);
        setIllustration(!illustration);
        break;
      case "Web":
        setAll(false);
        setWeb(!web);
        break;
      default:
        break;
    }
  }
}

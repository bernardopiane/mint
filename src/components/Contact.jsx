import React from "react";
import image from "../img/IMAGE.png";
import facebook from "../img/Shape 1.png";
import twitter from "../img/Shape 2.png";
import web from "../img/Shape 3.png";
import addr from "../img/Vector Smart Object.png";
import phone from "../img/Vector Smart Object2.png";
import mail from "../img/Vector Smart Object3.png";
import Button from "./Button";

export default function Contact() {
  return (
    <div className="container section-pad">
      <h1>Contact Us</h1>
      <div className="row" style={{ paddingTop: "5em", paddingBottom: "5em" }}>
        <div className="col-12 col-lg-6">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur, laborum! Dolore dicta neque modi temporibus
            exercitationem delectus sunt explicabo, ad labore, sapiente, nihil
            earum officia tempora! Laudantium laborum omnis obcaecati!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <h2>Send Us Message</h2>
          <input
            className="form-control my-4"
            aria-describedby="emailHelp"
            placeholder="Name"
          />
          <input
            className="form-control my-4"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control my-4"
            placeholder="Message"
          ></textarea>
          <Button text="Send Message" />
        </div>
        <div className="col-12 col-lg-6 py-5 py-lg-0">
          <img src="https://picsum.photos/900" alt="" className="img-fluid" />
          {/* <img src={image} alt="" className="img-fluid" /> */}
        </div>
      </div>
      <div
        className="d-flex justify-content-around text-center flex-column flex-sm-row"
        style={{ paddingTop: "5em", paddingBottom: "5em" }}
      >
        <div className="py-3 py-sm-0">
          <img src={addr} alt="Address" style={{ paddingBottom: "1em" }} />
          <div>1211 Awesome Avenue.</div>
          <div>NY USD</div>
        </div>
        <div className="py-3 py-sm-0">
          <img src={phone} alt="Address" style={{ paddingBottom: "1em" }} />
          <div>+00 123 456-78</div>
          <div>+00 123 456-78</div>
        </div>
        <div className="py-3 py-sm-0">
          <img src={mail} alt="Address" style={{ paddingBottom: "1em" }} />
          <div>mint@mintmail.com</div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="px-4 px-md-5">
          <img src={facebook} alt="" className="img-fluid" />
        </div>
        <div className="px-4 px-md-5">
          <img src={twitter} alt="" className="img-fluid" />
        </div>
        <div className="px-4 px-md-5">
          <img src={web} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

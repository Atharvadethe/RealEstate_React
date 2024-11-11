import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial-wrapper z-n1">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>TESTIMONIALS</h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mt-5">
            <p>
              Our Clients send us bunch of smilies with our services and we love
              them
            </p>
          </div>
        </div>
        <div className="row users">
          <div className="col text-center">
            <img className="img-fluid" src="\Assets\mukesh.jpeg" id="xyz" alt="" />
          </div>
        </div>

        <div className="row rec">
          <div className="col text-center mt-5">
            <span className="">
              "We are very pleased with the way UrbanNest handled our purchase of
              <br />
              a lake home. He was prompt, friendly, and very knowledgeable. He
              <br />
              followed up on any and all concerns.
            </span>
            <h4 className="my-3 fw-bold">Mukesh Ambani</h4>
            <img src="/Images/Group 101.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

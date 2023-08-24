import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <section id="contact" className="news-wrapper news-img">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-sm-6">
            <h2 className="text-light my-4">Talk to a Redfin agent</h2>
            <p className="text-light me-5 me-sm-0">
              Start your search with an expert local agent—there’s no pressure
              or obligation.
            </p>
          </div>
          <div className="col-6 col-sm-3 my-5 pt-3">
            <span className="text-light">
              Where are you searching for homes?
            </span>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control p-3 mt-4"
                placeholder="City,Address,Zip"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span
                className="input-group-text bg-primary mt-4"
                id="basic-addon1"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="xl"
                  style={{ color: "#ffffff" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;

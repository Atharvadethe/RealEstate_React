import React from "react";
import PrimaryButton from "../../Components/PrimaryButton";
import FeaturesCard from "./FeaturesCard";

function Features() {
  return (
    <section id="features" style={{ paddingTop: "10rem" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-5 text-center text-sm-start">
            <h2 className="mb-5">
              Our trending latest <br />
              proparty
            </h2>
            <span>
              Our unique process gives you peace of mind from home rent to
              services
            </span>
          </div>
          <div className="col-12 col-sm-6 offset-md-2 col-md-5 text-center mt-5">
            <div className="dropdown d-inline">
              <a
                className="secondary-btn text-decoration-none dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Property Type
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Low Prices
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    High Prives
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <span className="mx-4">
              <PrimaryButton name="See All Properties" />
            </span>
          </div>
        </div>
        {/* Cards  */}
        <FeaturesCard />
      </div>
    </section>
  );
}

export default Features;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <div className="col-10 text-center text-sm-start col-sm-6 col-md-6 mb-5 mx-auto">
      <div className="card mb-3 border-1 shadow">
        <div className="row g-0">
          <div className="col-12 col-md-4 text-center">
            <img src={props.style.image} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h3 className="card-title fw-bold text-primary mx-auto ms-sm-0">
                  {props.style.price}
                </h3>
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faHeart}
                  size="2xl"
                />
              </div>

              <h4 className="fw-bold my-3">{props.style.heading}</h4>
              <span className="d-block">{props.style.detail}</span>

              <FontAwesomeIcon
                className="text-primary ms-1 mt-3"
                icon={faBed}
                size="2xl"
              />

              <span className="ms-2">{props.style.bed}</span>

              <FontAwesomeIcon
                className="text-primary ms-5 mt-3"
                icon={faBath}
                size="2xl"
              />

              <span>{props.style.bed}</span>
              <button className="secondary-btn d-block mt-4 mx-auto mx-sm-0">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

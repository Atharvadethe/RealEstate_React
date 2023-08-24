import React from "react";
import "./SecondaryButton.css";

function SecondaryButton(props) {
  return (
    <a className="secondary-btn text-decoration-none mt-lg-5" href="#">
      {props.name}
    </a>
  );
}

export default SecondaryButton;

import React from "react";
import "./PrimaryButton.css";
function PrimaryButton(props) {
  return (
    <a className="primary-btn text-decoration-none" href="#">
      {props.name}
    </a>
  );
}

export default PrimaryButton;

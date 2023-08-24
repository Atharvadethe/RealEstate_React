import React from "react";

function Card(props) {
  const style = `col-8 mx-auto my-5 my-sm-0 col-sm-6 col-md-4 text-center ${props.style.shadow}`;
  return (
    <div className={style}>
      <img className="img-fluid" src={props.style.image} alt="" />
      <h3 className="mt-5">{props.style.heading}</h3>
      <span className="mt-2 mx-5">{props.style.paragraph}</span>
    </div>
  );
}

export default Card;

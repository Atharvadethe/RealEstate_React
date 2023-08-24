import React from "react";
import Card from "./Card";

function FeaturesCard() {
  let details = [
    {
      image: "Assets/Properties/image2.png",
      price: "$259,000",
      heading: "Case Alda",
      detail: "Co Rd Tribune Tribune",
      bed: "2 Beds",
      Bath: "1 Bath",
    },
    {
      image: "Assets/Properties/image1.png",
      price: "$229,000",
      heading: "Langes Beach House",
      detail: "375 Highland Ave NE UNIT 1002",
      bed: "3 Beds",
      Bath: "2 Bath",
    },
    {
      image: "Assets/Properties/image3.png",
      price: "$289,000",
      heading: "Supper Delax Home",
      detail: "1398 Lynford Dr SW, Atlanta",
      bed: "5 Beds",
      Bath: "2 Bath",
    },
    {
      image: "Assets/Properties/image4.png",
      price: "$329,000",
      heading: "Clinton Villa",
      detail: "675 Albert St NW, Atlanta",
      bed: "1 Beds",
      Bath: "1 Bath",
    },
  ];
  return (
    <div className="row mt-5 pt-5">
      <Card style={details[0]} />
      <Card style={details[1]} />
      <Card style={details[2]} />
      <Card style={details[3]} />
      <div className="row">
        <div className="col text-center">
          <img src="Assets/properties/arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;

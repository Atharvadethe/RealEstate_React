import React from "react";
import Card from "./Card";

function FeaturesCard() {
  let details = [
    {
      image: "Assets/Properties/image2.png",
      price: "₹5,59,000",
      heading: "Imperial Heights",
      detail: "29 Jaitala road IN, Nagpur",
      bed: "2 Beds",
      Bath: "1 Bath",
    },
    {
      image: "Assets/Properties/image1.png",
      price: "₹1,29,000",
      heading: "Regenta Beach House",
      detail: "1478 Bandra road IN, MUMBAI",
      bed: "3 Beds",
      Bath: "2 Bath",
    },
    {
      image: "Assets/Properties/image3.png",
      price: "₹3,89,000",
      heading: "Supper Delux Home",
      detail: "1398 GB road IN, DELHI",
      bed: "5 Beds",
      Bath: "2 Bath",
    },
    {
      image: "Assets/Properties/image4.png",
      price: "₹2,29,000",
      heading: "Mannat Villa",
      detail: "786 Juhu Street IN, MUMBAI",
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

import React from "react";
import Card from "./Card";

function ChooseUs() {
  let details = [
    {
      image: "Assets/icon 01.png",
      heading: "Buy a Home",
      paragraph:
        " With over 10 Lakhs+ homes for sale available on the website.",
    },
    {
      image: "Assets/icon 02.png",
      heading: "Rent a Home",
      paragraph:
        "With 35+ filters and custom keyword search.",
      shadow: "shadow",
    },
    {
      image: "Assets/icon 03.png",
      heading: "See neighborhood",
      paragraph:
        "With more neighbourhood insights than any other real estate website.",
    },
  ];

  return (
    <section id="about" class="choose-wrapper">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>What Can We Help You Find?</h2>
          </div>
        </div>
        <div class="row mt-5 pt-5">
          <Card style={details[0]} />
          <Card style={details[1]} />
          <Card style={details[2]} />
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;

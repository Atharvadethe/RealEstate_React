import React from "react";
import Card from "./Card";

function ChooseUs() {
  let details = [
    {
      image: "Assets/icon 01.png",
      heading: "Buy a Home",
      paragraph:
        " With over 1 million+ homes for sale available on the website, Trulia can match you with a house.",
    },
    {
      image: "Assets/icon 02.png",
      heading: "Rent a Home",
      paragraph:
        "With 35+ filters and custom keyword search, Trulia can help you find a home.",
      shadow: "shadow",
    },
    {
      image: "Assets/icon 03.png",
      heading: "See neighborhoods",
      paragraph:
        "With more neighborhood insights than any other real estate website.",
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

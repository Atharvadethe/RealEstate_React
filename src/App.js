import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./pages/navbar/Navbar";
import Banner from "./pages/Banner/Banner";
import ChooseUs from "./pages/WhyChooseUs/ChooseUs";
import Features from "./pages/Features/Features";
import Testimonial from "./pages/testimonial/Testimonial";
import NewsLetter from "./pages/NewsLetter/NewsLetter";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ChooseUs />
      <Features />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;

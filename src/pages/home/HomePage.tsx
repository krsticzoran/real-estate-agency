import React from "react";
import Header from "../../components/header/Header";
import PropertyBox from "./property-box/PropertyBox";
import About from "./about/About";
import Commercial from "./commercial/Commercial";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <PropertyBox />
      <About />
      <Commercial />
    </>
  );
};

export default HomePage;

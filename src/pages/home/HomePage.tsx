import React from "react";
import Header from "../../components/header/Header";
import PropertyBox from "./property-box/PropertyBox";
import About from "./about/About";
import Commercial from "./commercial/Commercial";
import Social from "./social/Social";
import Featured from "./featured/Featured";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <PropertyBox />
      <About />
      <Commercial />
      <Social />
      <Featured />
    </>
  );
};

export default HomePage;

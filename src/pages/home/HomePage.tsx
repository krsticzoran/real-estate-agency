import React from "react";

import PropertyBox from "./property-box/PropertyBox";
import About from "./about/About";
import Commercial from "./commercial/Commercial";
import Social from "./social/Social";
import Featured from "./featured/Featured";
import ParalexImg from "./parallax-img/ParallaxImg";

const HomePage: React.FC = () => {
  return (
    <>
      <PropertyBox />
      <About />
      <Commercial />
      <ParalexImg />
      <Social />
      <Featured />
    </>
  );
};

export default HomePage;

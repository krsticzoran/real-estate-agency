import React from "react";

import PropertyBox from "./property-box/PropertyBox";
import About from "./about/About";
import Commercial from "./commercial/Commercial";
import Social from "./social/Social";
import Featured from "./featured/Featured";
import ParalexImg from "./paralex-img/ParalexImg";

const HomePage: React.FC = () => {
  return (
    <>
      <PropertyBox />
      <About />
      <ParalexImg />
      <Commercial />
      <Social />
      <Featured />
    </>
  );
};

export default HomePage;

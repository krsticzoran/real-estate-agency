import React from "react";
import Header from "../../components/header/Header";
import PropertyBox from "./property-box/PropertyBox";
import About from "./about/About";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <PropertyBox />
      <About />
    </>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";

import PropertyBox from "./property-box/PropertyBox";
import About from "./about/About";
import Commercial from "./commercial/Commercial";
import Social from "./social/Social";
import Featured from "./featured/Featured";
import ParalexImg from "./parallax-img/ParallaxImg";

const HomePage: React.FC = () => {
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <PropertyBox />
      {showComponents && (
        <>
          <About />
          <Commercial />
          <ParalexImg />
          <Social />
          <Featured />
        </>
      )}
    </div>
  );
};

export default HomePage;

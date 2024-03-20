import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import banner from "../../../assets/images/home/header-banner-mobile.jpg";
import CommercialSpecialists from "./CommercialSpecialists";
import PropertySearch from "./PropertySearch";
import "./property-box.css";

const PropertyBox: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxBackgroundPosition, setMaxBackgroundPosition] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    const image = new Image();
    image.src = banner;
    image.onload = () => {
      setMaxBackgroundPosition(image.height - window.innerHeight);
      setImageLoaded(true);
    };
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundPosition = `${Math.min(
    scrollPosition * 0.7,
    maxBackgroundPosition
  )}px`;

  return (
    <section
      id="property--box-container"
      className={`mt-5 ${imageLoaded ? "loaded" : ""}`}
      style={{
        backgroundPosition,
        backgroundImage: `url(${banner})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="property--box-color align-content-sm-start d-flex align-content-md-center flex-wrap">
        <Container className=" property--box-subcontainer">
          <div className="row">
            <CommercialSpecialists />
            <PropertySearch />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PropertyBox;

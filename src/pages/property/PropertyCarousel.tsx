import React, { FC, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Property } from "../../types";
import "./propertylist.css";

import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropertyCarouselProps {
  property: Property;
}

const PropertyCarousel: FC<PropertyCarouselProps> = ({ property }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className="carousel-property-card">
      <Carousel
        activeIndex={activeIndex}
        onSelect={() => {}}
        interval={null} // Set the interval to null to prevent auto-rotation
      >
        {property.img && (
          <Carousel.Item key="img" data-testid="one">
            <img className="d-block w-100" src={property.img} alt="property" />
          </Carousel.Item>
        )}
        {property.img1 && (
          <Carousel.Item key="img1" data-testid="two">
            <img className="d-block w-100" src={property.img1} alt="property" />
          </Carousel.Item>
        )}
        {property.img2 && (
          <Carousel.Item key="img2" data-testid="three">
            <img className="d-block w-100" src={property.img2} alt="property" />
          </Carousel.Item>
        )}
        {property.img3 && (
          <Carousel.Item key="img3" data-testid="four">
            <img className="d-block w-100" src={property.img3} alt="property" />
          </Carousel.Item>
        )}
      </Carousel>
      <div className="carousel-controls">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={` ${activeIndex === 0 ? "disabled" : ""}`}
          data-testid="prev-button"
        >
          {<FontAwesomeIcon icon={faLeftLong} />}
        </button>
        <button
          onClick={handleNext}
          disabled={activeIndex === 3}
          className={` ${activeIndex === 3 ? "disabled" : ""}`}
          data-testid="next-button"
        >
          <FontAwesomeIcon icon={faRightLong} />
        </button>
      </div>
    </div>
  );
};

export default PropertyCarousel;

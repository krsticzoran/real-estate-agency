import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import "../about/about.css";
import "./featured.css";

import { gql, useQuery } from "@apollo/client";

import { Property } from "../../../types";
import PropertyCard from "../../../components/property/PropertyCard";

import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useMediaQuery } from "react-responsive";
import AnimatedText from "../../../components/animated/AnimatedText";
import AnimatedComponentList from "../../../components/animated/AnimatedComponentList";

const GET_PROPERTIES = gql`
  query GetProperties(
    $property: String!
    $sale: String!
    $minPrice: Int!
    $maxPrice: Int!
    $place: String!
  ) {
    search(
      property: $property
      sale: $sale
      place: $place
      minPrice: $minPrice
      maxPrice: $maxPrice
    ) {
      property
      sale
      num
      place
      price
      square
      img
      date
    }
  }
`;

const Featured: FC = () => {
  const { data } = useQuery(GET_PROPERTIES, {
    variables: {
      property: "All",
      sale: "rent",
      place: "All",
      minPrice: 0,
      maxPrice: 1000000,
    },
    context: { clientName: "endpoint2" },
  });

  const properties = data?.search ?? [];

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const chunk = (arr: any[], size: number) => {
    return arr.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  };

  return (
    <div className="featured">
      <Container>
        <Row>
          <div className="col-12">
            <h4 className="about-us">
              <AnimatedText text="FEATURED" />
            </h4>
            <h2 className="about-title">
              <AnimatedText text="Featured properties for rent" />
            </h2>
          </div>
          <div className="col-12 featured-container">
            <AnimatedComponentList index={2}>
              <Carousel
                className="caurosel-prev-icon"
                interval={null}
                indicators={false}
                prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
              >
                {isMobile
                  ? chunk(properties, 1).map(
                      (propertySet: Property[], index: number) => (
                        <Carousel.Item key={index}>
                          <Row>
                            {propertySet.map(
                              (property: Property, subIndex: number) => (
                                <div
                                  className="col-md-4 col-12 featured-card carousel-item-property-card"
                                  key={property.num}
                                >
                                  <PropertyCard property={property} />
                                </div>
                              )
                            )}
                          </Row>
                        </Carousel.Item>
                      )
                    )
                  : chunk(properties, 3).map(
                      (propertySet: Property[], index: number) => (
                        <Carousel.Item key={index}>
                          <Row>
                            {propertySet.map(
                              (property: Property, subIndex: number) => (
                                <div
                                  className="col-md-4 col-12  carousel-item-property-card"
                                  key={property.num}
                                >
                                  <PropertyCard property={property} />
                                </div>
                              )
                            )}
                          </Row>
                        </Carousel.Item>
                      )
                    )}
              </Carousel>
            </AnimatedComponentList>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Featured;

import { FC } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../about/about.css";
import "./featured.css";

import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Property } from "../../../types";

import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ maxWidth: 767 });

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
            <h4 className="about-us">FEATURED</h4>
            <h2 className="about-title">Featured properties for rent</h2>
          </div>
          <div className="col-12 featured-container">
            <Carousel
              className="caurosel-prev-icon"
              interval={null}
              indicators={false}
              prevIcon={<FontAwesomeIcon icon={faLeftLong} />}
              nextIcon={<FontAwesomeIcon icon={faRightLong} />}
            >
              {isMobile
                ? chunk(properties, 1).map(
                    (propertySet: Property[], index: number) => (
                      <Carousel.Item key={index}>
                        <Row>
                          {propertySet.map(
                            (property: Property, subIndex: number) => (
                              <div
                                className="col-md-4 col-12 featured-card"
                                key={property.num}
                              >
                                <Link to={`/property/${property.num}`}>
                                  <Card className="featured-box mb-1 mt-1">
                                    <Card.Body>
                                      <img
                                        src={property.img}
                                        alt={property.img}
                                      />
                                      <h3 className="featured-h3-title">
                                        {`${
                                          property.property
                                            .charAt(0)
                                            .toUpperCase() +
                                          property.property.slice(1)
                                        }`}
                                      </h3>
                                      <p className="featured-price">{`€${property.price}/mo`}</p>
                                      <p className="featured-day">{`${property.date}`}</p>
                                    </Card.Body>
                                  </Card>
                                </Link>
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
                                className="col-md-4 col-12 featured-card"
                                key={property.num}
                              >
                                <Link to={`/property/${property.num}`}>
                                  <Card className="featured-box mb-1 mt-1">
                                    <Card.Body>
                                      <img
                                        src={property.img}
                                        alt={property.img}
                                      />
                                      <h3 className="featured-h3-title">
                                        {`${
                                          property.property
                                            .charAt(0)
                                            .toUpperCase() +
                                          property.property.slice(1)
                                        }`}
                                      </h3>
                                      <p className="featured-price">{`€${property.price}/mo`}</p>
                                      <p className="featured-day">{`${property.date}`}</p>
                                    </Card.Body>
                                  </Card>
                                </Link>
                              </div>
                            )
                          )}
                        </Row>
                      </Carousel.Item>
                    )
                  )}
            </Carousel>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Featured;

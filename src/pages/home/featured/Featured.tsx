import { FC } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../about/about.css";
import "./featured.css";

import p2 from "../../../assets/images/home/p2.jpeg";
import p6 from "../../../assets/images/home/p6.jpeg";
import p1 from "../../../assets/images/home/p1.jpeg";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Property } from "../../../types";

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
      time
      img
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

  return (
    <div className="featured">
      <Container>
        <Row>
          <div className="col-12">
            <h4 className="about-us">FEATURED</h4>
            <h2 className="about-title">Featured properties for rent</h2>
          </div>
          <div className="col-12 featured-container">
            <Row>
              {properties
                .slice(0, 3)
                .map((property: Property, index: number) => (
                  <div className="col-md-4 col-12 featured-card">
                    <Link to={`/property/${property.num}`}>
                      <Card className="featured-box mb-1 mt-1">
                        <Card.Body>
                          <img src={property.img} alt={property.img} />
                          <h3 className="featured-h3-title">
                            {`${
                              property.property.charAt(0).toUpperCase() +
                              property.property.slice(1)
                            } `}
                          </h3>
                          <p className="featured-price">{`€${property.price}/mo`}</p>
                          <p className="featured-day">{`${property.time} days ago`}</p>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                ))}
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Featured;

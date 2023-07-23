import { FC } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../home/about/about.css";
import "../home/featured/featured.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import p6 from "../../assets/images/home/p6.jpeg";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const GET_PROPERTIES = gql`
  query GetProperties($property: String!, $sale: Boolean!) {
    property(property: $property, sale: $sale) {
      property
      rez
      sale
    }
  }
`;

interface Property {
  property: string;
  rez: string;
  sale: boolean;
}

const Rent: FC = () => {
  const { rentproperty } = useParams();

  console.log(rentproperty);
  const sale = true;

  const { data } = useQuery(GET_PROPERTIES, {
    variables: { property: rentproperty, sale },
    context: { clientName: "endpoint2" },
  });

  const properties = data?.property ?? [];

  console.log(properties);
  return (
    <>
      <Header></Header>
      <div className="featured">
        <Container>
          <Row>
            {properties.map((property: Property, index: number) => (
              <div className="col-md-4 col-12">
                <Card className="featured-box mb-1 mt-1">
                  <Card.Body>
                    <img src={p6} alt="restaurant" />
                    <h3 className="featured-h3-title">{property.property}</h3>
                    <p className="featured-price">€400/mo</p>
                    <p className="featured-day">1 day ago</p>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Rent;

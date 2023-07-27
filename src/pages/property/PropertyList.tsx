import { FC } from "react";
import { Container, Row } from "react-bootstrap";

import "./propertylist.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

import PropertyCard from "../../components/property/PropertyCard";
import { Property } from "../../components/property/PropertyCard";

const GET_PROPERTIES = gql`
  query GetProperties($property: String!, $sale: String!) {
    property(property: $property, sale: $sale) {
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

const PropertyList: FC = () => {
  const { rentproperty } = useParams();
  const { sale } = useParams();

  const { data } = useQuery(GET_PROPERTIES, {
    variables: { property: rentproperty, sale },
    context: { clientName: "endpoint2" },
  });

  const properties = data?.property ?? [];

  return (
    <>
      <Header></Header>
      <div className="search-rent-sale">
        <Container>
          <Row>
            {properties.map((property: Property, index: number) => (
              <div className="col-md-4 col-12" key={property.num}>
                <PropertyCard property={property} />
              </div>
            ))}
          </Row>
        </Container>
      </div>

      <Footer></Footer>
    </>
  );
};

export default PropertyList;

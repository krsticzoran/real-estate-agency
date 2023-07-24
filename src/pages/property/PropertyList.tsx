import { FC } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../home/about/about.css";
import "../home/featured/featured.css";
import "./propertylist.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import p6 from "../../assets/images/home/p6.jpeg";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const GET_PROPERTIES = gql`
  query GetProperties($property: String!, $sale: String!) {
    property(property: $property, sale: $sale) {
      property
      rez
      sale
      num
    }
  }
`;

interface Property {
  property: string;
  rez: string;
  sale: string;
  num: number;
}

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
                <div className="search-rent-sale-card">
                  <div className="search-rent-sale-card-img-box">
                    <img src={p6} alt="restaurant" />
                    <h4>Novi Beograd</h4>
                  </div>
                  <div className="search-rent-sale-featured">
                    <h3 className="search-rent-sale-title">
                      {`${
                        property.property.charAt(0).toUpperCase() +
                        property.property.slice(1)
                      } in Novi Beograd`}
                      <span>{`REF NO. ${property.num}`}</span>
                    </h3>
                    <p className="search-rent-sale-price">€400/mo</p>
                    <p className="search-rent-sale-m">{`25 m\u00B2`}</p>
                    <p className="search-rent-sale-day">1 day ago</p>
                  </div>
                </div>
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

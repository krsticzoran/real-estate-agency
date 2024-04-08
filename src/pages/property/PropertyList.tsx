import { FC } from "react";
import { Container, Row } from "react-bootstrap";

import "./propertylist.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import { Link, useParams } from "react-router-dom";

import PropertyCard from "../../components/property/PropertyCard";
import { Property } from "../../types";

import AnimatedComponentList from "../../components/animated/AnimatedComponentList";
import AnimatedWrapper from "../../components/animated/AnimatedWrapper";
import useGraphQLQuery, { GET_PROPERTIES } from "../../hook/useGraphQLQuery";

const PropertyList: FC = () => {
  const { rentproperty } = useParams();
  let { sale } = useParams();

  const data = useGraphQLQuery(
    GET_PROPERTIES,
    { property: rentproperty, sale },
    "endpoint2"
  );

  const properties = data ?? [];

  return (
    <AnimatedWrapper delay={0.5}>
      <div className="search-rent-sale">
        <Container>
          <Row>
            {properties.length === 0 ? (
              <>
                <div className="col-12">
                  <Link to={"/"} className="back-to-home">
                    <FontAwesomeIcon icon={faLeftLong} />
                    <span>Back to home page</span>
                  </Link>
                </div>
                <div className="no-search">
                  <p>No search results</p>
                </div>
              </>
            ) : (
              properties.map((property: Property, index: number) => (
                <div key={property.num} className="col-md-4 col-12">
                  <AnimatedComponentList index={index}>
                    <PropertyCard property={property} />
                  </AnimatedComponentList>
                </div>
              ))
            )}
          </Row>
        </Container>
      </div>
    </AnimatedWrapper>
  );
};

export default PropertyList;

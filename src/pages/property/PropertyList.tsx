import { FC } from "react";
import { Container, Row } from "react-bootstrap";

import "./propertylist.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

import PropertyCard from "../../components/property/PropertyCard";
import { Property } from "../../types";
import { motion } from "framer-motion";

const GET_PROPERTIES = gql`
  query GetProperties($property: String!, $sale: String!) {
    property(property: $property, sale: $sale) {
      property
      sale
      num
      place
      price
      square
      date
      img
    }
  }
`;

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -50,
    x: -50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.5 * index,
    },
  }),
};

const PropertyList: FC = () => {
  const { rentproperty } = useParams();
  let { sale } = useParams();
  console.log(rentproperty);

  const { data } = useQuery(GET_PROPERTIES, {
    variables: { property: rentproperty, sale },
    context: { clientName: "endpoint2" },
  });

  const properties = data?.property ?? [];

  return (
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
              <motion.div
                className="col-md-4 col-12"
                key={property.num}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default PropertyList;

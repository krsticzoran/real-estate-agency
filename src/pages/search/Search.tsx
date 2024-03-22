import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import PropertyCard from "../../components/property/PropertyCard";
import { Property } from "../../types";
import "../property/propertylist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import AnimatedWrapper from "../../components/animated/AnimatedWrapper";
import AnimatedComponentList from "../../components/animated/AnimatedComponentList";

const Search: FC = () => {
  const location = useLocation();
  const data = location.state?.data.search;

  return (
    <AnimatedWrapper delay={0.5}>
      <div className="search-rent-sale">
        <Container>
          <Row>
            {data.length === 0 ? (
              <>
                <div className="col-12">
                  <Link to={"/"} className="back-to-home ">
                    <FontAwesomeIcon icon={faLeftLong} />
                    <span>Back to home page</span>
                  </Link>
                </div>
                <div className="no-search">
                  <p>No search results</p>
                </div>
              </>
            ) : (
              data.map((property: Property, index: number) => (
                <div className="col-md-4 col-12" key={property.num}>
                  <AnimatedComponentList index={2}>
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

export default Search;

import { FC } from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import PropertyCarousel from "./PropertyCarousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import AnimatedWrapper from "../../components/animated/AnimatedWrapper";
import useGraphQLQuery from "../../graphql/hook/useGraphQLQuery";
import { GET_PROPERTY_BY_ID, GET_USERS_DATA } from "../../graphql/queries";

const PropertyItem: FC = () => {
  const { item } = useParams();
  const num = parseInt(item ?? "0");

  const propertyData = useGraphQLQuery(
    GET_PROPERTY_BY_ID,
    { num },
    "endpoint2"
  );

  const properties = propertyData ?? {};

  const user = useGraphQLQuery(
    GET_USERS_DATA,
    { name: properties?.specialist },
    "endpoint1"
  );

  return (
    <AnimatedWrapper delay={0.7}>
      <Container>
        <Row className="property-details">
          <div className="col-12 col-lg-8  property-carousel-container">
            <PropertyCarousel property={properties} />
          </div>
          <div className="col-12 col-lg-4 mt-3 mt-lg-0 user-property-card ">
            <h5 className="property-number">{`REF NO ${properties.num}`}</h5>
            <h2 className="property-details-title">
              {`${
                properties.property?.charAt(0).toUpperCase() +
                properties.property?.slice(1)
              } in ${properties.place}`}
            </h2>
            <hr />
            <Row>
              <div className="col-5">
                <h5 className="property-size-price-title">SIZE AVAILABLE</h5>
                <h2 className="property-size-price">{`${properties.square} m\u00B2`}</h2>
              </div>
              <div className="col-7">
                <h5 className="property-size-price-title">PRICE</h5>

                {properties.sale === "rent" ? (
                  <h2 className="property-size-price">{`€ ${properties.price?.toLocaleString()}/mo`}</h2>
                ) : (
                  <h2 className="property-size-price">{`€ ${
                    properties.price
                      ? (properties.price / 1000000).toFixed(2) + "M"
                      : "0"
                  }`}</h2>
                )}
              </div>
            </Row>
            <hr />
            <div className="agent-card-details">
              <Link to={`/team/${user?.user}`}>
                <h5>Specialist information</h5>
                <div className="d-flex">
                  <div className="agent-photo">
                    <img src={user?.img} alt={user?.user} />
                  </div>
                  <div className="agent-name-language">
                    <h3>{user?.name}</h3>
                    <h4>
                      10 Nikole Tesle Boulevard, New Belgrade, 5th floor,
                      Apartment 23
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="agent-phone-email-container">
              <p className="agent-phone-email">
                <FontAwesomeIcon icon={faPhone} className="phone-email-icon" />{" "}
                <Link to={`tel:${user?.phone}`}>Call {user?.name}</Link>
              </p>
              <p className="agent-phone-email">
                <span className="phone-email-icon">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
                </span>
                <Link to={`mailto:${user?.email}`}>Email {user?.name}</Link>
              </p>
              <p className="agent-phone-email">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="phone-email-icon"
                />{" "}
                <Link to={`tel:${user?.phone}`}>Whatsapp {user?.name}</Link>
              </p>
              <p>{user?.language}</p>
            </div>
          </div>
        </Row>
      </Container>
    </AnimatedWrapper>
  );
};

export default PropertyItem;

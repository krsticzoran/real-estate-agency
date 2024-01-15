import { gql } from "@apollo/client";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Property } from "../../types";
import { Container, Row } from "react-bootstrap";
import { useGetUser } from "../../hook/useGetUser";
import PropertyCarousel from "./PropertyCarousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const GET_PROPERTY = gql`
  query GetProperty($num: Int!) {
    item(num: $num) {
      property
      sale
      num
      place
      price
      square
      date
      img
      specialist
      img1
      img2
      img3
    }
  }
`;

const PropertyItem: FC = () => {
  const { item } = useParams();
  const num = parseInt(item ?? "0");

  const { data: propertyData } = useQuery(GET_PROPERTY, {
    variables: { num },
    context: { clientName: "endpoint2" },
  });

  const properties: Property = propertyData?.item ?? {};

  const user = useGetUser(properties.specialist ?? "") ?? {};

  return (
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
            <div className="col-6">
              <h5 className="property-size-price-title">SIZE AVAILABLE</h5>
              <h2 className="property-size-price">{`${properties.square} m\u00B2`}</h2>
            </div>
            <div className="col-6">
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
            <h5>Specialist information</h5>
            <div className="d-flex">
              <div className="agent-photo">
                <img src={user.img} alt={user.user} />
              </div>
              <div className="agent-name-language">
                <h3>{user.name}</h3>
                <h4>
                  10 Nikole Tesle Boulevard, New Belgrade, 5th floor, Apartment
                  23
                </h4>
              </div>
            </div>
          </div>
          <div className="agent-phone-email-container">
            <p className="agent-phone-email">
              <FontAwesomeIcon icon={faPhone} className="phone-email-icon" />{" "}
              <Link to={`tel:${user.phone}`}>Call {user.name}</Link>
            </p>
            <p className="agent-phone-email">
              <span className="phone-email-icon">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
              </span>
              <Link to={`mailto:${user.email}`}>Email {user.name}</Link>
            </p>
            <p className="agent-phone-email">
              <FontAwesomeIcon icon={faWhatsapp} className="phone-email-icon" />{" "}
              <Link to={`tel:${user.phone}`}>Whatsapp {user.name}</Link>
            </p>
            <p>{user.language}</p>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default PropertyItem;

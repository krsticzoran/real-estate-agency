import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./team.css";

import { Link } from "react-router-dom";

import { Property } from "../../types";
import PropertyCard from "../../components/property/PropertyCard";

import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import AnimatedWrapper from "../../components/animated/AnimatedWrapper";
import useGraphQLQuery from "../../hook/useGraphQLQuery";
import { GET_USER, GET_USERS_DATA } from "../../graphql/queries";

const Member: FC = () => {
  const { memberName } = useParams();

  const user = useGraphQLQuery(
    GET_USERS_DATA,
    { name: memberName },
    "endpoint1"
  );

  const data = useGraphQLQuery(
    GET_USER,
    { specialist: memberName },
    "endpoint2"
  );

  const properties = data ?? [];

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const oveviewMember = user.overview?.split(".");

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
    <AnimatedWrapper delay={0.5}>
      <div className="team">
        <Container>
          <Row>
            <div className="col-12 col-lg-4 member-data-box">
              <img src={user.img} alt="staff" />
              <h3 className="member-name">{user.name}</h3>
              <p>Speaks: {user.language}</p>
            </div>
            <div className="col-12 col-lg-4 member-overview">
              <h3 className="member-name">Overview</h3>
              {user.overview
                ?.split(".")
                .slice(0, -1)
                .map((sentence: any) => (
                  <p>{sentence}.</p>
                ))}
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <div className="staff-card ">
                {" "}
                <h2>Contact {user.name}</h2>
                <hr />
                <Row>
                  <div className="staff-phone col-xl-5">
                    <h5>Phone Number</h5>
                    <h2 className="mb-3">
                      <Link to={`tel:${user.phone}`}>{user.phone}</Link>
                    </h2>
                  </div>
                  <div className="staff-phone col-xl-5">
                    <h5>email</h5>
                    <h2>
                      <Link to={`mailto:${user.email}`}>{user.email}</Link>
                    </h2>
                  </div>
                </Row>
                <div className="staff-stats ">
                  <h5>{`${user.name} stats `.toUpperCase()}</h5>
                  <Row className="staff-numbers-card">
                    <div className="col-6">
                      <p>{`Listings`.toUpperCase()}</p>
                      <p className="staff-numbers">{user.listings}</p>
                    </div>
                    <div className="col-6">
                      <p>PROPERTIES RENTED</p>
                      <p className="staff-numbers">{user.propreties}</p>
                    </div>
                    <div className="col-12">
                      <p>EXPERIENCE</p>
                      <p className="staff-numbers">{user.experience}</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>

            <hr />
            <div className="col-12 staff-property">
              <h4>properties</h4>
              <h2>{`Properties listed by ${user.name}`}</h2>
            </div>

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
                                className="col-md-4 col-12 property-card-member"
                                key={property.num}
                              >
                                <PropertyCard property={property} />
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
                                className="col-md-4 col-12  property-card-member "
                                key={property.num}
                              >
                                <PropertyCard property={property} />
                              </div>
                            )
                          )}
                        </Row>
                      </Carousel.Item>
                    )
                  )}
            </Carousel>
          </Row>
        </Container>
      </div>
    </AnimatedWrapper>
  );
};

export default Member;

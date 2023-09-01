import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./team.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import { useGetUser } from "../../hook/useGetUser";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import { Property } from "../../types";
import PropertyCard from "../../components/property/PropertyCard";

const GET_PROPERTIES = gql`
  query GetProperties($specialist: String!) {
    staff(specialist: $specialist) {
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

const Member: FC = () => {
  const { memberName } = useParams();

  const user = useGetUser(memberName) ?? {};

  const { data } = useQuery(GET_PROPERTIES, {
    variables: { specialist: memberName },
    context: { clientName: "endpoint2" },
  });

  const properties = data?.staff ?? [];

  return (
    <>
      <Header />
      <div className="team">
        <Container>
          <Row>
            <div className="col-12 col-lg-4 member-data-box">
              <img src={user.img} alt="staff" />
              <h3 className="member-name">{user.name}</h3>
              <p>Speaks: {user.language}</p>
            </div>
            <div className="col-12 col-lg-4">
              <h3 className="member-name">Overview</h3>
              <p>{user.overview}</p>
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

            {properties.slice(0, 6).map((property: Property, index: number) => (
              <div className="col-md-4 col-12" key={property.num}>
                <PropertyCard property={property} />
              </div>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Member;

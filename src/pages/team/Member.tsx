import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useImagePath } from "../../hook/useImagePath";
import "./team.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const GET_USERS = gql`
  query GetUser($name: String!) {
    user(user: $name) {
      user
      name
      email
      overview
      language
      phone
    }
  }
`;
interface User {
  user: string;
  name: string;
  email: string;
  overview: string;
  language: string;
  phone: string;
}

const Member: FC = () => {
  const { memberName } = useParams();

  const { data } = useQuery(GET_USERS, {
    variables: { name: memberName },
  });

  const user: User = data?.user ?? {};
  console.log();

  const getImagePath = useImagePath(user.user);

  return (
    <>
      <Header />
      <div className="team">
        <Container>
          <Row>
            <div className="col-12 col-md-4 member-data-box">
              <img src={getImagePath} alt="staff" />
              <h3 className="member-name">{user.name}</h3>
              <p>Speaks: {user.language}</p>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="member-name">Overview</h3>
              <p>{user.overview}</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="staff-card">
                {" "}
                <h2>Contact {user.name}</h2>
                <hr />
                <Row>
                  <div className="col-md-5">
                    <h5>Phone Number</h5>
                    <h2>
                      <Link to={`tel:${user.phone}`}>{user.phone}</Link>
                    </h2>
                  </div>
                  <div className="col-md-5">
                    <h5>email</h5>
                    <h2>
                      <Link to={`mailto:${user.email}`}>{user.email}</Link>
                    </h2>
                  </div>
                </Row>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Member;

import { FC } from "react";
import { Link } from "react-router-dom";

import { Card, Container, Row } from "react-bootstrap";

import "./team.css";

import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

import AnimatedComponentList from "../../components/animated/AnimatedComponentList";
import AnimatedText from "../../components/animated/AnimatedText";

interface User {
  user: string;
  name: string;
  email: string;
  overview: string;
  language: string;
  img: string;
}

const GET_USERS = gql`
  query {
    staff {
      users {
        user
        name
        email
        overview
        language
        img
      }
    }
  }
`;

const Team: FC = () => {
  const { data } = useQuery(GET_USERS);

  console.log(data);

  const staff: User[] = data?.staff?.users ?? [];

  return (
    <div className="team">
      <Container>
        <h2 className="team-title">
          <AnimatedText text="Team" />
        </h2>
        <h4>
          <AnimatedText text="Our Specialist" />
        </h4>
        <Row>
          {staff.map((member, index) => (
            <div key={member.user} className="col-lg-4 col-sm-12 team-card">
              <Link to={`/team/${member.user}`}>
                <AnimatedComponentList index={index}>
                  <Card>
                    <Card.Body>
                      <img src={member.img} alt="staff" />
                      <div>
                        <h5 className="team-card-title">{member.name}</h5>
                        <p>
                          <strong>Speaks:</strong> {member.language}
                          <br />
                          <strong>Email:</strong> {member.email}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </AnimatedComponentList>
              </Link>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Team;

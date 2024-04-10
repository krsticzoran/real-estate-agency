import { FC } from "react";
import { Link } from "react-router-dom";

import { Card, Container, Row } from "react-bootstrap";

import "./team.css";

import { useQuery } from "@apollo/client";

import AnimatedComponentList from "../../components/animated/AnimatedComponentList";
import AnimatedText from "../../components/animated/AnimatedText";
import AnimatedHoverCard from "../../components/animated/AnimatedHoverCard";
import { GET_USERS } from "../../graphql/queries";

interface User {
  user: string;
  name: string;
  email: string;
  overview: string;
  language: string;
  img: string;
}

const Team: FC = () => {
  const { data } = useQuery(GET_USERS);

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
                  <AnimatedHoverCard>
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
                  </AnimatedHoverCard>
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

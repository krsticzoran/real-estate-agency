import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import "./about.css";

const About: FC = () => {
  return (
    <div className="about">
      <Container>
        <Row>
          <AboutLeft />
          <AboutRight />
        </Row>
      </Container>
    </div>
  );
};

export default About;

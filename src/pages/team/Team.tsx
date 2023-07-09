import { FC } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Card, Container, Row } from "react-bootstrap";
import { useImagePath } from "../../hook/team";
import { staff } from "../../assets/data/myData";

import "./team.css";

const Team: FC = () => {
  const userImg = [
    useImagePath("stefan"),
    useImagePath("marko"),
    useImagePath("jovan"),
  ];

  return (
    <>
      <Header />
      <div className="team">
        <Container>
          <h2 className="team-title">Team</h2>
          <h4>Our Specialist</h4>
          <Row>
            {staff.map((member, index) => (
              <div key={member.user} className="col-lg-4 col-sm-12 team-card">
                <Link to={`/team/${member.user}`}>
                  <Card>
                    <Card.Body>
                      <img src={userImg[index]} alt="staff" />
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
                </Link>
              </div>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Team;

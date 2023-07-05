import { FC } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Card, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/team/img1.jpeg";
import img2 from "../../assets/images/team/img2.jpeg";
import img3 from "../../assets/images/team/img3.jpeg";

import "./team.css";

const Team: FC = () => {
  return (
    <>
      <Header />
      <div className="team">
        <Container>
          <Row>
            <div className="col-lg-4 col-sm-12 team-card">
              <Link to="/team/stefan">
                <Card>
                  <Card.Body>
                    <img src={img1} alt="staff" />
                    <div>
                      <h5 className="team-card-title">Stefan Stefanovic</h5>
                      <p>
                        <strong>Speaks:</strong> English | Serbian
                        <br />
                        <strong>Email:</strong> stefan@gmail.com
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-12 team-card">
              <Link to="/team/marko">
                <Card>
                  <Card.Body>
                    <img src={img2} alt="staff" />
                    <div>
                      <h5 className="team-card-title">Marko Markovic</h5>
                      <p>
                        <strong>Speaks:</strong> English | Serbian | Spanish
                        <br />
                        <strong>Email:</strong> marko@gmail.com
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-12 team-card">
              <Link to="/team/jovan">
                <Card>
                  <Card.Body>
                    <img src={img3} alt="staff" />
                    <div>
                      <h5 className="team-card-title">Jovan Jovanovic</h5>
                      <p>
                        <strong>Speaks:</strong> English | Serbian | French
                        <br />
                        <strong>Email:</strong> jovan@gmail.com
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Team;

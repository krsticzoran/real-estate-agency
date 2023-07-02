import { FC } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../about/about.css";
import "./featured.css";

import p2 from "../../../assets/images/home/p2.jpeg";
import p6 from "../../../assets/images/home/p6.jpeg";
import p1 from "../../../assets/images/home/p1.jpeg";

const Featured: FC = () => {
  return (
    <div className="featured">
      <Container>
        <Row>
          <div className="col-12">
            <h4 className="about-us">FEATURED</h4>
            <h2 className="about-title">Featured properties for rent</h2>
          </div>
          <div className="col-12 featured-container">
            <Row>
              <div className="col-md-4 col-12">
                <Card className="featured-box mb-1 mt-1">
                  <Card.Body>
                    <img src={p6} alt="restaurant" />
                    <h3 className="featured-h3-title">Restaurants</h3>
                    <p className="featured-price">€400/mo</p>
                    <p className="featured-day">1 day ago</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card className="featured-box mb-1 mt-1">
                  <Card.Body>
                    <img src={p1} alt="restaurant" />
                    <h3 className="featured-h3-title">Factories</h3>
                    <p className="featured-price">€3000/mo</p>
                    <p className="featured-day">10 days ago</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card className="featured-box mb-1 mt-1">
                  <Card.Body>
                    <img src={p2} alt="shop" />
                    <h3 className="featured-h3-title">Shops</h3>
                    <p className="featured-price">€800/mo</p>
                    <p className="featured-day">15 days ago</p>
                  </Card.Body>
                </Card>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Featured;

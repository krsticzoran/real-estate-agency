import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import "./social.css";
import img1 from "../../../assets/images/home/social-photo.png";
import SocialData from "./SocialData";

const Social: FC = () => {
  return (
    <div className="social">
      <Container>
        <div className="social-box">
          <Row>
            <div className="col-md-6">
              <div className="social-img-box">
                <img src={img1} alt="social" />
              </div>
            </div>

            <div className="col-md-6">
              <SocialData />
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Social;

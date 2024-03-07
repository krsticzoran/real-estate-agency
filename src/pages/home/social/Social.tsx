import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import "./social.css";
import img1 from "../../../assets/images/home/social-photo.png";
import SocialData from "./SocialData";
import AnimatedComponentList from "../../../components/animated/AnimatedComponentList";
import LazyImage from "../../../components/optimization/LazyImage";

const Social: FC = () => {
  return (
    <div className="social">
      <Container>
        <div className="social-box">
          <Row>
            <div className="col-md-6">
              <AnimatedComponentList index={2}>
                <div className="social-img-box">
                  <LazyImage src={img1} alt="social" />
                </div>
              </AnimatedComponentList>
            </div>

            <div className="col-md-6">
              <AnimatedComponentList index={3}>
                <SocialData />
              </AnimatedComponentList>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Social;

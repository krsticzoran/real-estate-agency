import { FC } from "react";
import "./social.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Card, Row } from "react-bootstrap";
import t1 from "../../../assets/images/home/t1.jpeg";
import t2 from "../../../assets/images/home/t2.jpeg";
import t3 from "../../../assets/images/home/t3.jpeg";
import t4 from "../../../assets/images/home/t4.jpeg";
import LazyImage from "../../../components/optimization/LazyImage";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: 2,
      type: "spring",
      damping: 12,
      stiffness: 35,
    },
  },
};

const SocialData: FC = () => {
  return (
    <motion.div
      className="social-data position-absolute"
      variants={fadeInAnimationVariants}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Carousel
        indicators={false}
        prevIcon={<FontAwesomeIcon icon={faLeftLong} />}
        nextIcon={<FontAwesomeIcon icon={faRightLong} />}
      >
        <Carousel.Item>
          <Card>
            <Card.Body style={{ backgroundColor: "rgba(242, 235, 232, 0.8)" }}>
              <Row>
                <div className="col-2">
                  <LazyImage src={t1} alt="testimonial" />
                </div>
                <div className="col-10 testimonial-box">
                  <p>Maja Markovic</p>
                  <p className="testimonial-small-text">2 months ago</p>
                </div>
              </Row>
              <div>
                <p>
                  Always super good service, polite, serious and he will find
                  what you really want, have met a lot of real estate men but no
                  one like him, Petar is absolutely on the top!
                </p>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body style={{ backgroundColor: "rgba(242, 235, 232, 0.8)" }}>
              <Row>
                <div className="col-2 ">
                  <LazyImage src={t2} alt="testimonial" />
                </div>
                <div className="col-10 testimonial-box">
                  <p>Milos Milosevic</p>
                  <p className="testimonial-small-text">1 years ago</p>
                </div>
              </Row>
              <div>
                <p>
                  Fantastic team of specialist ready to help finding the perfect
                  commercial property!
                </p>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body style={{ backgroundColor: "rgba(242, 235, 232, 0.8)" }}>
              <Row>
                <div className="col-2">
                  <LazyImage src={t3} alt="testimonial" />
                </div>
                <div className="col-10 testimonial-box">
                  <p>Stefan Stefanovic</p>
                  <p className="testimonial-small-text">6 months ago</p>
                </div>
              </Row>
              <div>
                <p>
                  I highly recommend Trifun Trifunovic. He is a a unique agent
                  who rented one of my apartments twice in the same seven day
                  period highly professional young lad, and the moment he called
                  me about having a serious commercial customer based on trust
                  in the guy I actually met up and we concluded.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body style={{ backgroundColor: "rgba(242, 235, 232, 0.8)" }}>
              <Row>
                <div className="col-2">
                  <LazyImage src={t4} alt="testimonial" />
                </div>
                <div className="col-10 testimonial-box">
                  <p>Milos Markovic</p>
                  <p className="testimonial-small-text">3 years ago</p>
                </div>
              </Row>
              <div>
                <p>
                  Highly recommended for a professional letting agent service
                  which in my opinion can be very difficult to find. Mirko has
                  been my agent for commercial and residential properties for
                  the last few years and I can speak very highly about the great
                  service he provides. Thanks guys!
                </p>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </motion.div>
  );
};

export default SocialData;

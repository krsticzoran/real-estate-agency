import { FC, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import "./commercial.css";
import img1 from "../../../assets/images/home/retail.png";
import img4 from "../../../assets/images/home/office.png";
import img2 from "../../../assets/images/home/restaurant.png";
import img3 from "../../../assets/images/home/industrial.png";
import { Link } from "react-router-dom";
import AnimatedComponentList from "../../../components/animated/AnimatedComponentList";
import AnimatedText from "../../../components/animated/AnimatedText";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

import { useGePropertyAviable } from "../../../hook/useGetPropertyAviable";

const arr = ["shops", "catering", "warehouses", "offices"];

const Commercial: FC = () => {
  const ref = useRef(null);
  const refTwo = useRef(null);

  const isInView = useInView(ref);
  const isInViewTwo = useInView(refTwo);
  const endValue = [
    useGePropertyAviable(arr[0]),
    useGePropertyAviable(arr[1]),
    useGePropertyAviable(arr[2]),
    useGePropertyAviable(arr[3]),
  ];
  return (
    <div className="commercial pt-1 pt-md-2 pb-2 pb-md-4 ">
      <div className="d-flex justify-content-center ">
        <h2 className=" mb-md-3 commercial-big-title">
          <AnimatedText text=" Commercial Property to Rent" />
        </h2>
      </div>

      <Container>
        <Row>
          <div className="col">
            <AnimatedComponentList index={2}>
              <Link to={"/rent/shops"}>
                <div className="commercial-item" ref={ref}>
                  <figure className="pt-5">
                    <img src={img1} alt="retail" />
                  </figure>
                  <h5>Retails</h5>

                  <p>
                    {isInView && (
                      <CountUp
                        start={0}
                        end={endValue[0]}
                        duration={2}
                        delay={2}
                      />
                    )}
                  </p>
                </div>
              </Link>
            </AnimatedComponentList>
          </div>
          <div className="col">
            <AnimatedComponentList index={2}>
              <Link to={"/rent/catering"}>
                <div className="commercial-item">
                  <figure className="pt-5">
                    <img src={img2} alt="restaurant" />
                  </figure>
                  <h5>Restaurants</h5>
                  <p>
                    {isInView && (
                      <CountUp
                        start={0}
                        end={endValue[1]}
                        duration={2}
                        delay={2}
                      />
                    )}
                  </p>
                </div>
              </Link>
            </AnimatedComponentList>
          </div>
          <div className="col">
            <AnimatedComponentList index={2}>
              <Link to={"/rent/warehouses"}>
                <div className="commercial-item" ref={refTwo}>
                  <figure className="pt-5">
                    <img src={img3} alt="industrial" />
                  </figure>
                  <h5>Industrials</h5>
                  <p>
                    {isInViewTwo && (
                      <CountUp
                        start={0}
                        end={endValue[2]}
                        duration={2}
                        delay={2}
                      />
                    )}
                  </p>
                </div>
              </Link>
            </AnimatedComponentList>
          </div>

          <div className="col">
            <AnimatedComponentList index={2}>
              <Link to={"/rent/offices"}>
                <div className="commercial-item">
                  <figure className="pt-5">
                    <img src={img4} alt="offices" />
                  </figure>

                  <h5>Offices</h5>
                  <p>
                    {isInViewTwo && (
                      <CountUp
                        start={0}
                        end={endValue[3]}
                        duration={3}
                        delay={2}
                      />
                    )}
                  </p>
                </div>
              </Link>
            </AnimatedComponentList>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Commercial;

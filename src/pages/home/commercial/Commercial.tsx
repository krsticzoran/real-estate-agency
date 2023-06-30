import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import "./commercial.css";
import img1 from "../../../assets/images/home/retail.png";
import img4 from "../../../assets/images/home/office.png";
import img2 from "../../../assets/images/home/restaurant.png";
import img3 from "../../../assets/images/home/industrial.png";

// TODO: Implement logic to handle click on each div and perform property search

const Commercial: FC = () => {
  return (
    <div className="commercial pt-1 pt-md-2 pb-2 pb-md-4 ">
      <h2 className="commercial-big-title mb-md-3  ">
        Commercial Property to Rent
      </h2>
      <Container>
        <Row>
          <div className="col">
            <div className="commercial-item">
              <figure className="pt-5">
                <img src={img1} alt="retail" />
              </figure>
              <h5>Retails</h5>
              <p>215 available</p>
            </div>
          </div>
          <div className="col">
            <div className="commercial-item">
              <figure className="pt-5">
                <img src={img2} alt="restaurant" />
              </figure>
              <h5>Restaurants</h5>
              <p>313 available</p>
            </div>
          </div>
          <div className="col">
            <div className="commercial-item">
              <figure className="pt-5">
                <img src={img3} alt="industrial" />
              </figure>
              <h5>Industrials</h5>
              <p>715 available</p>
            </div>
          </div>
          <div className="col">
            <div className="commercial-item">
              <figure className="pt-5">
                <img src={img4} alt="offices" />
              </figure>

              <h5>Offices</h5>
              <p>413 available</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Commercial;

import { gql } from "@apollo/client";
import { FC } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useQuery } from "@apollo/client";
import { Card, Row } from "react-bootstrap";
import "../dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GET_PROPERTIES = gql`
  query GetProperties($sale: String!) {
    propertyAll(sale: $sale) {
      property
      sale
      num
      place
      price
      square
      time
      img
    }
  }
`;

interface PropertyType {
  property: string;
  num: number;
  place: string;
  price: number;
  square: number;
  time: number;
  img: string;
}

const CustomProgressBar: FC = () => {
  const { data } = useQuery(GET_PROPERTIES, {
    variables: { sale: "rent" },
    context: { clientName: "endpoint2" },
  });

  const propertyRent = data?.propertyAll ?? [];

  const officesRent: PropertyType[] = propertyRent.filter(
    (data: PropertyType) => data.property === "offices"
  );
  const shopsRent: PropertyType[] = propertyRent.filter(
    (data: PropertyType) => data.property === "shops"
  );
  const warehousesRent: PropertyType[] = propertyRent.filter(
    (data: PropertyType) => data.property === "warehouses"
  );

  const cateringRent: PropertyType[] = propertyRent.filter(
    (data: PropertyType) => data.property === "catering"
  );

  const propertyS = useQuery(GET_PROPERTIES, {
    variables: { sale: "sale" },
    context: { clientName: "endpoint2" },
  });

  const propertySale = propertyS.data?.propertyAll ?? [];

  const percentRent = Number(
    (
      (propertyRent.length / (propertyRent.length + propertySale.length)) *
      100
    ).toFixed(0)
  );

  console.log(percentRent);

  return (
    <div>
      <div className="progress-bar-container d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <div className="d-flex  ">
            <div className="col-sm-1 h-100">
              <FontAwesomeIcon className="progress-bar-icon" icon={faHouse} />
            </div>
            <div className="col-sm-11 ">
              <h4>
                Total Properties {propertyRent.length + propertySale.length}
              </h4>
              <ProgressBar>
                <ProgressBar
                  striped
                  style={{ backgroundColor: "#fff" }}
                  now={percentRent}
                  key={1}
                />
                <ProgressBar
                  style={{ backgroundColor: "#e9ecef" }}
                  now={100 - percentRent}
                  key={2}
                />
              </ProgressBar>
              <div className="d-flex justify-content-between ">
                <span>{propertyRent.length} rent</span>
                <span>{propertySale.length} sale</span>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <div className="circular-rent">
        <Row>
          <div className="col-sm-12 col-lg-6">
            <Card>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h2>{officesRent.length}</h2>
                  <p>Offices for Rent</p>
                  <span>total amount</span>
                </div>
                <div>
                  <CircularProgressbar
                    className="circular-progressbar"
                    value={+(officesRent.length / propertyRent.length) * 100}
                    text={`${
                      (officesRent.length / propertyRent.length) * 100
                    }%`}
                    styles={buildStyles({
                      pathTransitionDuration: 1,
                      pathColor: "#3B4CB8",
                      textColor: "#3B4CB8",
                      trailColor: "#dbdef3",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-6">
            <Card>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h2>{shopsRent.length}</h2>
                  <p>Shops for Rent</p>
                  <span>total amount</span>
                </div>
                <div>
                  <CircularProgressbar
                    className="circular-progressbar"
                    value={+(shopsRent.length / propertyRent.length) * 100}
                    text={`${(shopsRent.length / propertyRent.length) * 100}%`}
                    styles={buildStyles({
                      pathTransitionDuration: 1,
                      pathColor: "#3B4CB8",
                      textColor: "#3B4CB8",
                      trailColor: "#dbdef3",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-lg-6">
            <Card>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h2>{warehousesRent.length}</h2>
                  <p>Warehouses for Rent</p>
                  <span>total amount</span>
                </div>
                <div>
                  <CircularProgressbar
                    className="circular-progressbar"
                    value={+(warehousesRent.length / propertyRent.length) * 100}
                    text={`${
                      (warehousesRent.length / propertyRent.length) * 100
                    }%`}
                    styles={buildStyles({
                      pathTransitionDuration: 1,
                      pathColor: "#3B4CB8",
                      textColor: "#3B4CB8",
                      trailColor: "#dbdef3",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-lg-6">
            <Card>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <h2>{cateringRent.length}</h2>
                  <p>Catering for Rent</p>
                  <span>total amount</span>
                </div>
                <div>
                  <CircularProgressbar
                    className="circular-progressbar"
                    value={+(cateringRent.length / propertyRent.length) * 100}
                    text={`${
                      (cateringRent.length / propertyRent.length) * 100
                    }%`}
                    styles={buildStyles({
                      pathTransitionDuration: 1,
                      pathColor: "#3B4CB8",
                      textColor: "#3B4CB8",
                      trailColor: "#dbdef3",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default CustomProgressBar;

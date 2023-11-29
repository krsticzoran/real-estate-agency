import { gql } from "@apollo/client";
import { FC } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useQuery } from "@apollo/client";
import { Row } from "react-bootstrap";
import "../dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

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

const CustomProgressBar: FC = () => {
  const { data } = useQuery(GET_PROPERTIES, {
    variables: { sale: "rent" },
    context: { clientName: "endpoint2" },
  });
  const propertyRent = data?.propertyAll.length ?? [].length;

  const propertyS = useQuery(GET_PROPERTIES, {
    variables: { sale: "sale" },
    context: { clientName: "endpoint2" },
  });

  const propertySale = propertyS.data?.propertyAll.length ?? [].length;

  const percentRent = (
    (propertyRent / (propertyRent + propertySale)) *
    100
  ).toFixed(0);

  return (
    <div className="progress-bar-container d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <div className="d-flex  ">
          <div className="col-sm-1 h-100">
            <FontAwesomeIcon className="progress-bar-icon" icon={faHouse} />
          </div>
          <div className="col-sm-11 ">
            <h4>Total Properties {propertyRent + propertySale}</h4>
            <ProgressBar>
              <ProgressBar
                striped
                style={{ backgroundColor: "#fff" }}
                now={Number(percentRent)}
                key={1}
              />
              <ProgressBar
                style={{ backgroundColor: "#e9ecef" }}
                now={100 - Number(percentRent)}
                key={2}
              />
            </ProgressBar>
            <div className="d-flex justify-content-between ">
              <span>{propertyRent} rent</span>
              <span>{propertySale} sale</span>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default CustomProgressBar;

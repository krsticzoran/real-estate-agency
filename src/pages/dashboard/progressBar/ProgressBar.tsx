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

  console.log(officesRent, shopsRent, warehousesRent, cateringRent);

  const propertyS = useQuery(GET_PROPERTIES, {
    variables: { sale: "sale" },
    context: { clientName: "endpoint2" },
  });

  const propertySale = propertyS.data?.propertyAll ?? [];

  const percentRent = (
    (propertyRent.lenght / (propertyRent.lenght + propertySale.length)) *
    100
  ).toFixed(0);

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
                <span>{propertyRent.length} rent</span>
                <span>{propertySale.length} sale</span>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <div>{warehousesRent.length}</div>
    </div>
  );
};

export default CustomProgressBar;

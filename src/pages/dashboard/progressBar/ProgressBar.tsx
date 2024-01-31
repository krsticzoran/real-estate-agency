import { gql } from "@apollo/client";
import { FC } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useQuery } from "@apollo/client";
import { Row } from "react-bootstrap";
import "../dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "react-circular-progressbar/dist/styles.css";
import CircularRent from "./Circular";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const GET_PROPERTIES = gql`
  query GetProperties($sale: String!) {
    propertyAll(sale: $sale) {
      property
      sale
      num
      place
      price
      square
      date
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
  date: string;
  img: string;
}

const CustomProgressBar: FC = () => {
  const navigate = useNavigate();
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

  const officesSale: PropertyType[] = propertySale.filter(
    (data: PropertyType) => data.property === "offices"
  );

  const shopsSale: PropertyType[] = propertySale.filter(
    (data: PropertyType) => data.property === "shops"
  );

  const warehousesSale: PropertyType[] = propertySale.filter(
    (data: PropertyType) => data.property === "warehouses"
  );

  const cateringSale: PropertyType[] = propertySale.filter(
    (data: PropertyType) => data.property === "catering"
  );

  const percentRent = Number(
    (
      (propertyRent.length / (propertyRent.length + propertySale.length)) *
      100
    ).toFixed(0)
  );

  return (
    <div>
      <Link
        to={"/dashboard/items-all"}
        className="progress-bar-container d-flex justify-content-center align-items-center"
      >
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
      </Link>

      <div className="circular-rent">
        <Row>
          <CircularRent
            propertyName={"Offices for Rent"}
            property={officesRent}
            propertyAll={propertyRent}
            color="#3B4CB8"
            colorCircular="#dbdef3"
          />
          <CircularRent
            propertyName={"Shops for Rent"}
            property={shopsRent}
            propertyAll={propertyRent}
            color="#3B4CB8"
            colorCircular="#dbdef3"
          />
          <CircularRent
            propertyName={"Warehouses for Rent"}
            property={warehousesRent}
            propertyAll={propertyRent}
            color="#3B4CB8"
            colorCircular="#dbdef3"
          />
          <CircularRent
            propertyName={"Catering for Rent"}
            property={cateringRent}
            propertyAll={propertyRent}
            color="#3B4CB8"
            colorCircular="#dbdef3"
          />
        </Row>
      </div>
      <div className="circular-rent">
        <Row>
          <CircularRent
            propertyName={"Offices for Sale"}
            property={officesSale}
            propertyAll={propertySale}
            color="#37D159"
            colorCircular="#d5f5dc"
          />
          <CircularRent
            propertyName={"Shops for Sale"}
            property={shopsSale}
            propertyAll={propertySale}
            color="#37D159"
            colorCircular="#d5f5dc"
          />
          <CircularRent
            propertyName={"Warehouses for Sale"}
            property={warehousesSale}
            propertyAll={propertySale}
            color="#37D159"
            colorCircular="#d5f5dc"
          />
          <CircularRent
            propertyName={"Catering for Sale"}
            property={cateringSale}
            propertyAll={propertySale}
            color="#37D159"
            colorCircular="#d5f5dc"
          />
        </Row>
      </div>
    </div>
  );
};

export default CustomProgressBar;

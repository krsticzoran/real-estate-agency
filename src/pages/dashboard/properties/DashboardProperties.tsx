import { FC } from "react";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

interface PropertyType {
  property: string;
  num: number;
  place: string;
  price: number;
  square: number;
  time: number;
  img: string;
}

const DashboardProperties: FC = () => {
  const location = useLocation();
  const data: PropertyType[] | undefined = location.state?.data;

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Property</th>
            <th>Position</th>
            <th>Square</th>
            <th>
              Prices
              <FontAwesomeIcon icon={faSort} />
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item: PropertyType, index: number) => (
              <tr key={index}>
                <td>{item.num}</td>
                <td>{item.property}</td>
                <td>{item.place}</td>
                <td>{`${item.square} m\u00B2`}</td>
                <td>{`${item.price.toLocaleString()} €`}</td>
                <Button>Delete</Button>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardProperties;

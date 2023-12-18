import { FC, useEffect, useState } from "react";
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
  const [renderData, setRenderData] = useState<PropertyType[] | undefined>(
    undefined
  );
  useEffect(() => {
    setRenderData(data);
  }, []);

  const handleSort = (
    event: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGSVGElement>
  ) => {
    const sortProperty = event.currentTarget.getAttribute("data-position");
    if (sortProperty && renderData) {
      setRenderData((prevState) => {
        if (prevState) {
          return [...prevState].sort((a, b) => {
            if (sortProperty === "square") {
              return a.square - b.square;
            }
            if (sortProperty === "price") {
              return a.price - b.price;
            }
            if (sortProperty === "place") {
              return a.place.localeCompare(b.place);
            }
            return 0;
          });
        }
        return prevState;
      });
    }
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Property</th>
            <th>
              <div className="d-flex justify-content-between">
                Position
                <FontAwesomeIcon
                  icon={faSort}
                  style={{ color: "rgba(0, 0, 0, 0.05)" }}
                  onClick={handleSort}
                  data-position="place"
                />
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between">
                Square
                <FontAwesomeIcon
                  icon={faSort}
                  style={{ color: "rgba(0, 0, 0, 0.05)" }}
                  onClick={handleSort}
                  data-position="square"
                />
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between">
                Prices
                <FontAwesomeIcon
                  icon={faSort}
                  style={{ color: "rgba(0, 0, 0, 0.05)" }}
                  onClick={handleSort}
                  data-position="price"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {renderData &&
            renderData.map((item: PropertyType, index: number) => (
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

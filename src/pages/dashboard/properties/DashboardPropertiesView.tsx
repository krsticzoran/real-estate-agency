import { FC, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-bootstrap/Pagination";
import { useMutation } from "@apollo/client";
import BackToTheDashboard from "../../../components/dashboard/BackToTheDashboard";
import { DELETE_PROPERTY } from "../../../graphql/queries";
import "../dashboard.css";

interface PropertyType {
  property: string;
  num: number;
  place: string;
  price: number;
  square: number;
  date: string;
  img: string;
}

interface DashboardPropertiesViewProps {
  data?: PropertyType[];
}

const style = { color: "rgba(0, 0, 0, 0.05)", cursor: "pointer" };

const DashboardPropertiesView: FC<DashboardPropertiesViewProps> = ({
  data = [],
}) => {
  const [renderData, setRenderData] = useState<PropertyType[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setRenderData(data);
    }
  }, [data]);

  const [deleteProperty] = useMutation(DELETE_PROPERTY);

  const [active, setActive] = useState<number>(1);

  const newData = renderData?.slice((active - 1) * 10, active * 10);

  const numbersArray = Array.from(
    { length: Math.ceil((data?.length ?? 0) / 10) },
    (_, index) => index + 1
  );

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
            if (sortProperty === "id") {
              return a.num - b.num;
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

  const deleteProperties = async (e: any) => {
    const parentTr = e.target.closest("tr");
    const parentKey = parentTr?.getAttribute("data-parent-key");
    try {
      const { data } = await deleteProperty({
        variables: { num: +parentKey },
        context: { clientName: "endpoint2" },
      });

      setRenderData((prevState) =>
        prevState?.filter((item) => item.num !== +parentKey)
      );
      console.log(data);
    } catch (error) {
      console.error("Error deleting property:", error);
      // Handle error state
    }
  };

  return (
    <div className="p-3">
      <Container>
        <BackToTheDashboard />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>
                <div className="d-flex justify-content-between">
                  #ID
                  <FontAwesomeIcon
                    icon={faSort}
                    style={style}
                    onClick={handleSort}
                    data-position="id"
                  />
                </div>
              </th>
              <th>Property</th>
              <th>
                <div className="d-flex justify-content-between">
                  Position
                  <FontAwesomeIcon
                    icon={faSort}
                    style={style}
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
                    style={style}
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
                    style={style}
                    onClick={handleSort}
                    data-position="price"
                  />
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {newData &&
              newData.map((item: PropertyType, index: number) => (
                <tr key={index} data-parent-key={item.num}>
                  <td style={{ width: "20%" }}>{item.num}</td>
                  <td style={{ width: "20%" }}>{item.property}</td>
                  <td style={{ width: "20%" }}>{item.place}</td>
                  <td style={{ width: "15%" }}>{`${item.square} m\u00B2`}</td>
                  <td
                    style={{ width: "15%" }}
                  >{`${item.price.toLocaleString()} €`}</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button onClick={deleteProperties}>Delete</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Pagination size="sm" className="d-flex justify-content-center ">
          {numbersArray.map((num) => (
            <Pagination.Item
              key={num}
              active={num === active}
              onClick={() => setActive(num)}
              className="mt-3"
              style={style}
            >
              {num}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </div>
  );
};

export default DashboardPropertiesView;

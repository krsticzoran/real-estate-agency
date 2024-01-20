import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-bootstrap/Pagination";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";

interface PropertyType {
  property: string;
  num: number;
  place: string;
  price: number;
  square: number;
  date: string;
  img: string;
}

const DELETE_PROPERTY = gql`
  mutation DeleteProperty($num: Int!) {
    deleteProperty(num: $num) {
      num
    }
  }
`;

const GET_PROPERTIES = gql`
  query GetProperties($property: String!, $sale: String!) {
    property(property: $property, sale: $sale) {
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

const DashboardProperties: FC = () => {
  const location = useLocation();
  const { property, sale } = location.state?.data[0];

  const { data } = useQuery(GET_PROPERTIES, {
    variables: { property, sale },
    context: { clientName: "endpoint2" },
  });

  const [renderData, setRenderData] = useState<PropertyType[] | undefined>(
    undefined
  );

  const [deleteProperty] = useMutation(DELETE_PROPERTY);

  const [active, setActive] = useState<number>(1);

  const newData = renderData?.slice((active - 1) * 10, active * 10);

  const numbersArray = Array.from(
    { length: Math.ceil((data?.length ?? 0) / 10) },
    (_, index) => index + 1
  );

  useEffect(() => {
    setRenderData(data?.property);
  }, [data]);

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
    const parentKey = e.target.parentElement.getAttribute("data-parent-key");
    console.log(+parentKey);
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
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>
              <div className="d-flex justify-content-between">
                #ID
                <FontAwesomeIcon
                  icon={faSort}
                  style={{ color: "rgba(0, 0, 0, 0.05)" }}
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
          {newData &&
            newData.map((item: PropertyType, index: number) => (
              <tr key={index} data-parent-key={item.num}>
                <td>{item.num}</td>
                <td>{item.property}</td>
                <td>{item.place}</td>
                <td>{`${item.square} m\u00B2`}</td>
                <td>{`${item.price.toLocaleString()} €`}</td>
                <Button onClick={deleteProperties}>Delete</Button>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination size="sm">
        {numbersArray.map((num) => (
          <Pagination.Item
            key={num}
            active={num === active}
            onClick={() => setActive(num)}
          >
            {num}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default DashboardProperties;

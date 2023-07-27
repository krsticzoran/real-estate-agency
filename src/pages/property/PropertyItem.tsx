import { gql } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Property } from "../../components/property/PropertyCard";
import { Row } from "react-bootstrap";

const GET_PROPERTY = gql`
  query GetProperty($num: Int!) {
    item(num: $num) {
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

const PropertyItem: FC = () => {
  const { item } = useParams();
  const num = parseInt(item ?? "0");
  console.log(num);

  const { data } = useQuery(GET_PROPERTY, {
    variables: { num },
    context: { clientName: "endpoint2" },
  });

  const properties: Property = data?.item ?? {};

  return (
    <Row>
      <div className="col-6">
        <img src={properties.img} alt="property" />
      </div>
      <div className="col-6">{properties.property}</div>
    </Row>
  );
};

export default PropertyItem;

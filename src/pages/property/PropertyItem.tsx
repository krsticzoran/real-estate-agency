import { gql } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Property } from "../../types";
import { Row } from "react-bootstrap";
import { useGetUser } from "../../hook/useGetUser";
import PropertyCarousel from "./PropertyCaorusel";

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
      specialist
      img1
      img2
      img3
    }
  }
`;

const PropertyItem: FC = () => {
  const { item } = useParams();
  const num = parseInt(item ?? "0");
  console.log(num);

  const { data: propertyData } = useQuery(GET_PROPERTY, {
    variables: { num },
    context: { clientName: "endpoint2" },
  });

  const properties: Property = propertyData?.item ?? {};

  const user = useGetUser(properties.specialist ?? "") ?? {};

  return (
    <Row>
      <div className="col-6">
        <PropertyCarousel property={properties} />
      </div>
      <div className="col-6">
        <p>{properties.property}</p>
        <p>{user.email}</p>
      </div>
    </Row>
  );
};

export default PropertyItem;

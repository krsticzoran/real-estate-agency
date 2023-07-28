import { gql } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Property } from "../../components/property/PropertyCard";
import { Row } from "react-bootstrap";
import { GET_USERS } from "../../assets/data/myData";
import { User } from "../../assets/data/myData";

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

  const { data: userData } = useQuery(GET_USERS, {
    variables: { name: properties.specialist ?? "" },
  });

  const user: User = userData?.user ?? {};

  return (
    <Row>
      <div className="col-6">
        <img src={properties.img} alt="property" />
      </div>
      <div className="col-6">
        <p>{properties.property}</p>
        <p>{user.email}</p>
      </div>
    </Row>
  );
};

export default PropertyItem;

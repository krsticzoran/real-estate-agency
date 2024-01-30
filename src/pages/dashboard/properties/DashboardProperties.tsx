import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import DashboardPropertiesView from "../../../components/dashboard/DashboardPropertiesView";

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

  return <DashboardPropertiesView data={data?.property} />;
};

export default DashboardProperties;

import { gql } from "@apollo/client";
import { FC } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useQuery } from "@apollo/client";

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

const CustomProgressBar: FC = () => {
  const { data } = useQuery(GET_PROPERTIES, {
    variables: { sale: "rent" },
    context: { clientName: "endpoint2" },
  });
  const propertyRent = data?.propertyAll.length ?? [].length;

  const propertyS = useQuery(GET_PROPERTIES, {
    variables: { sale: "sale" },
    context: { clientName: "endpoint2" },
  });

  const propertySale = propertyS.data?.propertyAll.length ?? [].length;

  const percentRent = (
    (propertyRent / (propertyRent + propertySale)) *
    100
  ).toFixed(0);

  return (
    <ProgressBar>
      <ProgressBar
        striped
        variant="success"
        now={Number(percentRent)}
        key={1}
      />
      <ProgressBar variant="warning" now={100 - Number(percentRent)} key={2} />
    </ProgressBar>
  );
};

export default CustomProgressBar;

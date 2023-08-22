import { gql, useQuery } from "@apollo/client";

const GET_PROPERTIES = gql`
  query GetProperties($property: String!, $sale: String!) {
    property(property: $property, sale: $sale) {
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

export function useGePropertyAviable(property: string | undefined) {
  const { data } = useQuery(GET_PROPERTIES, {
    variables: { property: property, sale: "rent" },
    context: { clientName: "endpoint2" },
  });

  const properties = data?.property ?? [];

  return properties.length;
}

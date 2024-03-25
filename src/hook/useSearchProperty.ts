import { gql, useQuery } from "@apollo/client";

const GET_PROPERTIES = gql`
  query GetProperties(
    $property: String!
    $sale: String!
    $minPrice: Int!
    $maxPrice: Int!
    $place: String!
  ) {
    search(
      property: $property
      sale: $sale
      place: $place
      minPrice: $minPrice
      maxPrice: $maxPrice
    ) {
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

interface formDatatype {
  activeTab: string;
  selectedLocation: string;
  selectedProperty: string;
  slelectedRangeValues: number[];
  selectedLocationSale: string;
  selectedPropertySale: string;
  slelectedRangeValuesSale: number[];
}

export function useSearchProperty(formData: formDatatype, value: string) {
  const variables =
    value === "rent"
      ? {
          property: formData.selectedProperty?.toLowerCase(),
          sale: value,
          place: formData.selectedLocation,
          minPrice: formData.slelectedRangeValues[0],
          maxPrice: formData.slelectedRangeValues[1],
        }
      : {
          property: formData.selectedPropertySale?.toLowerCase(),
          sale: value,
          place: formData.selectedLocationSale,
          minPrice: formData.slelectedRangeValuesSale[0],
          maxPrice: formData.slelectedRangeValuesSale[1],
        };

  const { data } = useQuery(GET_PROPERTIES, {
    variables,
    context: { clientName: "endpoint2" },
  });

  return data;
}

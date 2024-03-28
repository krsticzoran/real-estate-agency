import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const ADD_PROPERTY = gql`
  mutation AddProperty(
    $sale: String!
    $specialist: String!
    $property: String!
    $place: String!
    $price: Int!
    $square: Int!
    $img: String!
    $img1: String!
    $img2: String!
    $img3: String!
    $date: String!
    $num: Int!
  ) {
    addProperty(
      sale: $sale
      property: $property
      place: $place
      price: $price
      square: $square
      img: $img
      img1: $img1
      img2: $img2
      img3: $img3
      num: $num
      date: $date
      specialist: $specialist
    ) {
      sale
      property
      place
      price
      square
      img
      num
      specialist
    }
  }
`;

function useAddPropertyMutation() {
  const [executeMutation] = useMutation(ADD_PROPERTY, {
    context: { clientName: "endpoint2" },
  });

  return executeMutation;
}

export default useAddPropertyMutation;

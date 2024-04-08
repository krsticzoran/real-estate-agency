import { DocumentNode, gql, useQuery } from "@apollo/client";

export const GET_PROPERTIES = gql`
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

export const GET_PROPERTIES_ALL = gql`
  query GetProperties($sale: String!) {
    propertyAll(sale: $sale) {
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

export const GET_PROPERTY_BY_ID = gql`
  query GetProperty($num: Int!) {
    item(num: $num) {
      property
      sale
      num
      place
      price
      square
      date
      img
      specialist
      img1
      img2
      img3
    }
  }
`;

export const GET_USERS = gql`
  query {
    staff {
      users {
        user
        name
        email
        overview
        language
        img
      }
    }
  }
`;

export const GET_USER = gql`
  query GetProperties($specialist: String!) {
    staff(specialist: $specialist) {
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

export const GET_USERS_DATA = gql`
  query GetUser($name: String!) {
    user(user: $name) {
      user
      name
      email
      overview
      language
      phone
      listings
      experience
      propreties
      img
    }
  }
`;

export const GET_BLOGS = gql`
  query {
    blogList {
      title
      author
      property
      num
      img
    }
  }
`;

export const GET_BLOGTEXT = gql`
  query GetBlogText($title: String!) {
    blogText(title: $title) {
      title
      author
      property
      num
      img
      content
    }
  }
`;

export const GET_PROPERTIES_FROM_SEARCH = gql`
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

export default function useGraphQLQuery(
  query: DocumentNode,
  variables: { [key: string]: string | undefined | number },
  endpoint: string
) {
  const { data } = useQuery(query, {
    variables,
    context: { clientName: endpoint },
  });

  const result = data ? data[Object.keys(data)[0]] : [];

  return result;
}

import gql from "graphql-tag";

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

export const ADD_PROPERTY = gql`
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

export const DELETE_PROPERTY = gql`
  mutation DeleteProperty($num: Int!) {
    deleteProperty(num: $num) {
      num
    }
  }
`;

export const IS_ADMIN = gql`
  query verifyToken($token: String!) {
    verifyToken(token: $token) {
      user
    }
  }
`;

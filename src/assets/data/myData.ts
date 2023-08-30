import { gql } from "@apollo/client";

export const menuList = ["offices", "shops", "warehouses", "catering"];

export const location = [
  "Zvezdara",
  "Novi Beograd",
  "Savski venac",
  "Palilula",
  "Stari grad",
  "Mladenovac",
];

export const GET_USERS = gql`
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

export interface User {
  user: string;
  name: string;
  email: string;
  overview: string;
  language: string;
  phone: string;
  listings: number;
  experience: string;
  propreties: number;
  img: string;
}

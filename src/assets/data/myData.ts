import { gql } from "@apollo/client";

export const menuList = [
  "Offices",
  "Shops",
  "Warehouses",
  "Hotels",
  "Catering",
  "Other",
];

export const location = [
  "Zvezdara",
  "Novi Beograd",
  "Savski venac",
  "Palilula",
  "Stari grad",
  "Vračar",
  "Mladenovac",
  "Voždovac",
  "Surčin",
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
}

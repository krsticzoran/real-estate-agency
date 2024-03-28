import { gql } from "@apollo/client";

export const menuList = ["Offices", "Shops", "Warehouses", "Catering"];

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

const currentDate = new Date();

const day = currentDate.getDate().toString().padStart(2, "0");
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const year = currentDate.getFullYear();

const formattedDate = `${day}.${month}.${year}`;

export const addPropertydefaultData = {
  sale: "sale",
  property: "offices",
  place: "Zvezdara",
  price: 0,
  square: 0,
  img: "",
  img1: "",
  img2: "",
  img3: "",
  num: parseInt(Date.now().toString().substring(6, 12), 10) || 1000,
  date: formattedDate,
  specialist: "marko",
};

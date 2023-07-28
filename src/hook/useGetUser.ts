import { gql, useQuery } from "@apollo/client";

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

export function useGetUser(name: string | undefined) {
  const { data } = useQuery(GET_USERS, {
    variables: { name },
  });

  const user: User = data?.user ?? {};

  return user;
}

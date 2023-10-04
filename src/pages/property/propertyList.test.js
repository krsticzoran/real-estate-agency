import React from "react";
import { screen, render } from "@testing-library/react";
import PropertyList from "./PropertyList";
import { MemoryRouter } from "react-router-dom";

jest.mock("@apollo/client", () => {
  const actualApolloClient = jest.requireActual("@apollo/client");

  return {
    ...actualApolloClient,
    useQuery: () => ({
      data: {
        property: [
          {
            img: "img.jpg",
            num: 1,
            place: "Novi Beograd",
            price: 300,
            property: "offices",
            sale: "rent",
            square: 25,
            time: 2,
          },
          {
            img: "img1.jpg",
            num: 2,
            place: "Novi Beograd",
            price: 3000,
            property: "offices",
            sale: "rent",
            square: 25,
            time: 1,
          },
        ],
      },
    }),
  };
});

test("render property item", () => {
  render(
    <MemoryRouter>
      <PropertyList />
    </MemoryRouter>
  );

  expect(screen.getAllByText(/novi beograd/i)).toHaveLength(4);
  expect(
    screen.getAllByRole("heading", {
      level: 4,
      name: /Novi Beograd/i,
    })
  ).toHaveLength(2);
  expect(screen.getAllByText(/offices in novi beograd/i)).toHaveLength(2);
  expect(screen.getByText(/2 day ago/i)).toBeInTheDocument();
  expect(screen.getByText(/3.000/i)).toBeInTheDocument();
  expect(screen.getByText(/300/i)).toBeInTheDocument();
});

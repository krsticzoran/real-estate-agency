import React from "react";
import { render, screen } from "@testing-library/react";
import Featured from "./Featured";
import { MemoryRouter } from "react-router";

jest.mock("@apollo/client", () => {
  const actualApolloClient = jest.requireActual("@apollo/client");

  return {
    ...actualApolloClient,
    useQuery: () => ({
      data: {
        search: [
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

test("render Featured component", () => {
  // Mock the isMobile flag as true

  render(
    <MemoryRouter>
      <Featured />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /Featured properties for rent/i,
      level: 2,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/2 days ago/i)).toBeInTheDocument();
  expect(screen.getByText(/1 days ago/i)).toBeInTheDocument();

  expect(screen.getByText(/3000\/mo/i)).toBeInTheDocument();
  expect(screen.getByText(/300\/mo/i)).toBeInTheDocument();

  expect(screen.getByAltText(/img.jpg/i)).toBeInTheDocument();
  expect(screen.getByAltText(/img1.jpg/i)).toBeInTheDocument();
});

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
            date: "15.12.2023.",
          },
          {
            img: "img1.jpg",
            num: 2,
            place: "Novi Beograd",
            price: 3000,
            property: "offices",
            sale: "rent",
            square: 25,
            date: "14.12.2023.",
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
  screen.logTestingPlaygroundURL();
  expect(
    screen.getByRole("heading", {
      name: /Featured properties for rent/i,
      level: 2,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/15.12.2023./i)).toBeInTheDocument();
  expect(screen.getByText(/14.12.2023./i)).toBeInTheDocument();

  expect(screen.getByText(/3,000\/mo/i)).toBeInTheDocument();
  expect(screen.getByText(/300\/mo/i)).toBeInTheDocument();

  expect(screen.getAllByRole("img", { name: /restaurant/i })).toHaveLength(2);
});

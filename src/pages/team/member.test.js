import React from "react";
import { screen, render } from "@testing-library/react";
import Member from "./Member";
import { MemoryRouter } from "react-router-dom";
import "intersection-observer";

jest.mock("@apollo/client", () => {
  const actualApolloClient = jest.requireActual("@apollo/client");

  return {
    ...actualApolloClient,
    useQuery: () => ({
      data: {
        staff: [
          {
            property: "mock Property",
            sale: "rent",
            num: 2,
            place: "mock place",
            price: 2000,
            square: 1000,
            time: 2,
            specialist: "mock Specialist",
            img: "image1.jpg",
          },
        ],
      },
    }),
  };
});

test("render Member component", () => {
  render(
    <MemoryRouter>
      <Member />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /mock place/i,
      level: 4,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/2,000/i)).toBeInTheDocument();
  expect(screen.getByText(/Mock Property in mock place/i)).toBeInTheDocument();
});

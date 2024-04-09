import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyItem from "./PropertyItem";
import { MemoryRouter } from "react-router-dom";
import "intersection-observer";

jest.mock("@apollo/client", () => {
  const actualApolloClient = jest.requireActual("@apollo/client");

  return {
    ...actualApolloClient,
    useQuery: () => ({
      data: {
        item: {
          property: "mock Property",
          sale: "rent",
          num: 2,
          place: "mock place",
          price: 2000,
          square: 1000,
          time: 2,
          specialist: "mock Specialist",
          img: "image1.jpg",
          img1: "image2.jpg",
          img2: "image3.jpg",
          img3: "image4.jpg",
        },
      },
    }),
  };
});

test("render property item", async () => {
  render(
    <MemoryRouter>
      <PropertyItem />
    </MemoryRouter>
  );

  expect(screen.getByText(/REF NO 2/i)).toBeInTheDocument();
  expect(screen.getByText(/mock Property in mock place/i)).toBeInTheDocument();
  expect(screen.getByText(/1000 m²/i)).toBeInTheDocument();
  expect(screen.getByText(/€ 2,000/i)).toBeInTheDocument();
});

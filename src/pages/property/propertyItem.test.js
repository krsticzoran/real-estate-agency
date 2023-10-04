import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyItem from "./PropertyItem";
import { MemoryRouter } from "react-router-dom";

// Mock the Apollo Client correctly
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
        user: {
          name: "sample name",
          language: "sample language",
          img: "user.jpg",
          user: "sample user",
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

  // Wait for specific elements to appear

  expect(screen.getByText(/REF NO 2/i)).toBeInTheDocument();
  expect(screen.getByText(/mock Property in mock place/i)).toBeInTheDocument();
  expect(screen.getByText(/1000 m²/i)).toBeInTheDocument();
  expect(screen.getByText(/€ 2,000/i)).toBeInTheDocument();

  expect(screen.getAllByText(/sample name/i)).toHaveLength(4);
  expect(screen.getByText(/sample language/i)).toBeInTheDocument();
  expect(screen.getByAltText(/sample user/i)).toBeInTheDocument();
});

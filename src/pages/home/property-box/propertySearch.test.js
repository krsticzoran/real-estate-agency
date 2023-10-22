import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import PropertySearch from "./PropertySearch";
import { MemoryRouter } from "react-router";

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

test("render property search component", () => {
  render(
    <MemoryRouter>
      <PropertySearch />
    </MemoryRouter>
  );

  const buttonForRent = screen.getByText(/for rent/i);
  const buttonForSale = screen.getByText(/for sale/i);

  expect(buttonForRent).toHaveClass("property-active-tab");
  expect(buttonForSale).toHaveClass("property-tab");

  fireEvent.click(buttonForSale);

  expect(buttonForRent).toHaveClass("property-tab");
  expect(buttonForSale).toHaveClass("property-active-tab");
});

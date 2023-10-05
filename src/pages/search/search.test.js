import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Search from "./Search";

// Mock the useLocation hook to return the desired data
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
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
        ],
      },
    },
  }),
}));

test("Search component", () => {
  render(
    <MemoryRouter initialEntries={["/search"]}>
      <Search />
    </MemoryRouter>
  );

  // Now, test for the presence of the rendered search results instead
  const searchResultElement = screen.getByText(/offices in Novi Beograd/i);
  expect(searchResultElement).toBeInTheDocument();
});

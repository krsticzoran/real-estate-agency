import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Search from "./Search";

const defaultMockLocation = () => ({
  state: {
    data: {
      search: [],
    },
  },
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: defaultMockLocation,
}));

beforeEach(() => {
  jest
    .spyOn(require("react-router-dom"), "useLocation")
    .mockImplementation(defaultMockLocation);
});

test("Search component when data is empty", () => {
  render(
    <MemoryRouter initialEntries={["/search"]}>
      <Search />
    </MemoryRouter>
  );

  const noSearchResultsText = screen.getByText("No search results");
  expect(noSearchResultsText).toBeInTheDocument();
});

test("Search component when data is not empty", () => {
  const searchData = {
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
  };

  jest.spyOn(require("react-router-dom"), "useLocation").mockReturnValue({
    state: {
      data: searchData,
    },
  });

  render(
    <MemoryRouter initialEntries={["/search"]}>
      <Search />
    </MemoryRouter>
  );

  // Test for the presence of data when it's not empty
  const searchResultElement = screen.getByText("Novi Beograd");
  expect(searchResultElement).toBeInTheDocument();
});

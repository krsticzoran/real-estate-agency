import React from "react";
import { render, screen } from "@testing-library/react";
import Commercial from "./Commercial";
import { MemoryRouter } from "react-router";

jest.mock("../../../hook/useGetPropertyAviable", () => ({
  useGePropertyAviable: (property) => {
    const propertyValues = {
      shops: 10,
      catering: 5,
      warehouses: 8,
      offices: 3,
    };
    return propertyValues[property] || 0;
  },
}));

test("render Commercial component", () => {
  render(
    <MemoryRouter>
      <Commercial />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /Commercial Property to Rent/i,
      level: 2,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /Retails/i,
      level: 5,
    })
  ).toBeInTheDocument();

  expect(screen.getByAltText(/retail/i)).toBeInTheDocument();
  expect(screen.getByAltText(/restaurant/i)).toBeInTheDocument();
  expect(screen.getByAltText(/industrial/i)).toBeInTheDocument();
  expect(screen.getByAltText(/offices/i)).toBeInTheDocument();

  expect(screen.getByText(/10 available/i)).toBeInTheDocument();
  expect(screen.getByText(/5 available/i)).toBeInTheDocument();
  expect(screen.getByText(/8 available/i)).toBeInTheDocument();
  expect(screen.getByText(/3 available/i)).toBeInTheDocument();
});

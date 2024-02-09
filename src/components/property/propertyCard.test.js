import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PropertyCard from "./PropertyCard";

const mockProperty = {
  property: "mock Property",
  sale: "rent",
  num: 2,
  place: "mock place",
  price: 2000,
  square: 1000,
  date: "15. 12. 2023",
  specialist: "mock Specialist",
  img: "image1.jpg",
};

test("render property card", () => {
  render(
    <MemoryRouter>
      <PropertyCard property={mockProperty} />
    </MemoryRouter>
  );

  expect(screen.getByRole("link")).toHaveAttribute("href", "/property/2");

  expect(
    screen.getByRole("img", {
      name: /restaurant/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /mock property in mock place/i,
      level: 3,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/1000 m²/i)).toBeInTheDocument();

  expect(screen.getByText(/15. 12. 2023/i)).toBeInTheDocument();
});

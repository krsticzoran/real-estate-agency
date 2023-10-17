// PropertyBox.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyBox from "./PropertyBox";

jest.mock("./CommercialSpecialists", () => {
  return () => <div>Mocked CommercialSpecialists</div>;
});

jest.mock("./PropertySearch", () => {
  return () => <div>Mocked PropertySearch</div>;
});

test("renders PropertyBox component with mocked imports", () => {
  render(<PropertyBox />);

  expect(screen.getByAltText(/banner/i)).toBeInTheDocument();
  expect(screen.getByText(/Mocked CommercialSpecialists/i)).toBeInTheDocument();
  expect(screen.getByText(/Mocked PropertySearch/i)).toBeInTheDocument();
});

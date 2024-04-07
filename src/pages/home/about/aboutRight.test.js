import React from "react";
import { render, screen } from "@testing-library/react";
import AboutRight from "./AboutRight";
import "intersection-observer";

test("render AboutRight component", () => {
  render(<AboutRight />);

  expect(
    screen.getByRole("heading", {
      name: /Local Knowledge/i,
      level: 3,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /Expert Team/i,
      level: 3,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/who love Belgrade/i)).toBeInTheDocument();

  expect(screen.getByText(/Trusted by many local/i)).toBeInTheDocument();

  expect(screen.getAllByAltText(/benefit/i)).toHaveLength(4);
});

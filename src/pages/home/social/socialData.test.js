import React from "react";
import { screen, render } from "@testing-library/react";
import SocialData from "./SocialData";
import "intersection-observer";

test("render social data component", () => {
  render(<SocialData />);

  expect(screen.getAllByAltText(/testimonial/i)).toHaveLength(4);

  expect(screen.getByText(/Maja Markovic/i)).toBeInTheDocument();

  expect(
    screen.getByText(/fantastic team of specialist ready/i)
  ).toBeInTheDocument();

  expect(screen.getByText(/milos markovic/i)).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import CommercialSpecialists from "./CommercialSpecialists";

test("render Commercial Specialist component", () => {
  render(<CommercialSpecialists />);
  expect(
    screen.getByRole("heading", {
      name: /COMMERCIAL SPECIALISTS/i,
      level: 4,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /Find your next/i,
      level: 1,
    })
  ).toBeInTheDocument();
});

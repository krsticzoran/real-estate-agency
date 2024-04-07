import React from "react";
import { render, screen } from "@testing-library/react";
import CommercialSpecialists from "./CommercialSpecialists";
import "intersection-observer";

test("render Commercial Specialist component", () => {
  render(<CommercialSpecialists />);
  expect(
    screen.getByRole("heading", {
      name: /C O M M E R C I A L S P E C I A L I S T S/i,
      level: 4,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /F i n d y o u r n e x t/i,
      level: 1,
    })
  ).toBeInTheDocument();
});

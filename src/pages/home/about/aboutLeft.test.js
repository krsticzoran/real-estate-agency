import React from "react";
import { render, screen } from "@testing-library/react";
import AboutLeft from "./AboutLeft";
import { MemoryRouter } from "react-router";

test("render AboutLeft component", () => {
  render(
    <MemoryRouter>
      <AboutLeft />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /about us/i,
      level: 4,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /Commercial Landscape/i,
      level: 2,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/provide our clients/i)).toBeInTheDocument();

  expect(
    screen.getByRole("button", {
      name: /Read more./i,
    })
  ).toBeInTheDocument();
});

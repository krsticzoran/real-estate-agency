import React from "react";
import { screen, render } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router";

test("render header component", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByAltText(/logo/i)).toBeInTheDocument();

  expect(screen.getByText(/rent/i)).toBeInTheDocument();

  expect(screen.getByText(/sale/i)).toBeInTheDocument();

  expect(
    screen.getByRole("link", {
      name: /team/i,
    })
  ).toHaveAttribute("href", "/team");

  expect(
    screen.getByRole("link", {
      name: /blog/i,
    })
  ).toHaveAttribute("href", "/blog");

  expect(
    screen.getByRole("link", {
      name: /contact/i,
    })
  ).toHaveAttribute("href", "/contact");
});

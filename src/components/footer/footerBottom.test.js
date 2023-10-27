import React from "react";
import { screen, render } from "@testing-library/react";
import FooterBottom from "./FooterBottom";
import { MemoryRouter } from "react-router";

test("render footer bottom", () => {
  render(
    <MemoryRouter>
      <FooterBottom />
    </MemoryRouter>
  );

  expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument();

  expect(
    screen.getByRole("link", {
      name: /privacy policy/i,
    })
  ).toHaveAttribute("href", "/privacy-policy");

  expect(
    screen.getByRole("link", {
      name: /terms & conditions/i,
    })
  ).toHaveAttribute("href", "/terms");
});

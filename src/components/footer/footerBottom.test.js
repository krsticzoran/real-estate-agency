import React from "react";
import { screen, render } from "@testing-library/react";
import FooterBottom from "./FooterBottom";

jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  return {
    ...actual,
    Link: ({ to, children }) => <a href={to}>{children}</a>,
  };
});

test("render footer bottom", () => {
  render(<FooterBottom />);

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

import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavbarComponent from "./NavbarComponent";

jest.mock("./DropdownMenu", () => {
  return () => {
    return "Dropdown Menu";
  };
});

test("render navbar component", () => {
  render(
    <MemoryRouter>
      <NavbarComponent />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("button", {
      name: /toggle navigation/i,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/Dropdown Menu/i)).toBeInTheDocument();

  expect(screen.getByRole("link", { name: /team/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /blog/i })).toBeInTheDocument();
});

import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import * as useIsAdminModule from "../../hook/useIsAdmin"; // Import the entire module
import NavbarComponent from "./NavbarComponent";

jest.mock("./DropdownMenu", () => {
  return () => {
    return "Dropdown Menu";
  };
});

test("render navbar component with Login link when not authenticated", () => {
  const mockUseIsValidToken = jest.spyOn(useIsAdminModule, "useIsValidToken");
  mockUseIsValidToken.mockReturnValue(false);

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

  expect(
    screen.getByRole("link", {
      name: /login/i,
    })
  ).toBeInTheDocument();

  mockUseIsValidToken.mockRestore();
});

test("render navbar component with Dashboard link when authenticated", () => {
  const mockUseIsValidToken = jest.spyOn(useIsAdminModule, "useIsValidToken");
  mockUseIsValidToken.mockReturnValue(true);

  render(
    <MemoryRouter>
      <NavbarComponent />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("link", {
      name: /dashboard/i,
    })
  ).toBeInTheDocument();

  mockUseIsValidToken.mockRestore();
});

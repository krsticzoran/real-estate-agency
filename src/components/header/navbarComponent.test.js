import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { AuthProvider } from "../../context/AuthContext";
import NavbarComponent from "./NavbarComponent";

jest.mock("./DropdownMenu", () => {
  return () => {
    return "Dropdown Menu";
  };
});

test("render navbar component with Login link when not authenticated", () => {
  // Spy on the useAuth hook to return isAuthenticated as false
  jest
    .spyOn(require("../../context/AuthContext"), "useAuth")
    .mockReturnValue({ isAuthenticated: false });

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

  // Restore the original implementation of useAuth
  jest.restoreAllMocks();
});

test("render navbar component with Dashboard link when authenticated", () => {
  // Spy on the useAuth hook to return isAuthenticated as true
  jest
    .spyOn(require("../../context/AuthContext"), "useAuth")
    .mockReturnValue({ isAuthenticated: true });

  render(
    <MemoryRouter>
      <NavbarComponent />
    </MemoryRouter>
  );

  // Ensure that the Dashboard link is rendered
  expect(
    screen.getByRole("link", {
      name: /dashboard/i,
    })
  ).toBeInTheDocument();

  // Restore the original implementation of useAuth
  jest.restoreAllMocks();
});

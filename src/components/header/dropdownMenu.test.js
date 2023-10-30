import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"; // Import fireEvent
import { MemoryRouter } from "react-router";
import DropdownMenu from "./DropdownMenu";

const menuList = ["offices", "shops", "warehouses", "catering"];

test("render dropdown menu component", () => {
  render(
    <MemoryRouter>
      <DropdownMenu onData={menuList} page="rent" />
    </MemoryRouter>
  );

  const button = screen.getByRole("button", {
    name: "rent",
  });

  fireEvent.mouseOver(button);

  expect(screen.getByText(/offices/i)).toBeInTheDocument();

  expect(screen.getByText(/shops/i)).toBeInTheDocument();
  expect(screen.getByText(/warehouses/i)).toBeInTheDocument();
  expect(screen.getByText(/catering/i)).toBeInTheDocument();
});

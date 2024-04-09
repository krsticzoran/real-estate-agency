import React from "react";
import { render, screen } from "@testing-library/react";
import Commercial from "./Commercial";
import { MemoryRouter } from "react-router";
import "intersection-observer";
import { MockedProvider } from "@apollo/client/testing";

test("render Commercial component", () => {
  render(
    <MockedProvider mocks={[]}>
      <MemoryRouter>
        <Commercial />
      </MemoryRouter>
    </MockedProvider>
  );

  expect(
    screen.getByRole("heading", {
      name: /C o m m e r c i a l P r o p e r t y t o R e n t/i,
      level: 2,
    })
  ).toBeInTheDocument();

  expect(screen.getByAltText(/retail/i)).toBeInTheDocument();
  expect(screen.getByAltText(/restaurant/i)).toBeInTheDocument();
  expect(screen.getByAltText(/industrial/i)).toBeInTheDocument();
  expect(screen.getByAltText(/offices/i)).toBeInTheDocument();
});

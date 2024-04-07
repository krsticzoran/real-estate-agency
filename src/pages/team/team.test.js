import React from "react";
import { screen, render } from "@testing-library/react";
import Team from "./Team";
import { MemoryRouter } from "react-router";
import "intersection-observer";

jest.mock("@apollo/client", () => {
  const actualApolloClient = jest.requireActual("@apollo/client");

  return {
    ...actualApolloClient,
    useQuery: () => ({
      data: {
        staff: {
          users: [
            {
              name: "sample name",
              language: "sample language",
              img: "user.jpg",
              user: "sample user",
              email: "sample email",
            },
          ],
        },
      },
    }),
  };
});

test("render Team component", () => {
  render(
    <MemoryRouter>
      <Team />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /sample name/i,
      level: 5,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/sample email/i)).toBeInTheDocument();
  expect(screen.getByText(/sample language/i)).toBeInTheDocument();
});

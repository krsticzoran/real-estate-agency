import React from "react";
import { render, screen } from "@testing-library/react";
import FooterTop from "./FooterTop";
import { MemoryRouter } from "react-router";

jest.mock("@apollo/client", () => {
  const actualApolloClient = jest.requireActual("@apollo/client");

  return {
    ...actualApolloClient,
    useQuery: () => ({
      data: {
        blogList: [
          {
            title: "Sample Blog",
            author: "John Doe",
            property: "Sample Property",
            num: 1,
            img: "sample-image-url",
          },
        ],
      },
    }),
  };
});

test("render footer top component", () => {
  render(
    <MemoryRouter>
      <FooterTop />
    </MemoryRouter>
  );

  expect(screen.getByAltText(/logo/i)).toBeInTheDocument();

  expect(screen.getByText(/zorankrstic81@gmail.com/i)).toBeInTheDocument();

  expect(screen.getByAltText(/Sample Blog/i)).toBeInTheDocument();
});

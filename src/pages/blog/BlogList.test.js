import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlogList from "./BlogList";
import "intersection-observer";

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

test("renders blog list", async () => {
  render(
    <MemoryRouter>
      <BlogList />
    </MemoryRouter>
  );

  // Assertions
  const blogTitles = screen.getAllByText("Sample Blog");
  const authors = screen.getAllByText("John Doe");

  expect(blogTitles[0]).toBeInTheDocument();
  expect(authors[0]).toBeInTheDocument();
});

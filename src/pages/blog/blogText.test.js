import React from "react";
import { screen, render } from "@testing-library/react";
import BlogText from "./BlogText";
import { MemoryRouter, Route, Routes } from "react-router-dom";

jest.mock("react-markdown", () => {
  return () => <div>Sample content</div>;
});

jest.mock("@apollo/client", () => {
  const actualApolloClient = jest.requireActual("@apollo/client");

  return {
    ...actualApolloClient,
    useQuery: (query, { variables }) => {
      return {
        data: {
          blogText: {
            title: "Sample Blog",
            author: "John Smith",
            property: "Sample Property",
            num: 1,
            img: "sample-image-url",
            content: "Sample content",
          },
        },
      };
    },
  };
});

test("render blog text component", () => {
  render(
    <MemoryRouter initialEntries={["/blog/sample-blog"]}>
      <Routes>
        <Route path="/blog/:title" element={<BlogText />} />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      level: 4,
      name: /sample property/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /sample blog/i,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/john smith/i)).toBeInTheDocument();

  expect(screen.getByAltText(/img/i)).toBeInTheDocument();

  expect(screen.getByText(/sample content/i)).toBeInTheDocument();
});

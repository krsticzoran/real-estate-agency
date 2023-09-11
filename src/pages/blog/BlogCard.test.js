import React from "react";
import { render, screen } from "@testing-library/react";
import BlogCard from "./BlogCard";

// This code will replace the Link component with a basic a tag for testing purposes.
jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  return {
    ...actual,
    Link: ({ to, children }) => <a href={to}>{children}</a>,
  };
});

const mockBlog = {
  blog: {
    title: "Sample Blog Title",
    property: "Sample Property",
    img: "sample-image.jpg",
    author: "Sample Author",
  },
};

test("renders blog card with sample data", () => {
  render(<BlogCard blog={mockBlog.blog} />);

  // Assert that the rendered component contains the expected text and elements
  expect(screen.getByText("Sample Blog Title")).toBeInTheDocument();
  expect(screen.getByText("Sample Property")).toBeInTheDocument();
  expect(screen.getByText("Sample Author")).toBeInTheDocument();
  expect(screen.getByAltText("blog")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    "/blog/Sample-Blog-Title"
  );
});

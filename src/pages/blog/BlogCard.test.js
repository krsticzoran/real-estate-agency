import React from "react";
import { render, screen } from "@testing-library/react";
import BlogCard from "./BlogCard";
import { MemoryRouter } from "react-router";

const mockBlog = {
  blog: {
    title: "Sample Blog Title",
    property: "Sample Property",
    img: "sample-image.jpg",
    author: "Sample Author",
  },
};

test("renders blog card with sample data", () => {
  render(
    <MemoryRouter>
      <BlogCard blog={mockBlog.blog} />
    </MemoryRouter>
  );

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

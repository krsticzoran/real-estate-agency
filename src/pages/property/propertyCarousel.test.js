import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PropertyCarousel from "./PropertyCarousel";

const mockProperty = {
  img: "image1.jpg",
  img1: "image2.jpg",
  img2: "image3.jpg",
  img3: "image4.jpg",
};

test("renders property carousel with images", async () => {
  render(<PropertyCarousel property={mockProperty} />);

  const images = screen.getAllByAltText("property");
  expect(images).toHaveLength(4);

  const nextButton = screen.getByTestId("next-button");
  expect(nextButton).toBeInTheDocument();
  expect(screen.getByTestId("prev-button")).toBeInTheDocument();
  expect(screen.getByTestId("prev-button")).toHaveClass("disabled");

  expect(screen.getByTestId("one")).toHaveClass("active");

  fireEvent.click(nextButton);

  await waitFor(() => {
    expect(screen.getByTestId("two")).toHaveClass("active");
  });

  await waitFor(() => {
    expect(screen.getByTestId("one")).not.toHaveClass("active");
  });

  await waitFor(() => {
    expect(screen.getByTestId("prev-button")).not.toHaveClass("disabled");
  });

  fireEvent.click(nextButton);

  await waitFor(() => {
    expect(screen.getByTestId("three")).toHaveClass("active");
  });

  await waitFor(() => {
    expect(screen.getByTestId("two")).not.toHaveClass("active");
  });

  fireEvent.click(nextButton);
  await waitFor(() => {
    expect(screen.getByTestId("four")).toHaveClass("active");
  });

  await waitFor(() => {
    expect(nextButton).toHaveClass("disabled");
  });
});

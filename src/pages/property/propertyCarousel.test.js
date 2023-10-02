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

  // Check if the first image is displayed
  const images = screen.getAllByAltText("property");
  expect(images).toHaveLength(4);

  const parent = images[0].closest("div");

  expect(parent).toHaveClass("active");

  const nextButton = screen.getByTestId("next-button");

  expect(screen.getByTestId("prev-button")).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  fireEvent.click(nextButton);

  // Check if the second image is displayed

  await waitFor(() => {
    const parentOfSecondImage = images[1].closest("div");
    expect(parentOfSecondImage).toHaveClass("active");
  });

  // You can repeat the above steps to test other images and buttons
  // For example, clicking next until the last image and checking if the next button is disabled.

  // Similarly, you can test the previous button functionality.
});

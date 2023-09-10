import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs";

// Mock the Header component
jest.mock("../../components/header/Header", () => {
  return () => <div data-testid="mocked-header">Mocked Header</div>;
});

// Mock the Footer component
jest.mock("../../components/footer/Footer", () => {
  return () => <div data-testid="mocked-footer">Mocked Footer</div>;
});

describe("AboutUs Component", () => {
  it("should render the About Us page content", () => {
    render(<AboutUs />);

    // Assert that specific text content is present in the component
    expect(screen.getByText("About us")).toBeInTheDocument();
    expect(
      screen.getByText("Experienced Team, Personal Approach")
    ).toBeInTheDocument();
    // Add more assertions for other content you want to test
  });

  it("should display an image", () => {
    render(<AboutUs />);

    // Assert that an image with the alt text 'about us' is present
    expect(screen.getByAltText("about us")).toBeInTheDocument();
  });

  // Add more test cases as needed to cover other aspects of your component
});

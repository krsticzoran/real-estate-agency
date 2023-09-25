import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs";

describe("AboutUs Component", () => {
  it("should render the About Us page content", () => {
    render(<AboutUs />);

    expect(screen.getByText("About us")).toBeInTheDocument();
    expect(
      screen.getByText("Experienced Team, Personal Approach")
    ).toBeInTheDocument();
  });

  it("should display an image", () => {
    render(<AboutUs />);

    expect(screen.getByAltText("about us")).toBeInTheDocument();
  });
});

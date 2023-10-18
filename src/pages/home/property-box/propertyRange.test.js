import React from "react";
import { render, screen } from "@testing-library/react";
import PriceRangeSlider from "./PropertyRange";

const mockSetRangeValues = [0, 10000];
const mockRangeValues = [100, 1000];
const mockMax = 1000000;
const mockStep = 1;

test("price range slider component", () => {
  render(
    <PriceRangeSlider
      setRangeValues={mockSetRangeValues}
      rangeValues={mockRangeValues}
      max={mockMax}
      step={mockStep}
    />
  );

  expect(screen.getByText(/price/i)).toBeInTheDocument();
  expect(screen.getByText(/100/i)).toBeInTheDocument();
  expect(screen.getByText(/100/i)).toBeInTheDocument();
});

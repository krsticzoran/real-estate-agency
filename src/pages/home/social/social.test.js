import React from "react";
import { render, screen } from "@testing-library/react";
import Social from "./Social";

test("render social component", () => {
  render(<Social />);

  expect(screen.getByAltText(/social/i)).toBeInTheDocument();
});

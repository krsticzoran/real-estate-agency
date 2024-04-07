import React from "react";
import { render, screen } from "@testing-library/react";
import ContactPage from "./ContactPage";
import "intersection-observer";

test("renders contact page", () => {
  render(<ContactPage />);

  expect(screen.getByAltText("img")).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /C o n t a c t R e a l E s t a t e B e l g r a d e/i,
    })
  ).toBeInTheDocument();

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

  expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

  expect(screen.getByRole("button")).toBeInTheDocument();
});

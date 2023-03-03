import React from "react";
import { render, screen } from '@testing-library/React';
import '@testing-library/jest-dom';
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  it("renders header links", () => {
    render(
      <MemoryRouter>
        <Header />;
      </MemoryRouter>
    );
    const home = screen.getByText(/home/i);
    expect(home).toBeInTheDocument();
  });
});
import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("component Navbar", () => {
  it("should render properly", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const navbar = screen.getByTestId("logo");
    expect(navbar).toBeVisible();
  });

  it("should render properly headers", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const catalog = screen.getByTestId("catalog");
    expect(catalog).toBeVisible();
  });
  it("should render properly input field", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const input = screen.getByTestId("search");
    expect(input).toBeVisible();
  });
});

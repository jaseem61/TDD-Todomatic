import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import AppForm from "./components/Form";

describe("App Component Layout", () => {
  test("check if the heading is rendered", async () => {
    render(<App />);
    const headingText = screen.getByText("Todomatic");
    expect(headingText).toBeDefined();
  });

  test("remaining task text to be rendered", async () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("remaining-task")).toHaveTextContent("0 task remaining");
  });
});

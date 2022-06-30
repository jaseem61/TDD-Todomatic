import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App Component Layout", () => {
  test("check if the heading is rendered", async () => {
    const { getByText } = render(<App data={[]} />);
    const headingText = getByText("Todomatic");
    expect(headingText).toBeDefined();
  });

  test("remaining task text to be rendered", async () => {
    const { getByTestId } = render(<App data={[]} />);
    expect(getByTestId("remaining-task")).toHaveTextContent("0 task remaining");
  });
});

import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

const DATA = [
  { name: "Eat", completed: true, id: "todo-0" },
  { name: "Sleep", completed: false, id: "todo-1" },
  { name: "Repeat", completed: false, id: "todo-2" },
];

describe("App Component Layout", () => {
  test("check if the heading is rendered", async () => {
    render(<App data={[]} />);
    const headingText = screen.getByText("Todomatic");
    expect(headingText).toBeDefined();
  });

  test("remaining task text to be rendered", async () => {
    const { getByTestId } = render(<App data={[]} />);
    expect(getByTestId("remaining-task")).toHaveTextContent("0 task remaining");
  });
});

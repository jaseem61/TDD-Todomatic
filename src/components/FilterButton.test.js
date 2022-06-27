import { getByTestId, render } from "@testing-library/react";
import React from "react";
import FilterButton from "./FilterButton";

describe("Filter Button Layout", () => {
  test("filter button should have a button", async () => {
    const { getByTestId } = render(<FilterButton />);
    expect(getByTestId("filter-button")).toBeInTheDocument();
  });
});

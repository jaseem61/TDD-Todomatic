import { fireEvent, getByTestId, render } from "@testing-library/react";
import React from "react";
import FilterButton from "./FilterButton";

describe("Filter Button Layout", () => {
  test("filter button should have a button", async () => {
    const { getByTestId } = render(<FilterButton />);
    expect(getByTestId("filter-button")).toBeInTheDocument();
  });

  test("button should have the name we provide", async () => {
    const name = "All";
    const { getByTestId } = render(<FilterButton name={name} />);
    expect(getByTestId("filter-button")).toHaveTextContent("All");
  });
});

const mockedSetFilter = jest.fn();
describe("Functionality of the button", () => {
  test("should execute the prop function on click", async () => {
    const name = "All";
    const { getByTestId } = render(
      <FilterButton name={name} setFilter={mockedSetFilter} isPressed={true} />
    );
    fireEvent.click(getByTestId("filter-button"));
    expect(mockedSetFilter).toBeCalledTimes(1);
  });
});

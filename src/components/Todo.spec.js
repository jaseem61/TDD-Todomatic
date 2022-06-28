import { fireEvent, getByTestId, render } from "@testing-library/react";
import Todo from "./Todo";

describe("Layout of Todo", () => {
  test("View layout should have checkbox", async () => {
    const { getByTestId } = render(<Todo />);
    expect(getByTestId("todo-checkbox")).toBeInTheDocument();
  });
  test("View layout should have edit button", async () => {
    const { getByTestId } = render(<Todo />);
    expect(getByTestId("todo-edit")).toBeInTheDocument();
  });

  test("View layout should have delete button ", async () => {
    const { getByTestId } = render(<Todo />);
    expect(getByTestId("todo-delete")).toBeInTheDocument();
  });

  test("Edit Layout should have a form", async () => {
    const { getByTestId } = render(<Todo />);
    fireEvent.click(getByTestId("todo-edit"));
    expect(getByTestId("todo-edit-form")).toBeInTheDocument();
  });
  test("Edit Layout should have a label", () => {
    const { getByTestId } = render(
      <Todo id="todo-1" completed={false} name="taskName" />
    );
    fireEvent.click(getByTestId("todo-edit"));
    expect(getByTestId("todo-edit-label")).toHaveTextContent(
      "New name for taskName"
    );
  });
  test("Edit layout should have input to change the task name", async () => {
    const { getByTestId } = render(
      <Todo id="todo-1" completed={false} name="taskName" />
    );
    fireEvent.click(getByTestId("todo-edit"));
    expect(getByTestId("todo-edit-input")).toBeInTheDocument();
  });

  test("Edit layout should have a cancel button", () => {
    const { getByTestId } = render(
      <Todo id="todo-1" completed={false} name="taskName" />
    );
    fireEvent.click(getByTestId("todo-edit"));
    expect(getByTestId("todo-edit-cancel")).toBeInTheDocument();
  });

  test("Edit layout should have a Save button", () => {
    const { getByTestId } = render(
      <Todo id="todo-1" completed={false} name="taskName" />
    );
    fireEvent.click(getByTestId("todo-edit"));
    expect(getByTestId("todo-edit-save")).toBeInTheDocument();
  });
});

describe("Functionality of Todo Component", () => {
  test("checking delete functionaltiy of Todo", async () => {
    const deleteTask = jest.fn();
    const { getByTestId } = render(
      <Todo
        id="todo-1"
        completed={false}
        name="taskName"
        deleteTask={deleteTask}
      />
    );
    fireEvent.click(getByTestId("todo-delete"));
    expect(deleteTask).toBeCalledTimes(1);
  });

  test("checking if edit View is shown on clicking edit button", async () => {
    const { getByTestId } = render(
      <Todo id="todo-1" completed={false} name="taskName" />
    );
    fireEvent.click(getByTestId("todo-edit"));
    expect(getByTestId("todo-edit-form")).toBeInTheDocument();
  });

  test("App should take back to View Template on clicking cancel button in edit View", async () => {
    const { getByTestId } = render(
      <Todo id="todo-1" completed={false} name="taskName" />
    );
    fireEvent.click(getByTestId("todo-edit"));
    fireEvent.click(getByTestId("todo-edit-cancel"));
    expect(getByTestId("todo-checkbox")).toBeInTheDocument();
  });

  test("App should update the new name set for the task", async () => {
    const editTask = jest.fn();
    const { getByTestId } = render(
      <Todo id="todo-1" completed={false} name="taskName" editTask={editTask} />
    );
    fireEvent.click(getByTestId("todo-edit"));
    fireEvent.change(getByTestId("todo-edit-input"), {
      target: {
        value: "Hello123",
      },
    });
    fireEvent.click(getByTestId("todo-edit-save"));
    expect(editTask).toHaveBeenCalledTimes(1);
  });
});

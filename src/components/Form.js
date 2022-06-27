import React, { useState } from "react";

function Form({ addTask }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(name);
    setName("");
  }

  return (
    <form alt="todo-form" data-testid="todo-form" onSubmit={handleSubmit}>
      <h2 className="label-wrapper" data-testid="form-heading">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        data-testid="form-input"
        onChange={handleChange}
        value={name}
      />
      <button
        type="submit"
        data-testid="form-button"
        className="btn btn__primary btn__lg"
      >
        Add
      </button>
    </form>
  );
}

export default Form;

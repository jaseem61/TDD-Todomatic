import React from "react";

function FilterButton({ name, setFilter, isPressed }) {
  return (
    <button
      data-testid="filter-button"
      onClick={() => {
        setFilter(name);
      }}
      className="btn toggle-btn"
      aria-pressed={isPressed}
      id={name}
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;

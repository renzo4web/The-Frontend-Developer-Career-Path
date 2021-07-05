import React from "react";

const AddTodo = ({ onSubmit, value }) => {
  const onTrigger = (event) => {
    event.preventDeault();
    onSubmit(value);
  };

  return (
    <form onSubmit={(e) => onTrigger(e)}>
      <label htmlFor="input">
        Add Todo To List
        <input type="text" id="input" aria-label="Add Todo to list" value={value} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;

import React, { useState } from "react";

const AddTodo = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const getId = () => {
    const id = new Date().getMilliseconds().toString().slice(0, 2);

    return id;
  };

  const onTrigger = (event) => {
    event.preventDefault();

    const todo = {
      id: getId(),
      text: input.trim(),
      createdAt: new Date(),
      completed: false,
    };
    onSubmit(todo);

    event.target.reset();
  };

  return (
    <form onSubmit={(e) => onTrigger(e)}>
      <label htmlFor="input">
        Add Todo To List
        <input
          type="text"
          id="input"
          aria-label="Add Todo to list"
          onChange={({ target }) => setInput(target.value)}
          onBlur={({ target }) => setInput(target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;

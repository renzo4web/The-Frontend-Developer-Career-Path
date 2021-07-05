import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  };

  return (
    <div style={styles}>
      {todos.map((todo) => {
        return (
          <Todo handleEdit={handleEdit} handleDelete={handleDelete} data={todo.id} key={todo.id}>
            {todo.text}
          </Todo>
        );
      })}
    </div>
  );
};

export default TodoList;

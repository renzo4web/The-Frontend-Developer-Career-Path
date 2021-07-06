import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, handleCompleted, handleEdit }) => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  };

  return (
    <div style={styles}>
      {todos.map((todo) => {
        return (
          <Todo
            style={todo.completed ? { textDecoration: "line-through" } : ""}
            handleEdit={handleEdit}
            handleCompleted={handleCompleted}
            data={todo.id}
            isChecked={todo.completed}
            key={todo.id}
          >
            {todo.text}
          </Todo>
        );
      })}
    </div>
  );
};

export default TodoList;

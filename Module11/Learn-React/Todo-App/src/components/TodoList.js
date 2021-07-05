import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  };

  return (
    <div style={styles}>
      {todos.map((todo) => {
        return <Todo key={todo.id}>{todo.todo}</Todo>;
      })}
    </div>
  );
};

export default TodoList;

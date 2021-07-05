import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

const $root = document.getElementById("root");

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const todos = [
  { id: 2, todo: "lorem 30 " },
  { id: 3, todo: "lorem 30 " },
  { id: 4, todo: "lorem 30 " },
  { id: 5, todo: "lorem 30 " },
  { id: 6, todo: "lorem 30 " },
  { id: 7, todo: "lorem 30 " },
  { id: 8, todo: "lorem 30 " },
];

const App = () => {
  const [todos, setTodos] = useState([]);

  const styles = {
    width: "100vw",
    heigth: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const handleTodo = (event) => {
    event.preventDefault();
    console.log(event.target);
    setTodos([...todos,value])
  };

  return (
    <div style={styles}>
      <h1>Todo App</h1>
      <AddTodo onSubmit={handleTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  $root
);

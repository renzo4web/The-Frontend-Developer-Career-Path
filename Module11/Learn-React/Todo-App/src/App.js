import { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const $root = document.getElementById("root");

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Modal from "./components/Modal";

const App = () => {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState({ id: "", text: "", createdAt: "" });
  const [todos, setTodos] = useState(() => {
    console.log("GET FROM LOCAL");
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const styles = {
    width: "100vw",
    heigth: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  useEffect(() => {
    console.log("SET to LOCAL");
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));

    console.log("Todo Viejo", edit);

    return () => {
      setEdit({
        id: "",
        text: "",
        createdAt: "",
      });

      console.log("Todo Nuevo", edit);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const handleTodo = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  const handleCompleted = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      });
    });
  };

  const handleEdit = (id) => {
    console.log(id);
    setEdit({ ...edit, id: id });
    setModal(true);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const editTodo = () => {
    const idx = todos.findIndex(({ id }) => id === edit.id);

    setEdit({ ...edit, createdAt: new Date() });

    todos[idx] = edit;

    setTodos([...todos]);

    console.log(todos);
    toggleModal();
  };

  return (
    <div style={styles}>
      <h1>Todo App</h1>
      <AddTodo onSubmit={handleTodo} />
      <TodoList handleEdit={handleEdit} handleCompleted={handleCompleted} todos={todos} />

      {modal ? (
        <Modal>
          <div>
            <h2>Edit Todo</h2>
            <textarea
              value={edit.text}
              onChange={(e) => setEdit({ ...edit, text: e.target.value })}
            />
            <div className="buttons">
              <button onClick={editTodo}>Edit</button>
              <button onClick={toggleModal}>Cancel</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  $root
);

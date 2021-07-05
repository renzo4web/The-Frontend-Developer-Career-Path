import React from "react";

const Todo = ({ children }) => {
  const labelStyles = {
    backgroundColor: "grey",
    color: "white",
    display: "flexbox",
    alignItems: "center",
    fontSize: "1.3rem",
  };

  return (
    <label style={labelStyles}>
      {children}
      <input type="checkbox" id="completed" />
    </label>
  );
};

export default Todo;

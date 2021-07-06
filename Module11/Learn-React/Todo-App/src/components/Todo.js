/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

const Todo = ({ children, handleCompleted, handleEdit, data, isChecked }) => {
  const [checked, setChecked] = useState(false);

  const labelStyles = {
    backgroundColor: "grey",
    color: "white",
    display: "flexbox",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.3rem",
    width: "100%",
    cursor: "pointer",
  };

  const inputStyle = {
    backgroundColor: "green",
  };

  return (
    <div style={isChecked ? { ...labelStyles, textDecoration: "line-through" } : { labelStyles }}>
      <div tabIndex={0} role="button" onClick={() => handleEdit(data)}>
        {children}
      </div>

      <input
        style={inputStyle}
        onChange={() => {
          handleCompleted(data);
          setChecked(!checked);
        }}
        type="checkbox"
        checked={checked}
        id="completed"
      />
    </div>
  );
};

export default Todo;

/* eslint-disable jsx-a11y/click-events-have-key-events */

const Todo = ({ children, handleDelete, handleEdit, data }) => {
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
    <div style={labelStyles}>
      <div tabIndex={0} role="button" onClick={() => handleEdit(data)}>
        {children}
      </div>

      <input
        style={inputStyle}
        onChange={() => handleDelete(data)}
        type="checkbox"
        id="completed"
      />
    </div>
  );
};

export default Todo;

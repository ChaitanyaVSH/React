import React from "react";

const TodoItem = (props) => {
  const TodoItemStyles = {
    margin: 10,
    padding: 15,
    borderLeft:
      props.todo.completed === true
        ? "5px solid lightblue"
        : "5px solid lightgreen",
  };

  console.log(props);

  return (
    <div style={TodoItemStyles}>
      <span>
        <input type="checkbox" style={{ marginRight: 10 }}></input>
      </span>
      <span>{props.todo.desc}</span>
    </div>
  );
};

export default TodoItem;

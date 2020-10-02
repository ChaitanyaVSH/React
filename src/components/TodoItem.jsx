import React from "react";

const TodoItem = (props) => {
  const TodoItemStyles = {
    margin: 10,
    padding: 15,
    borderLeft:
      props.completed === "true"
        ? "5px solid lightblue"
        : "5px solid lightgreen",
  };

  console.log(props);

  return (
    <div style={TodoItemStyles}>
      <span>
        <input type="checkbox"></input>
      </span>
      <span> This is the todoItem</span>
    </div>
  );
};

export default TodoItem;

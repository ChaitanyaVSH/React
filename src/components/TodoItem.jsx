import React from "react";

const TodoItem = (props) => {
  const TodoItemStyles = {
    margin: 10,
    padding: 15,
    borderLeft: "3px solid lightblue",
  };

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

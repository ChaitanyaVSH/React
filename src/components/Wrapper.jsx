import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../components/wrapperStyles.css";

class Wrapper extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        {this.props.todos.map((todoItem) => (
          <TodoItem completed="false" todo={todoItem} />
        ))}
      </div>
    );
  }
}

export default Wrapper;

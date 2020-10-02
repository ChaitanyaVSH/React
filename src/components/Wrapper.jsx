import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../components/wrapperStyles.css";

class Wrapper extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default Wrapper;

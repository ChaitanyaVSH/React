import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../components/wrapperStyles.css";

class Wrapper extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <TodoItem completed="true" />
        <TodoItem completed="true" />
        <TodoItem completed="false" />
        <TodoItem completed="true" />
      </div>
    );
  }
}

export default Wrapper;

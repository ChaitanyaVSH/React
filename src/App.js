import React, { Component } from "react";
import "./App.css";
import BioData from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    todos: [
      { desc: "Do not give up on this", completed: true },
      { desc: "Slow and steady wins the race", completed: false },
      { desc: "Work hard", completed: true },
      { desc: "One Day you will be the CEO", completed: true },
      { desc: "All this came true", completed: true },
    ],
  };

  handleSubmit = (todoDesc) => {
    const newTodo = {
      desc: todoDesc,
      completed: true,
    };

    const todos = [...this.state.todos, newTodo];

    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div>
        <BioData />
        <AddTodo onSubmit={this.handleSubmit} />
        <Wrapper todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

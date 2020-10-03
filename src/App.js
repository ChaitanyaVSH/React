import React, { Component } from "react";
import "./App.css";
import BioData from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    todos: [
      { id: uuid(), desc: "Do not give up on this", completed: true },
      { id: uuid(), desc: "Slow and steady wins the race", completed: false },
      { id: uuid(), desc: "Work hard", completed: true },
      { id: uuid(), desc: "One Day you will be the CEO", completed: true },
      { id: uuid(), desc: "All this came true", completed: true },
    ],
  };

  handleSubmit = (todoDesc) => {
    const newTodo = {
      id: uuid(),
      desc: todoDesc,
      completed: false,
    };

    const todos = [...this.state.todos, newTodo];

    this.setState({
      todos: todos,
    });
    alert("ToDo with the desc " + todoDesc + " added");
  };

  handleFinish = (todoItem) => {
    const index = this.state.todos.indexOf(todoItem);
    console.log(index);
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div>
        <BioData />
        <AddTodo onSubmit={this.handleSubmit} />
        <Wrapper todos={this.state.todos} onFinish={this.handleFinish} />
      </div>
    );
  }
}

export default App;

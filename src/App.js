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
      { desc: "", completed: true },
      { desc: "", completed: true },
      { desc: "", completed: true },
      { desc: "", completed: true },
      { desc: "", completed: true },
    ],
  };
  render() {
    return (
      <div>
        <BioData />
        <AddTodo />
        <Wrapper />
      </div>
    );
  }
}

export default App;

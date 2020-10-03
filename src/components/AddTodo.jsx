import React, { Component } from "react";
import "../components/addTodo.css";

class AddTodo extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = (e) => {
    e.preventDefault();
    const todoDesc = this.state.text;
    this.props.onSubmit(todoDesc);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <input
            type="text"
            name="text"
            placeholder="Add a ToDo"
            onChange={this.onChange}
            value={this.state.text}
          />
          <button id="submit-book" onClick={this.onClick}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;

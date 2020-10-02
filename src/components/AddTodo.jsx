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
    this.setState({ text: "" });
  };

  onClick = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
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

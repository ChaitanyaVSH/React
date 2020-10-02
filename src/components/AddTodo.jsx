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
          <button id="submit-book">Submit</button>
        </div>
      </div>
    );
  }
}

export default AddTodo;

import React, { Component } from "react";
import "../components/wrapperStyles.css";

class Wrapper extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <div>
          <input type="checkbox"></input>
          <span> This is the todo</span>
        </div>
        <div>
          <input type="checkbox"></input>
          <span> This is the todo</span>
        </div>
        <div>
          <input type="checkbox"></input>
          <span> This is the todo</span>
        </div>
        <div>
          <input type="checkbox"></input>
          <span> This is the todo</span>
        </div>
      </div>
    );
  }
}

export default Wrapper;

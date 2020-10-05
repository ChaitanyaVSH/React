import React, { Component } from "react";

class TodoItem extends Component {
  state = {};

  getStyles() {
    return {
      margin: 10,
      padding: 15,
      borderLeft:
        this.props.todo.completed === true
          ? "5px solid lightblue"
          : "5px solid lightgreen",
    };
  }

  onFinish = (e) => {
    e.preventDefault();
    alert("Todo finished");
    this.props.finished(this.props.todo);
  };

  /**
   * LifeCycle Methods.
   * 1. These methods are run only once through the webpage loaded.
   * 2. These methods are useful to make any AJAX calls to the end-points or Backend systems to make the data available even before the render method is called to desing the Component.
   */
  componentDidMount() {
    /**
     * Perfect place to make an AJAX call.
     */
  }

  componentWillReceiveProps(nextProps) {
    /**
     * This is run everytime the parent component sends the props
     */
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * This life-cycle method is very useful to optimize the react app.
     * There might be a scenario where the component is re-rendered without any change in the state or props, just because the parent component has rendered. This might add latency to the system.
     *
     * This method should return true or false based on the changes in the props/state.
     */
  }

  componentWillUnmount() {
    /**
     * A clean up to be done can be put here
     */
  }

  static getDerivedStateFromProps(props, state) {
    /**
     * This method can be used in a use-case where you want to update/create the state based on the incoming props.
     */
  }

  getSnapshotBeforeUpdate() {
    /**
     * Create a backup of the data currently
     */
  }

  render() {
    // const styles = {
    //   This const will not create any TS issues.
    // }

    return (
      <div style={this.getStyles()}>
        <span>{this.props.todo.desc}</span>
        <span>
          <button
            className="btn btn-warning"
            style={{ float: "right" }}
            onClick={this.onFinish}
          >
            Finish
          </button>
        </span>
      </div>
    );
  }
}

export default TodoItem;

import React from "react";

class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  bindNewTask = (inputValue) => {
    this.setState({ newTask: inputValue.target.value });
  };

  resetList = () => {
    this.setState({
      newTask: "",
    });
    this.props.onReset();
  };

  addTask = () => {
    if (this.state.newTask !== "") {
      this.props.onAddTask(this.state.newTask);
      this.setState({ newTask: "" });
    }
  };

  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.addTask();
    }
  };

  render() {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <input
          onChange={this.bindNewTask}
          onKeyDown={this._handleKeyDown}
          value={this.state.newTask}
          style={{ width: "100%" }}
        />
        <button onClick={this.addTask}>Add</button>
        <button
          onClick={this.resetList}
          disabled={!this.state.newTask && this.props.taskList.length === 0}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default ToDoInput;

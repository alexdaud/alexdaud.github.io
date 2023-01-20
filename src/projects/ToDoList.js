import React from "react";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      taskList: [],
    };
    this.resetList = this.resetList.bind(this);
  }

  bindNewTask = (inputValue) => {
    this.setState({ newTask: inputValue.target.value });
  };

  // when declaring functions like this we need to add a bind(this)
  resetList() {
    this.setState({
      newTask: "",
      taskList: [],
    });
  }

  addTask = () => {
    if (this.state.newTask !== "") {
      this.setState((state) => ({
        taskList: [...state.taskList, state.newTask],
        newTask: "",
      }));
    }
  };

  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.addTask();
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>To-Do</h1>
        <div>
          <input
            onChange={this.bindNewTask}
            onKeyDown={this._handleKeyDown}
            value={this.state.newTask}
            style={{ minWidth: "160px" }}
          />
          <button onClick={this.addTask}>Add</button>
          <button
            onClick={this.resetList}
            disabled={!this.state.newTask && this.state.taskList.length === 0}
          >
            Reset
          </button>
        </div>
        <div style={{ alignSelf: "start" }}>
          <ul>
            {this.state.taskList.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDoList;

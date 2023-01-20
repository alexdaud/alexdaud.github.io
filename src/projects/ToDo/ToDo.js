import React from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
  }

  resetList = () => {
    this.setState({
      taskList: [],
    });
  };

  addTask = (newTask) => {
    this.setState((state) => ({
      taskList: [...state.taskList, newTask],
    }));
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
        <ToDoInput
          onAddTask={this.addTask}
          onReset={this.resetList}
          taskList={this.state.taskList}
        ></ToDoInput>
        <ToDoList taskList={this.state.taskList}></ToDoList>
      </div>
    );
  }
}

export default ToDo;

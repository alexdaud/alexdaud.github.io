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
      <div className="flex flex-col justify-center align-middle">
        <h1 className="text-3xl font-bold m-5 text-center">To-Do</h1>
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

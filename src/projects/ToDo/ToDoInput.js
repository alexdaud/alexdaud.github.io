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
      <div className="flex">
        <input
          onChange={this.bindNewTask}
          onKeyDown={this._handleKeyDown}
          value={this.state.newTask}
          className="shadow appearance-none border rounded py-2 px-3
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full max-w-sm"
        />
        <button
          onClick={this.addTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Add
        </button>
        <button
          onClick={this.resetList}
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 border border-gray-500 rounded
          disabled:opacity-20 disabled:hover:cursor-default  disabled:hover:bg-gray-400"
          disabled={!this.state.newTask && this.props.taskList.length === 0}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default ToDoInput;

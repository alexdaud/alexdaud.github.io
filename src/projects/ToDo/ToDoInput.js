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
          className="shadow appearance-none border rounded py-1 px-3
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full mr-3"
        />
        <button
          onClick={this.addTask}
          className="bg-sky-600 hover:bg-sky-700 text-white leading-3 font-bold py-2 px-2.5 text-sm rounded mr-1.5"
        >
          Add
        </button>
        <button
          onClick={this.resetList}
          className="bg-sky-100 hover:bg-sky-200 text-sky-900 text-sm leading-3 font-bold rounded py-2 px-2.5
          disabled:opacity-20 disabled:hover:cursor-default  disabled:hover:bg-sky-100"
          disabled={!this.state.newTask && this.props.taskList.length === 0}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default ToDoInput;

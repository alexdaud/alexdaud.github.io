import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-square pl-4">
          {this.props.taskList.map((task, index) => (
            <li key={index} className="break-words">
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;

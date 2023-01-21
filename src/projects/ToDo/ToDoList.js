import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      !!this.props.taskList.length && (
        <div className="pt-2">
          <ul className="list-square pl-5">
            {this.props.taskList.map((task, index) => (
              <li key={index} className="break-words">
                {task}
              </li>
            ))}
          </ul>
        </div>
      )
    );
  }
}

export default ToDoList;

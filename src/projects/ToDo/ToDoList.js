import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      <div style={{ alignSelf: "start" }}>
        <ul>
          {this.props.taskList.map((task, index) => (
            <li key={index} style={{ wordBreak: "break-word" }}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;

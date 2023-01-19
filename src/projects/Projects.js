import React from "react";
import ToDoList from "./ToDoList";
import QuoteGenerator from "./QuoteGenerator";

class Projects extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <ToDoList />
          <hr style={{ width: "100%" }} />
          <QuoteGenerator />
        </div>
      </div>
    );
  }
}
export default Projects;

import React from "react";
import QuoteGenerator from "./QuoteGenerator";
import ToDo from "./ToDo/ToDo";

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
        <div style={{ maxWidth: "500px", padding: "0 12px" }}>
          <ToDo />
          <hr style={{ width: "100%" }} />
          <QuoteGenerator />
        </div>
      </div>
    );
  }
}
export default Projects;

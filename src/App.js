import logo from "./logo.svg";
import "./App.css";
import Projects from "./projects/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;

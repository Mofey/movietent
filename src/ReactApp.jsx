import logo from './logo.svg';
import { Outlet, Link } from "react-router-dom";

function ReactApp() {
  const name = "React"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/Movietent">Hello {name}</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Outlet />
    </div>
  );
}

export default ReactApp;
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = ({ title }) => <div className="header">{title}</div>;

ReactDOM.render(
  <React.StrictMode>
    <App title="The GitHub Cards App" />
  </React.StrictMode>,
  document.getElementById("root")
);

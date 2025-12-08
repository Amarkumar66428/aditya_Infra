import React from "react";
import Router from "./Routes";
import "./App.css";
import "./styles.scss";

function App() {

  return (
    <React.Fragment>
      <div className="app-main">
        <Router />
      </div>
    </React.Fragment>
  );
}

export default App;

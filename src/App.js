import logo from "./assets/logo2.jpg";
import { Table } from "./components/table";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Table />
    </div>
  );
}

export default App;

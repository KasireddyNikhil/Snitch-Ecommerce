// src/App.js
import React from "react";
import Listings from "./Listings";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snitch</h1>
      </header>
      <Listings />
    </div>
  );
}

export default App;

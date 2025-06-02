import { useState } from "react";

import "./App.css";

import Weather from "./components/Weather";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="app-container">
        <Weather />
      </div>
    </div>
  );
}

export default App;

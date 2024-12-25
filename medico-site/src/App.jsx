import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <div className="app-container">
        <Header />
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;

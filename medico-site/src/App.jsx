import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <React.Fragment>
      <div className="app-container">
        {/* <Home /> */}
        <AboutUs />
      </div>
    </React.Fragment>
  );
}

export default App;

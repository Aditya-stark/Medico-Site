import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <div className="app-container">
        <Home />
        {/* <AboutUs /> */}
        {/* <Contact /> */}
      </div>
    </React.Fragment>
  );
}

export default App;

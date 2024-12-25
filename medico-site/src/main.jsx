import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
import Header from "./components/Header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Header />
      <div className="pt-20">
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <div className="pt-20">
          <App />
        </div>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

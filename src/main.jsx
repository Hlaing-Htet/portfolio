import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HomeContextProvider } from "./context/HomeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HomeContextProvider>
    <App />
  </HomeContextProvider>
);

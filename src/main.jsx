import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HomeContextProvider } from "./context/HomeContext";
import { SocialsContextProvider } from "./context/SocialsContext";
import { SkillsCatsContextProvider } from "./context/SkillsCatContext";
import { SkillsContextProvider } from "./context/SkillsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HomeContextProvider>
    <SocialsContextProvider>
      <SkillsCatsContextProvider>
        <SkillsContextProvider>
          <App />
        </SkillsContextProvider>
      </SkillsCatsContextProvider>
    </SocialsContextProvider>
  </HomeContextProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HomeContextProvider } from "./context/HomeContext";
import { SocialsContextProvider } from "./context/SocialsContext";
import { SkillsCatsContextProvider } from "./context/SkillsCatContext";
import { SkillsContextProvider } from "./context/SkillsContext";
import { ProjectsCatsContextProvider } from "./context/ProjectsCatContext";
import { ProjectsContextProvider } from "./context/ProjectsContext";
import { MusicContextProvider } from "./context/MusicContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HomeContextProvider>
    <SocialsContextProvider>
      <SkillsCatsContextProvider>
        <SkillsContextProvider>
          <ProjectsCatsContextProvider>
            <ProjectsContextProvider>
              <MusicContextProvider>
                <App />
              </MusicContextProvider>
            </ProjectsContextProvider>
          </ProjectsCatsContextProvider>
        </SkillsContextProvider>
      </SkillsCatsContextProvider>
    </SocialsContextProvider>
  </HomeContextProvider>
);

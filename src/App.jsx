import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Tools } from "./components/Tools";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import MusicPlayer from "./components/MusicPlayer";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <>
      <MusicPlayer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />}>
            <Route path=":name" element={<Tools />} />
            <Route path="" element={<Navigate to={"/skills/frontend"} />} />
          </Route>
          <Route path="/projects" element={<ProjectsPage />}>
            <Route path=":name" element={<Projects />} />
            <Route
              path=""
              element={<Navigate to={"/projects/uiux-designs"} />}
            />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

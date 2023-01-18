import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProjectsByTitle from "./components/ProjectsByTitle";
import { Tools } from "./components/Tools";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import MusicPlayer from "./components/MusicPlayer";
import AdminPage from "./pages/AdminPage";
import DashboradPage from "./pages/DashboradPage";
import Home from "./components/dashboard/Home";
import About from "./components/dashboard/About";
import Skills from "./components/dashboard/Skills";
import Projects from "./components/dashboard/Projects";
import Contact from "./components/dashboard/Contact";
import Themes from "./components/dashboard/Themes";

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
            <Route path=":name" element={<ProjectsByTitle />} />
            <Route
              path=""
              element={<Navigate to={"/projects/uiux-designs"} />}
            />
          </Route>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/dashboard" element={<DashboradPage />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="themes" element={<Themes />} />
            <Route
              path=""
              element={<Navigate to={"/admin/dashboard/home"} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

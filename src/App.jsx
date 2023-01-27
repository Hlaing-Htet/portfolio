import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProjectsByTitle from "./components/ProjectsComponents/ProjectsByTitle";
import { Tools } from "./components/SkillsComponents/Tools";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import MusicPlayer from "./components/share/MusicPlayer";
import AdminPage from "./pages/AdminPage";
import DashboradPage from "./pages/DashboradPage";
import Home from "./components/dashboard/Home/Home";
import About from "./components/dashboard/About/About";
import Skills from "./components/dashboard/Skills/SkillsPage";
import Projects from "./components/dashboard/Projects/ProjectsPage";
import Contact from "./components/dashboard/Contact/Contact";
import Themes from "./components/dashboard/Theme/Themes";
import { GetSkillsCat } from "./service/SkillsCat/GetSkillsCat";

import AllProjects from "./components/ProjectsComponents/AllProjects";

const App = () => {
  const { skillsCats, loading } = GetSkillsCat();
  if (loading) {
    return null;
  }

  return (
    <>
      <MusicPlayer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />}>
            <Route path=":name" element={<Tools />} />
            <Route
              path=""
              element={<Navigate to={`/skills/${skillsCats[0]?.name}`} />}
            />
          </Route>
          <Route path="/projects" element={<ProjectsPage />}>
            <Route path=":name" element={<ProjectsByTitle />} />
            <Route path="all" element={<AllProjects />} />
            <Route path="" element={<Navigate to={`/projects/all`} />} />
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

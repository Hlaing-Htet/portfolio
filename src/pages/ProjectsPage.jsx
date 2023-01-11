import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/Title";
import { NavLink, Outlet } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" flex-grow bg-darkbackground h-screen overflow-hidden"
      >
        <Title name={"Projects"} />
        <nav className=" bg-darkbackground sticky top-32 flex z-10 justify-center gap-8 mb-5 border-b-2 border-primary">
          <NavLink
            to={`uiux-designs`}
            className={({ isActive }) =>
              isActive ? " text-primary p-3 font-bold" : " text-textcolor p-3"
            }
          >
            UI/UX Designs
          </NavLink>
          <NavLink
            to={"frontend-mentor"}
            className={({ isActive }) =>
              isActive ? " text-primary p-3 font-bold" : " text-textcolor p-3"
            }
          >
            Frontend Mentor
          </NavLink>
          <NavLink
            to={"mini-projects"}
            className={({ isActive }) =>
              isActive ? " text-primary p-3 font-bold" : " text-textcolor p-3"
            }
          >
            Mini Projects
          </NavLink>
          <NavLink
            to={"fullstack-app"}
            className={({ isActive }) =>
              isActive ? " text-primary p-3 font-bold" : " text-textcolor p-3"
            }
          >
            FullStack App
          </NavLink>
        </nav>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectsPage;

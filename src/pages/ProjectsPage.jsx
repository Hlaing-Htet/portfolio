import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/share/Title";
import { NavLink, Outlet } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

const ProjectsPage = () => {
  const themeColor = "#c9a227";

  return (
    <AnimatePresence>
      <AppLayout>
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" dark:bg-dark_background h-screen flex-grow overflow-x-hidden"
        >
          <div className=" bg-light_background dark:bg-dark_background z-10  sticky top-0 pt-5">
            <Title name={"Projects"} />
            <nav
              className=" dark:bg-dark_background bg-light_background py-5 flex gap-5 overflow-auto justify-center border-b-2 border-primary"
              style={{ borderColor: themeColor }}
            >
              <NavLink
                to={"fullstack-app"}
                className={({ isActive }) =>
                  isActive
                    ? " underline  font-bold text-light_textcolor  dark:text-dark_textcolor"
                    : "  text-light_textcolor dark:text-dark_textcolor  "
                }
              >
                FullStack App
              </NavLink>

              <NavLink
                to={"mini-projects"}
                className={({ isActive }) =>
                  isActive
                    ? " underline  font-bold text-light_textcolor  dark:text-dark_textcolor"
                    : "  text-light_textcolor dark:text-dark_textcolor  "
                }
              >
                Mini Projects
              </NavLink>
            </nav>
          </div>
          <Outlet />
        </motion.div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default ProjectsPage;

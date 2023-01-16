import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/Title";

import { NavLink, Outlet } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

const SkillsPage = () => {
  const themeColor = "#c9a227";

  return (
    <AnimatePresence>
      <AppLayout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" dark:bg-dark_background h-screen flex-grow overflow-x-hidden"
        >
          <div className=" bg-light_background dark:bg-dark_background z-10  sticky top-0 pt-5">
            <Title name={"Skills"} />
            <nav
              className=" dark:bg-dark_background sticky top-32 flex z-10 gap-2 justify-center  md:gap-8  border-b-2 px-2 py-5"
              style={{ borderColor: themeColor }}
            >
              <NavLink
                to={`frontend`}
                className={({ isActive }) =>
                  isActive
                    ? " underline  font-bold text-light_textcolor dark:text-dark_textcolor"
                    : "  text-light_textcolor dark:text-dark_textcolor "
                }
              >
                Front End
              </NavLink>
              <NavLink
                to={"backend"}
                className={({ isActive }) =>
                  isActive
                    ? " underline  font-bold text-light_textcolor dark:text-dark_textcolor"
                    : "  text-light_textcolor dark:text-dark_textcolor "
                }
              >
                Back End
              </NavLink>
              <NavLink
                to={"design-tools"}
                className={({ isActive }) =>
                  isActive
                    ? " underline  font-bold text-light_textcolor dark:text-dark_textcolor"
                    : "  text-light_textcolor dark:text-dark_textcolor "
                }
              >
                Design Tools
              </NavLink>
              <NavLink
                to={"others-tools"}
                className={({ isActive }) =>
                  isActive
                    ? " underline  font-bold text-light_textcolor dark:text-dark_textcolor"
                    : "  text-light_textcolor dark:text-dark_textcolor "
                }
              >
                Others
              </NavLink>
            </nav>
          </div>
          <Outlet />
        </motion.div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default SkillsPage;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/share/Title";
import { NavLink, Outlet } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { GetProjectsCat } from "../service/ProjectsCat/GetProjectsCat";
import { UseColor } from "../hooks/UseColor";
const ProjectsPage = () => {
  const themeColor = UseColor();
  const { projectsCats, loading } = GetProjectsCat();

  return (
    <AnimatePresence>
      <AppLayout>
        <div className=" bg-light_background dark:bg-dark_background h-screen flex-grow overflow-x-hidden">
          <div className=" bg-light_background dark:bg-dark_background z-10  sticky top-0 pt-5">
            <Title name={"Projects"} />
            <nav
              className=" dark:bg-dark_background bg-light_background py-5 flex gap-5 overflow-auto justify-center border-b-2 border-primary"
              style={{ borderColor: themeColor }}
            >
              <NavLink
                to={`all`}
                className={({ isActive }) =>
                  isActive
                    ? " underline  font-bold text-light_textcolor  dark:text-dark_textcolor"
                    : "  text-light_textcolor dark:text-dark_textcolor  "
                }
              >
                all
              </NavLink>
              {loading ? (
                <div>hi</div>
              ) : (
                projectsCats?.map(
                  (projectsCat) =>
                    projectsCat.show && (
                      <NavLink
                        key={projectsCat._id}
                        to={`${projectsCat.name}`}
                        className={({ isActive }) =>
                          isActive
                            ? " underline  font-bold text-light_textcolor  dark:text-dark_textcolor"
                            : "  text-light_textcolor dark:text-dark_textcolor  "
                        }
                      >
                        {projectsCat.name}
                      </NavLink>
                    )
                )
              )}
            </nav>
          </div>
          <Outlet />
        </div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default ProjectsPage;

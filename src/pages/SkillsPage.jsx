import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/share/Title";

import { NavLink, Outlet } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { GetSkillsCat } from "../service/SkillsCat/GetSkillsCat";
import ContentLoader from "react-content-loader";
const MyLoader = () => (
  <ContentLoader
    height={20}
    width={250}
    speed={1}
    backgroundColor={"#333"}
    foregroundColor={"#999"}
  >
    {/* Only SVG shapes */}

    <rect x="0" y="0" rx="5" ry="5" width="70" height="20" />
    <rect x="80" y="0" rx="5" ry="5" width="90" height="20" />
    <rect x="180" y="0" rx="5" ry="5" width="70" height="20" />
  </ContentLoader>
);
const SkillsPage = () => {
  const themeColor = "#c9a227";
  const { skillsCats, loading } = GetSkillsCat();

  console.log(skillsCats, loading);

  return (
    <AnimatePresence>
      <AppLayout>
        <div className=" dark:bg-dark_background h-screen flex-grow overflow-x-hidden">
          <div className=" bg-light_background dark:bg-dark_background z-10  sticky top-0 pt-5">
            <Title name={"Skills"} />
            <nav
              className=" dark:bg-dark_background bg-light_background py-5 flex gap-5 overflow-auto justify-center border-b-2 border-primary"
              style={{ borderColor: themeColor }}
            >
              {loading ? (
                <MyLoader />
              ) : skillsCats.length === 0 ? (
                <ul className=" text-light_textcolor dark:text-dark_textcolor">
                  <li>no navlink</li>
                </ul>
              ) : (
                skillsCats?.map(
                  (skillCat) =>
                    skillCat.show && (
                      <NavLink
                        key={skillCat._id}
                        to={`${skillCat.name}`}
                        className={({ isActive }) =>
                          isActive
                            ? " underline  font-bold text-light_textcolor  dark:text-dark_textcolor"
                            : "  text-light_textcolor dark:text-dark_textcolor  "
                        }
                      >
                        {skillCat.name}
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

export default SkillsPage;

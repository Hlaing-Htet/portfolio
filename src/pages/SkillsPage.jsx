import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/share/Title";

import { NavLink, Outlet } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { GetSkillsCat } from "../service/SkillsCat/GetSkillsCat";

const SkillsPage = () => {
  const themeColor = "#c9a227";
  const { skillsCats, loading } = GetSkillsCat();
  if (loading) {
    return <p>loading</p>;
  }

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
              className=" dark:bg-dark_background py-5 flex gap-5 overflow-auto justify-center"
              style={{ borderColor: themeColor }}
            >
              {skillsCats?.map((skillCat) => (
                <NavLink
                  to={`${skillCat.name}`}
                  key={skillCat._id}
                  className={({ isActive }) =>
                    isActive
                      ? " underline  font-bold text-light_textcolor block dark:text-dark_textcolor"
                      : "  text-light_textcolor dark:text-dark_textcolor block "
                  }
                >
                  {skillCat.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <Outlet />
        </motion.div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default SkillsPage;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/Title";
import music from "../assets/music/downfall.mp3";
import ReactAudioPlayer from "react-audio-player";
import { NavLink, Outlet } from "react-router-dom";

const SkillsPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" bg-darkbackground h-screen flex-grow overflow-x-hidden"
      >
        <ReactAudioPlayer
          src={music}
          loop={true}
          autoPlay={true}
          volume={0.1}
        />
        <Title name={"Skills"} />
        <nav className=" bg-darkbackground sticky top-32 flex z-10 justify-center gap-8 mb-5 border-b-2 border-primary">
          <NavLink
            to={`frontend`}
            className={({ isActive }) =>
              isActive ? " text-primary p-3 font-bold" : " text-textcolor p-3"
            }
          >
            Front End
          </NavLink>
          <NavLink
            to={"backend"}
            className={({ isActive }) =>
              isActive ? " text-primary p-3 font-bold" : " text-textcolor p-3"
            }
          >
            Back End
          </NavLink>
          <NavLink
            to={"design-tools"}
            className={({ isActive }) =>
              isActive ? " text-primary p-3 font-bold" : " text-textcolor p-3"
            }
          >
            Design Tools
          </NavLink>
          <NavLink
            to={"others-tools"}
            className={({ isActive }) =>
              isActive ? " text-primary p-3 font-bold" : " text-textcolor p-3"
            }
          >
            Others
          </NavLink>
        </nav>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillsPage;

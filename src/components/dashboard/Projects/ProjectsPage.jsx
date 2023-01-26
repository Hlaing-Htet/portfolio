import React from "react";
import { Title } from "../../share/Title";
import { motion } from "framer-motion";
import { GetProjectsCat } from "../../../service/ProjectsCat/GetProjectsCat";
import Category from "./Category";
import Project from "./Project";

const Projects = () => {
  const { projectsCats, loading } = GetProjectsCat();
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div className="dark:text-dark_textcolor  h-screen overflow-auto">
      <header className=" bg-dark_background z-10  sticky top-0 pt-5">
        <Title name={"Projects Page"} />
      </header>
      <motion.main
        initial={{
          y: "100vh",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 250,
        }}
        className=" m-5  "
      >
        <Category />
        <Project />
      </motion.main>
    </div>
  );
};

export default Projects;

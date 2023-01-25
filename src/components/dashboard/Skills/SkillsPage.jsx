import React from "react";
import { Title } from "../../share/Title";
import { GetSkillsCat } from "../../../service/SkillsCat/GetSkillsCat";
import { GetSkills } from "../../../service/Skills/GetSkills";
import { motion } from "framer-motion";
import Category from "./Category";
import Skills from "./Skills";

const SkillsPage = () => {
  const { skillsCats, loading } = GetSkillsCat();
  const { skills, loading: skillsLoading } = GetSkills();
  if (loading && skillsLoading) {
    return <p>Loading</p>;
  }
  console.log("skillsCats", skillsCats);
  console.log("skills", skills);
  return (
    <div className="dark:text-dark_textcolor  h-screen overflow-auto">
      <header className=" bg-dark_background z-10  sticky top-0 py-5">
        <Title name={"Skills Page"} />
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
        <Skills />
      </motion.main>
    </div>
  );
};

export default SkillsPage;

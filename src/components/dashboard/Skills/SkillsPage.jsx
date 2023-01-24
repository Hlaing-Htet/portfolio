import React from "react";
import { Title } from "../../Title";
import { GetSkillsCat } from "../../../service/SkillsCat/GetSkillsCat";
import { motion } from "framer-motion";
import Category from "./Category";
import Skills from "./Skills";

const SkillsPage = () => {
  const { skillsCats, loading } = GetSkillsCat();
  if (loading) {
    return <p>Loading</p>;
  }
  console.log(skillsCats);
  return (
    <div>
      <header className=" bg-dark_background z-10  sticky top-0 pt-5">
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

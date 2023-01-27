import React from "react";
import { motion } from "framer-motion";
export function ExperienceCard({ children, name, parag }) {
  const themeColor = "#c9a227";

  return (
    <motion.div
      initial={{
        x: "100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        delay: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 250,
      }}
      className=" p-3  col-span-1 flex flex-col justify-center items-center  shadow-lg"
      style={{ backgroundColor: themeColor }}
    >
      {children}
      <h2 className=" m-3 text-center text-light_background dark:text-dark_background  font-semibold">
        {name}
      </h2>
      <p className=" text-center font-semibold text-light_background dark:text-dark_background opacity-60  ">
        {parag}
      </p>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";
export function Title({ name }) {
  const themeColor = "#c9a227";

  return (
    <div className=" ">
      <motion.h1
        initial={{
          y: "-100vh",
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
        className=" bg-light_background dark:bg-dark_background text-light_textcolor dark:text-dark_textcolor  w-fit mx-auto border-2 border-dotted  font-semibold py-10 md:px-52 px-24 text-2xl "
      >
        {name}
      </motion.h1>
    </div>
  );
}

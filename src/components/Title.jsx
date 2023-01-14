import React from "react";
import { motion } from "framer-motion";
export function Title({ name }) {
  const themeColor = "#c9a227";

  return (
    <div className=" z-10  sticky top-3">
      <motion.h1
        initial={{
          y: "-100vh",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className=" text-light_textcolor dark:text-dark_textcolor  w-fit mx-auto border-2 border-dotted  font-semibold py-10 px-52 mt-5 text-2xl "
      >
        {name}
      </motion.h1>
    </div>
  );
}

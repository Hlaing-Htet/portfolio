import React from "react";
import { motion } from "framer-motion";
export function Title({ name }) {
  return (
    <div className=" z-10 bg-darkbackground sticky top-3">
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
        className=" bg-darkbackground  w-fit mx-auto border-2 border-dotted py-10 px-52 mt-5 text-2xl text-textcolor"
      >
        {name}
      </motion.h1>
    </div>
  );
}

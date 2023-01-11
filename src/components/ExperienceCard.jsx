import React from "react";
import { motion } from "framer-motion";
export function ExperienceCard({ children, name, parag }) {
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
      }}
      className=" p-3  col-span-1 flex flex-col justify-center items-center bg-primary shadow-lg"
    >
      {children}
      <h2 className=" m-3 text-center text-background  font-semibold">
        {name}
      </h2>
      <p className=" text-center font-semibold text-background opacity-60  ">
        {parag}
      </p>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";
export function Skill({ HTML, name, rate, time = 0.1 }) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: time, type: "spring", damping: 25, stiffness: 250 }}
      className=" bg-background flex flex-col items-center justify-center gap-8 p-5"
    >
      <img src={HTML} className=" h-16" alt="" />
      <div className="w-full flex flex-col items-center ">
        <h2 className=" text-primary text-lg font-semibold">{name}</h2>
        <div className=" text-textcolor">{rate}</div>
      </div>
    </motion.div>
  );
}

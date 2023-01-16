import React from "react";
import { motion } from "framer-motion";
export function Skill({ HTML, name, rate, time = 0.1 }) {
  const themeColor = "#c9a227";

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: time, type: "spring", damping: 25, stiffness: 250 }}
      className=" shadow-lg bg-light_background_soft dark:bg-dark_background_soft flex flex-col items-center justify-center gap-8 p-5"
    >
      <img src={HTML} className=" h-16" alt="" />
      <div className="w-full flex flex-col items-center ">
        <h2 className=" text-lg font-semibold" style={{ color: themeColor }}>
          {name}
        </h2>
        <div className=" opacity-60 text-light_textcolor dark:text-dark_textcolor">
          {rate}
        </div>
      </div>
    </motion.div>
  );
}

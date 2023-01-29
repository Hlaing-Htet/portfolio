import React from "react";
import { motion } from "framer-motion";
import { UseColor } from "../../hooks/UseColor";
export function Skill({ skill, index }) {
  const themeColor = UseColor();

  return (
    <motion.div
      key={skill._id}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 250,
      }}
      className=" shadow-lg bg-light_background_soft dark:bg-dark_background_soft flex flex-col items-center justify-center gap-8 p-5"
    >
      <img
        src={`${import.meta.env.VITE_IMG_URL}/${skill?.image}`}
        className=" h-16"
        alt=""
      />
      <div className="w-full flex flex-col items-center ">
        <h2 className=" text-lg font-semibold" style={{ color: themeColor }}>
          {skill.name}
        </h2>
        <div className=" opacity-60 text-light_textcolor dark:text-dark_textcolor">
          {skill.level}
        </div>
      </div>
    </motion.div>
  );
}

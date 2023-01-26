import React from "react";

import { motion } from "framer-motion";
import { useState } from "react";

const ProjectDetail = ({ index, project }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [mouseLeave, setMouseLeave] = useState(false);

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 250,
      }}
      className="mb-5 relative overflow-hidden"
      onMouseEnter={() => {
        setMouseEnter(true);
        setMouseLeave(false);
      }}
      onMouseLeave={() => {
        setMouseLeave(true);
        setTimeout(() => setMouseEnter(false), 200);
      }}
    >
      {mouseEnter && (
        <motion.div
          initial={mouseLeave ? { y: 0 } : { y: "100vh" }}
          animate={mouseLeave ? { y: "100vh" } : { y: 0 }}
          transition={{
            type: "tween",
          }}
          className=" absolute w-full h-full flex justify-center items-center bg-dark_background_soft bg-opacity-50"
        >
          <div className=" flex gap-5">
            <a
              target="_blank"
              href={project?.demo_link}
              className=" p-3 w-20 text-center bg-dark_background hover:scale-110 duration-100"
            >
              Demo
            </a>
            <a
              target="_blank"
              href={project?.code_link}
              className=" p-3 w-20 text-center bg-dark_background hover:scale-110 duration-100"
            >
              Code
            </a>
          </div>
        </motion.div>
      )}
      <figure className=" w-full">
        <img
          src={`${import.meta.env.VITE_IMG_URL}/${project?.image}`}
          className="w-full"
          alt=""
        />
      </figure>
    </motion.div>
  );
};

export default ProjectDetail;

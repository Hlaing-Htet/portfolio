import React from "react";
import image from "../../assets/master_note.png";
import image1 from "../../assets/library.png";
import image2 from "../../assets/library2.png";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectDetail = ({ index = 0 }) => {
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
              href="https://google.com"
              className=" p-3 w-20 text-center bg-dark_background hover:scale-110 duration-100"
            >
              Demo
            </a>
            <a
              target="_blank"
              href="https://google.com"
              className=" p-3 w-20 text-center bg-dark_background hover:scale-110 duration-100"
            >
              Code
            </a>
          </div>
        </motion.div>
      )}
      <figure>
        <img src={image} alt="" />
      </figure>
    </motion.div>
  );
};

export default ProjectDetail;

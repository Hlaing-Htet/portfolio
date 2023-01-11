import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export function ContactBtn({}) {
  return (
    <Link to={"/contact"}>
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
          textShadow: "0px 0px 8px rgb(255,255,255)",
          transition: {
            duration: 0.5,
            repeat: Infinity,
          },
        }}
        className=" bg-primary p-5 px-10 text-xl font-medium"
      >
        CONTACT
      </motion.button>
    </Link>
  );
}

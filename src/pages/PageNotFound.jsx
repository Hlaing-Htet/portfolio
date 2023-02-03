import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //   transition={{ duration: 1 }}
      className=" fixed w-full flex gap-10 flex-col items-center justify-center h-screen z-50 text-light_textcolor dark:text-dark_textcolor bg-light_background dark:bg-dark_background"
    >
      <h1 className=" text-9xl">404</h1>
      <p className=" opacity-60 text-xl">Page does not exit </p>
      <Link
        to={"/"}
        className=" p-3 bg-light_background_soft dark:bg-dark_background_soft"
      >
        go back home
      </Link>
    </motion.div>
  );
};

export default PageNotFound;

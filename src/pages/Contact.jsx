import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/Title";

const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" flex-grow bg-darkbackground h-screen overflow-hidden"
      >
        <Title name={"Contact"} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;

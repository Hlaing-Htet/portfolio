import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/share/Title";
import AppLayout from "../layouts/AppLayout";

const ContactPage = () => {
  return (
    <AnimatePresence>
      <AppLayout>
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" dark:bg-dark_background h-screen flex-grow overflow-x-hidden"
        >
          <div className=" bg-light_background dark:bg-dark_background z-10  sticky top-0 pt-5">
            <Title name={"Contact"} />
          </div>
        </motion.div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default ContactPage;

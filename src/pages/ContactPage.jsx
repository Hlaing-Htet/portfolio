import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/Title";
import AppLayout from "../layouts/AppLayout";

const ContactPage = () => {
  return (
    <AnimatePresence>
      <AppLayout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" flex-grow bg-darkbackground h-screen overflow-hidden"
        >
          <Title name={"Contact"} />
        </motion.div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default ContactPage;

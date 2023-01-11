import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/Title";
import music from "../assets/music/downfall.mp3";
import ReactAudioPlayer from "react-audio-player";
const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" bg-darkbackground h-screen overflow-hidden"
      >
        <ReactAudioPlayer
          src={music}
          loop={true}
          autoPlay={true}
          volume={0.1}
        />
        <Title name={"Contact"} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;

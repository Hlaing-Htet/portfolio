import React, { useState } from "react";
import music from "../assets/music/downfall.mp3";
import ReactAudioPlayer from "react-audio-player";
import { SiYoutubemusic } from "react-icons/si";
import { motion } from "framer-motion";
const MusicPlayer = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div className=" fixed top-1/2 -translate-y-1/2 right-3 z-10">
      <motion.button
        animate={
          click
            ? {
                rotate: 360,
              }
            : {
                rotate: 0,
              }
        }
        transition={
          click && {
            ease: "linear",
            duration: 2,
            repeat: Infinity,
          }
        }
      >
        <SiYoutubemusic className=" text-5xl text-primary" />
      </motion.button>
      <ReactAudioPlayer
        onPlay={() => setClick(true)}
        onPause={() => setClick(false)}
        loop={true}
        src={music}
        autoPlay={true}
        controls
        volume={0.1}
        className={` absolute top-0 opacity-0`}
      />
    </div>
  );
};

export default MusicPlayer;

import React, { useState, useEffect } from "react";
import music from "../../assets/music/downfall.mp3";
import ReactAudioPlayer from "react-audio-player";
import { SiYoutubemusic } from "react-icons/si";
import { motion } from "framer-motion";
import { BiMusic } from "react-icons/bi";
import { UseColor } from "../../hooks/UseColor";
import { GetMusic } from "../../service/Music/GetMusics";
const MusicPlayer = () => {
  const { musics, loading } = GetMusic();
  const themeColor = UseColor();

  const [click, setClick] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  if (loading) {
    return;
  }
  const urlLink = `${import.meta.env.VITE_IMG_URL}/${musics[0]?.title}`;
  const variants = {
    default: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      {musics.length !== 0 && musics[0].show && (
        <div className=" fixed top-1/2 -translate-y-1/2 right-3 z-20">
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
            <SiYoutubemusic
              className=" text-5xl bg-light_background_soft dark:bg-dark_background_soft rounded-full shadow-xl "
              style={{ color: themeColor }}
            />
          </motion.button>
          <ReactAudioPlayer
            onPlay={() => setClick(true)}
            onPause={() => setClick(false)}
            loop={true}
            src={urlLink}
            controls
            volume={0.1}
            className={` absolute top-0 opacity-0`}
          />
        </div>
      )}
      {click && (
        <motion.div
          variants={variants}
          animate="default"
          transition={{
            ease: "linear",
            duration: 0.1,
          }}
          className=" fixed   rounded-full  z-20 "
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
            }}
            className=" relative"
          >
            <motion.button className=" absolute left-12  -top-2 ">
              <BiMusic style={{ color: themeColor }} />
            </motion.button>
            <motion.button className=" absolute -left-16  -top-2">
              <BiMusic style={{ color: themeColor }} />
            </motion.button>
            <motion.button className=" absolute top-12 -left-2 ">
              <BiMusic style={{ color: themeColor }} />
            </motion.button>
            <motion.button className=" absolute -top-16 -left-2 ">
              <BiMusic style={{ color: themeColor }} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MusicPlayer;

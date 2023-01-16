import { ContactBtn } from "./../components/ContactBtn";
import React, { useState } from "react";
import HeroImg from "../assets/homeColor.png";

import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoPlus } from "react-icons/go";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const HomePage = () => {
  const themeColor = "#c9a227";
  const [isHover, setIsHover] = useState(false);
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["HLAING HTET", "WEB DEVELOPER"],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" flex-grow overflow-hidden grid grid-cols-2 bg-light_background dark:bg-dark_background h-screen"
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          className=" col-span-1 h-full bg-light_background_soft dark:bg-dark_background_soft"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <motion.img
            animate={{
              x: [0, 5, -5, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
            }}
            src={HeroImg}
            className="h-full absolute saturate-0 transition-all duration-300 left-24 hover:saturate-100"
            alt=""
          />
          {isHover && (
            <div className=" absolute top-1/2 -translate-y-1/2 right-6 flex flex-col gap-20">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0,
                }}
                className="    p-1 duration-300 hover:scale-150"
                style={{ backgroundColor: themeColor }}
              >
                <FaFacebookF />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.1,
                }}
                className="  bg-primary p-1 duration-300 hover:scale-150"
              >
                <FaInstagram />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.2,
                }}
                className="  bg-primary p-1 duration-300 hover:scale-150"
              >
                <FaYoutube />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.3,
                }}
                className="    bg-primary p-1 duration-300 hover:scale-150"
              >
                <FaGithub />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.4,
                }}
                className="    bg-primary p-1 duration-300 hover:scale-150"
              >
                <FaLinkedinIn />
              </motion.button>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-5  col-span-1"
        >
          <motion.div
            animate={{
              rotate: 360,
              opacity: [0, 1, 0],
            }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute right-6 top-0 "
          >
            <GoPlus className=" text-8xl  " style={{ color: themeColor }} />
          </motion.div>
          <motion.div
            animate={{
              rotate: -360,
              opacity: [0, 1, 0],
            }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute left-2/3 top-2/3"
          >
            <GoPlus className=" text-5xl  " style={{ color: themeColor }} />
          </motion.div>

          <div className=" flex flex-col gap-10  justify-center h-4/5">
            <h1 className=" dark:text-dark_textcolor text-light_textcolor text-5xl">
              Hi THERE!
            </h1>
            <p>
              <span className=" dark:text-dark_textcolor text-light_textcolor text-4xl">
                I'M{" "}
              </span>
              <span
                className=" font-name text-5xl"
                style={{ color: themeColor }}
                ref={el}
              ></span>
            </p>
            <div className=" p-3 w-3/4" style={{ backgroundColor: themeColor }}>
              <p className=" text-xl text-light_textcolor font-medium">
                FullStack Developer
              </p>
            </div>
            <p className=" dark:text-dark_textcolor opacity-60 text-light_textcolor w-2/3">
              Love to create designs and coding . In good logical Thinking and
              Problem Solving
            </p>
          </div>
          <ContactBtn />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;

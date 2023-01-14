import { ExperienceCard } from "../components/../components/ExperienceCard";
import { Title } from "./../components/Title";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Photo from "../assets/homeColor.png";
//icons
import { BsAwardFill } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

import { FaPhotoVideo } from "react-icons/fa";
import { ContactBtn } from "../components/ContactBtn";

const AboutPage = () => {
  const themeColor = "#c9a227";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" flex-grow  bg-light_background dark:bg-dark_background overflow-hidden  h-screen"
      >
        <Title name={"About Me"} className="" />
        <div className=" flex-grow grid grid-cols-3">
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className=" col-span-1"
          >
            <img src={Photo} className=" w-full" alt="" />
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            className=" col-span-2  p-5  flex flex-col"
          >
            <div className="  grid grid-cols-4 gap-5">
              <ExperienceCard name={"Services"} parag={"What I Offer ?"}>
                <RiServiceFill className=" w-full text-3xl text-light_background dark:text-dark_background" />
              </ExperienceCard>
              <ExperienceCard name={"Experience"} parag={"3+ years Working"}>
                <MdOutlineCastForEducation className=" w-full text-3xl text-light_background dark:text-dark_background" />
              </ExperienceCard>
              <ExperienceCard name={"Experience"} parag={"3+ years Working"}>
                <BsAwardFill className=" w-full text-3xl text-light_background dark:text-dark_background" />
              </ExperienceCard>
              <ExperienceCard name={"Experience"} parag={"3+ years Working"}>
                <AiFillProject className=" w-full text-3xl text-light_background dark:text-dark_background" />
              </ExperienceCard>
            </div>
            <div className=" flex-grow  flex flex-col justify-center">
              <h3 className=" text-light_textcolor dark:text-dark_textcolor font-semibold text-xl mt-5">
                What I do ?
              </h3>
              <div className=" grid grid-cols-2 gap-5 my-10">
                <div className=" flex items-center gap-5">
                  <span>
                    <MdOutlineDraw
                      className="  text-6xl"
                      style={{ color: themeColor }}
                    />
                  </span>
                  <span className=" text-light_textcolor dark:text-dark_textcolor">
                    Drawing Web Design
                  </span>
                </div>
                <div className=" flex items-center gap-5">
                  <span>
                    <FaCode
                      className=" text-6xl"
                      style={{ color: themeColor }}
                    />
                  </span>
                  <span className=" text-light_textcolor dark:text-dark_textcolor">
                    Writing FrontEnd{" "}
                  </span>
                </div>
                <div className=" flex items-center gap-5">
                  <span>
                    <FaServer
                      className=" text-6xl"
                      style={{ color: themeColor }}
                    />
                  </span>
                  <span className=" text-light_textcolor dark:text-dark_textcolor">
                    Writing BackEnd{" "}
                  </span>
                </div>
                <div className=" flex items-center gap-5">
                  <span>
                    <FaPhotoVideo
                      className=" text-6xl"
                      style={{ color: themeColor }}
                    />
                  </span>
                  <span className=" text-light_textcolor dark:text-dark_textcolor">
                    Video Editing
                  </span>
                </div>
              </div>
            </div>
            <ContactBtn />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutPage;

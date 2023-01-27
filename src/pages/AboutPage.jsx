import { ExperienceCard } from "../components/AboutComponents/ExperienceCard";
import { Title } from "../components/share/Title";
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
import { ContactBtn } from "../components/share/ContactBtn";
import AppLayout from "../layouts/AppLayout";

const AboutPage = () => {
  const themeColor = "#c9a227";

  return (
    <AnimatePresence>
      <AppLayout>
        <div className=" flex-grow flex flex-col  bg-light_background dark:bg-dark_background overflow-hidden  h-screen">
          <div className="  pt-5">
            <Title name={"About Me"} className="" />
          </div>
          <div className=" my-auto  grid grid-cols-3">
            <motion.div
              initial={{
                x: "-100vw",
              }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                damping: 25,
                stiffness: 250,
              }}
              className=" col-span-1"
            >
              <img src={Photo} className=" w-full" alt="" />
            </motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                damping: 25,
                stiffness: 250,
              }}
              className=" col-span-2  p-5  flex flex-col"
            >
              <div className="  grid grid-cols-3 gap-5">
                <ExperienceCard name={"Services"} parag={"What I Offer ?"}>
                  <RiServiceFill className=" w-full text-3xl text-light_background dark:text-dark_background" />
                </ExperienceCard>
                <ExperienceCard name={"Education"} parag={"1+ year Learning"}>
                  <MdOutlineCastForEducation className=" w-full text-3xl text-light_background dark:text-dark_background" />
                </ExperienceCard>
                <ExperienceCard name={"Experience"} parag={" not Working"}>
                  <BsAwardFill className=" w-full text-3xl text-light_background dark:text-dark_background" />
                </ExperienceCard>
              </div>
              <div className=" flex-grow flex flex-col  justify-center">
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
                <ContactBtn />
              </div>
            </motion.div>
          </div>
        </div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default AboutPage;

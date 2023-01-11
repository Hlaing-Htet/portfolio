import { ExperienceCard } from "../components/../components/ExperienceCard";
import { Title } from "./../components/Title";
import React from "react";
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

import music from "../assets/music/downfall.mp3";
import ReactAudioPlayer from "react-audio-player";

const AboutPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" flex flex-col flex-grow bg-darkbackground  h-screen overflow-hidden"
      >
        <ReactAudioPlayer
          src={music}
          loop={true}
          autoPlay={true}
          volume={0.1}
        />

        <Title name={"About Me"} className="" />
        <div className=" flex-grow grid grid-cols-3">
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className=" col-span-1 relative"
          >
            <img src={Photo} className=" w-full " alt="" />
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            className=" col-span-2  px-5 pt-10"
          >
            <div className=" h-1/5 grid grid-cols-4 gap-5">
              <ExperienceCard name={"Scrvices"} parag={"What I Offer ?"}>
                <RiServiceFill className=" w-full text-3xl text-darkbackground" />
              </ExperienceCard>
              <ExperienceCard name={"Experience"} parag={"3+ years Working"}>
                <MdOutlineCastForEducation className=" w-full text-3xl text-darkbackground" />
              </ExperienceCard>
              <ExperienceCard name={"Experience"} parag={"3+ years Working"}>
                <BsAwardFill className=" w-full text-3xl text-darkbackground" />
              </ExperienceCard>
              <ExperienceCard name={"Experience"} parag={"3+ years Working"}>
                <AiFillProject className=" w-full text-3xl text-darkbackground" />
              </ExperienceCard>
            </div>
            <div className=" h-4/5 flex flex-col justify-center">
              <h3 className=" text-textcolor font-semibold text-xl mt-10">
                What I do ?
              </h3>
              <div className=" grid grid-cols-2 gap-5 my-10">
                <div className=" flex items-center gap-5">
                  <span>
                    <MdOutlineDraw className=" text-primary text-6xl" />
                  </span>
                  <span className=" text-textcolor">Drawing Web Design</span>
                </div>
                <div className=" flex items-center gap-5">
                  <span>
                    <FaCode className=" text-primary text-6xl" />
                  </span>
                  <span className=" text-textcolor">Writing FrontEnd </span>
                </div>
                <div className=" flex items-center gap-5">
                  <span>
                    <FaServer className=" text-primary text-6xl" />
                  </span>
                  <span className=" text-textcolor">Writing BackEnd </span>
                </div>
                <div className=" flex items-center gap-5">
                  <span>
                    <FaPhotoVideo className=" text-primary text-6xl" />
                  </span>
                  <span className=" text-textcolor">Video Editing</span>
                </div>
              </div>
              <ContactBtn />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutPage;

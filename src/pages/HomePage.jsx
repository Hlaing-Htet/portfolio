import { TypedText } from "../components/HomeComponents/TypedText";
import React, { useState } from "react";
//components
import { ContactBtn } from "../components/share/ContactBtn";

import { motion, AnimatePresence } from "framer-motion";
//icons
import { GoPlus } from "react-icons/go";

import AppLayout from "../layouts/AppLayout";
import { Link } from "react-router-dom";
//service
import { GetHomeData } from "../service/HomeData/GetHomeData";
import { GetSocials } from "../service/Socials/GetSocials";

const HomePage = () => {
  const themeColor = "#c9a227";
  const [isHover, setIsHover] = useState(false);
  const { homeDatas, loading } = GetHomeData();
  const { socials, loading: socialsLoading } = GetSocials();
  if (loading && socialsLoading) {
    return null;
  }

  const data = homeDatas;
  return (
    <AnimatePresence>
      <AppLayout>
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" flex-grow overflow-hidden grid grid-cols-2 bg-light_background dark:bg-dark_background h-screen"
        >
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className=" col-span-1 h-full flex items-center justify-center bg-light_background_soft dark:bg-dark_background_soft"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <motion.img
              animate={{
                x: [0, 5, -5, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
              }}
              src={`${import.meta.env.VITE_IMG_URL}/${data?.image}`}
              className=" h-full object-contain  saturate-0 transition-all duration-300  hover:saturate-100"
              alt=""
            />

            <div
              className={`${
                isHover ? "opacity-100" : "opacity-0"
              } fixed top-0 h-screen right-6 transition-all duration-200 justify-center items-center flex flex-col gap-20`}
            >
              {socials?.map((social) => (
                <motion.div
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
                  key={social._id}
                >
                  <a
                    href={social.url_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/${social.image}`}
                      alt=""
                      className=" w-4  h-4 object-contain"
                    />
                  </a>
                </motion.div>
              ))}
            </div>
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
              <Link to={"/admin"}>
                <GoPlus
                  className=" text-5xl cursor-default  "
                  style={{ color: themeColor }}
                />
              </Link>
            </motion.div>

            <div className=" flex flex-col gap-10  justify-center h-4/5">
              <h1 className=" dark:text-dark_textcolor text-light_textcolor text-5xl">
                Hi THERE!
              </h1>
              <p>
                <span className=" dark:text-dark_textcolor text-light_textcolor text-4xl">
                  I'M{" "}
                </span>
                <TypedText text={data?.typed_text} />
              </p>
              <div
                className=" p-3 w-3/4"
                style={{ backgroundColor: themeColor }}
              >
                <p className=" text-xl text-light_textcolor font-medium">
                  {data?.work_title}
                </p>
              </div>
              <p className=" dark:text-dark_textcolor opacity-60 text-light_textcolor w-2/3">
                {data?.desc}
              </p>
            </div>
            <ContactBtn />
          </motion.div>
        </motion.div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default HomePage;

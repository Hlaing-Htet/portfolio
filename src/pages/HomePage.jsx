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
//
import ContentLoader from "react-content-loader";
import Image from "../assets/homeColor.png";

const MyLoader = () => (
  <ContentLoader
    viewBox="0 0 500 500"
    height={500}
    width={500}
    speed={1}
    backgroundColor={"#333"}
    foregroundColor={"#999"}
  >
    <path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z" />
    <ellipse cx="120" cy="140" rx="28" ry="28" />
  </ContentLoader>
);

const HomePage = () => {
  const [isHover, setIsHover] = useState(false);
  const { homeDatas, loading } = GetHomeData();
  const { socials, loading: socialsLoading } = GetSocials();

  const data = homeDatas;
  const themeColor = data?.color;

  return (
    <AnimatePresence>
      <AppLayout>
        <div className=" flex-grow overflow-x-hidden md:overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-light_background dark:bg-dark_background h-screen">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              damping: 25,
              stiffness: 250,
            }}
            className=" flex col-span-1 h-full items-center justify-center bg-light_background_soft dark:bg-dark_background_soft"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
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
              className=" md:hidden absolute right-6 top-0 "
            >
              <GoPlus className=" text-8xl  " style={{ color: themeColor }} />
            </motion.div>
            {loading ? (
              <MyLoader />
            ) : data ? (
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
                className=" w-2/3 md:w-full  max-h-screen object-contain  saturate-0 transition-all duration-300  hover:saturate-100"
                alt=""
              />
            ) : (
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
                src={Image}
                className=" w-2/3 md:w-full  max-h-screen object-contain  saturate-0 transition-all duration-300  hover:saturate-100"
                alt=""
              />
            )}

            <div
              className={`${
                isHover ? "opacity-100" : "opacity-0"
              } fixed top-0 h-screen right-6 transition-all duration-200 justify-center items-center flex flex-col gap-20`}
            >
              {socialsLoading ? (
                <div>hi</div>
              ) : (
                socials?.map((social) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 250,
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
                ))
              )}
            </div>
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
              className="hidden md:block absolute right-6 top-0 "
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

            {loading ? (
              <div>hi</div>
            ) : (
              <div className=" flex flex-col gap-7 sm:gap-10  justify-center h-full">
                <h1 className=" dark:text-dark_textcolor text-light_textcolor text-xl md:text-2xl lg:text-5xl text-center md:text-start">
                  Hi THERE!
                </h1>
                <p>
                  <span className=" dark:text-dark_textcolor text-light_textcolor text-xl md:text-2xl lg:text-4xl text-center md:text-start">
                    I'M{" "}
                  </span>
                  <TypedText text={data?.typed_text} />
                </p>
                <div
                  className=" p-3 sm:w-4/5 md:w-3/4"
                  style={{ backgroundColor: themeColor }}
                >
                  <p className=" text-base sm:text-lg md:text-xl text-light_textcolor dark:text-dark_textcolor font-medium text-center md:text-start">
                    {data ? data?.work_title : "Work Title"}
                  </p>
                </div>
                <p className=" sm:mb-16 dark:text-dark_textcolor opacity-60 text-light_textcolor text-center sm:text-start  sm:w-2/3">
                  {data ? data?.desc : "Description ....."}
                </p>
                <div className=" flex justify-center md:justify-start">
                  <ContactBtn />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default HomePage;

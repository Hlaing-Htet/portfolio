import React from "react";
import { motion } from "framer-motion";

import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { GetHomeData } from "../service/HomeData/GetHomeData";
import { UseColor } from "../hooks/UseColor";
const AdminPage = () => {
  const { homeDatas } = GetHomeData();
  const data = homeDatas;
  console.log(data);
  const themeColor = UseColor();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" w-screen h-screen flex justify-center  items-center dark:bg-dark_background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" bg-dark_background_soft w-full md:w-4/5  lg:w-1/2 relative  grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        <Link to={"/"} className=" absolute top-5 right-5">
          <MdClose className=" text-xl cursor-pointer hover:rotate-90 duration-75" />
        </Link>
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className=" hidden md:block col-span-1 relative"
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
            className="absolute right-0 bottom-0  "
          >
            <GoPlus className=" text-5xl  " style={{ color: themeColor }} />
          </motion.div>
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
            className="absolute  top-1/2  "
          >
            <GoPlus className=" text-2xl  " style={{ color: themeColor }} />
          </motion.div>
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
            src={`${import.meta.env.VITE_IMG_URL}/${data.image}`}
            className=" saturate-0 w-full   "
            alt=""
          />
        </motion.div>
        <div
          className=" col-span-1 flex flex-col py-20 px-10 md:py-0 gap-10 items-center justify-center"
          style={{ backgroundColor: themeColor }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" font-bold text-4xl font-name"
          >
            LOGIN
          </motion.h1>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            onSubmit={handleSubmit}
            className=" w-full px-5 flex flex-col gap-5"
          >
            <div className=" ">
              <input
                type="text"
                className="w-full p-3 dark:bg-dark_textcolor focus:outline-none focus dark:text-dark_textcolor focus:bg-dark_background"
                name=""
                placeholder="Username"
                id=""
              />
            </div>
            <div className=" ">
              <input
                type="password"
                className=" w-full p-3 dark:bg-dark_textcolor focus:outline-none dark:text-dark_textcolor focus:bg-dark_background"
                placeholder="Password"
                name=""
                id=""
              />
            </div>
            <Link
              to={"/admin/dashboard"}
              className=" p-2 px-4 bg-dark_background w-fit mx-auto dark:text-dark_textcolor hover:scale-110"
            >
              login
            </Link>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminPage;

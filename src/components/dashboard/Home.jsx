import { HomeTypedTexts } from "./HomeTypedTexts";
import { HomeEditTitleDesc } from "./HomeEditTitleDesc";

import React from "react";
import { Title } from "../Title";
import { motion } from "framer-motion";
import Photo from "../../assets/homeColor.png";
//services
import { GetHomeData } from "../../service/HomeData/GetHomeData";
const Home = () => {
  const { homeDatas, loading } = GetHomeData();
  if (loading) {
    return null;
  }

  const data = homeDatas?.result[0];

  return (
    <div className="dark:text-dark_textcolor  h-screen overflow-auto">
      <header className=" bg-dark_background  z-10  sticky top-0 py-5">
        <Title name={"Home Page"} />
      </header>
      <motion.main
        initial={{
          y: "100vh",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 250,
        }}
        className=" m-5  "
      >
        <div className=" mb-5">
          <h2 className=" text-xl font-medium mb-2">Photo</h2>
          <div className=" bg-dark_background_soft p-5 grid grid-cols-4">
            <figure className=" bg-dark_background">
              <img src={Photo} className=" block mx-auto" alt="" />
            </figure>
            <div className=" col-span-3 flex items-center justify-center flex-col">
              <input type="file" />
            </div>
          </div>
        </div>
        <HomeEditTitleDesc data={data} val="work_title" />
        <HomeEditTitleDesc data={data} val="desc" />
        <HomeTypedTexts data={data} />
        <div className=" mb-5">
          <h2 className=" text-xl font-medium mb-2">Socials</h2>
          <div className=" bg-dark_background_soft p-5">
            <p className="opacity-80">FullStack Developer</p>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Home;

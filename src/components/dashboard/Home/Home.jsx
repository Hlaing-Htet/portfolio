import { HomeSocial } from "./HomeSocial";
import { HomePhoto } from "./HomePhoto";
import { HomeTypedTexts } from "./HomeTypedTexts";
import { HomeEditTitleDesc } from "./HomeEditTitleDesc";

import React from "react";
import { Title } from "../../share/Title";
import { motion } from "framer-motion";

//services
import { GetSocials } from "../../../service/Socials/GetSocials";
import { GetHomeData } from "../../../service/HomeData/GetHomeData";
import { PostHomeData } from "../../../service/HomeData/PostHomeData";
import { GetMusic } from "../../../service/Music/GetMusics";
import { Theme } from "./Theme";
import { Music } from "./Music";
const Home = () => {
  const { musics, loading: musicLoading } = GetMusic();
  const { socials, loading: socialsLoading } = GetSocials();
  const onSubmit = PostHomeData({});
  const { homeDatas, loading } = GetHomeData();
  if (loading && socialsLoading && musicLoading) {
    return;
  }

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
        {homeDatas ? (
          <>
            <HomePhoto data={homeDatas} />
            <HomeEditTitleDesc data={homeDatas} val="work_title" />
            <HomeEditTitleDesc data={homeDatas} val="desc" />
            <HomeTypedTexts data={homeDatas} />
            <HomeSocial />
            <Theme data={homeDatas} />
            <Music />
          </>
        ) : (
          <div className=" h-96 flex items-center justify-center">
            <button
              onClick={onSubmit}
              className=" bg-dark_textcolor text-dark_background p-4 font-semibold"
            >
              Start Home
            </button>
          </div>
        )}
      </motion.main>
    </div>
  );
};

export default Home;

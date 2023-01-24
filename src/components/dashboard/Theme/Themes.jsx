import React, { useState } from "react";
import { CirclePicker } from "react-color";
import { motion } from "framer-motion";
import { Title } from "../../share/Title";

const Themes = () => {
  const [themeColor, setThemeColor] = useState("#c9a227");
  return (
    <div className="dark:text-dark_textcolor">
      <header className=" bg-dark_background z-10  sticky top-0 pt-5">
        <Title name={"Themes Page"} />
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
        className=" m-5"
      >
        <div className=" flex justify-center flex-col items-center gap-10 dark:bg-dark_background_soft p-10">
          <h2 className=" text-xl font-semibold" style={{ color: themeColor }}>
            Choose Color
          </h2>
          <CirclePicker
            color={themeColor}
            width={"50%"}
            circleSize={70}
            colors={[
              "#c9a227",
              "#e91e60",
              "#9c2700",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4caf50",
              "#8bc34a",
              "#cddc39",
              "#ffeb3b",
              "#ffc107",
              "#ff9800",
              "#ff5722",
              "#795548",
              "#607d8b",
            ]}
            onChangeComplete={(color) => setThemeColor(color.hex)}
            className="justify-center"
          />
        </div>
      </motion.main>
    </div>
  );
};

export default Themes;

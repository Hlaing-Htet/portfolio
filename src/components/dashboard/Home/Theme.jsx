import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { PatchHomeData } from "../../../service/HomeData/PatchHomeData";
import { PhotoshopPicker } from "react-color";
import { motion } from "framer-motion";
export function Theme({ data, val }) {
  const [themeColor, setThemeColor] = useState(data?.color);
  const [edit, setEdit] = useState(false);

  const handleEdit = PatchHomeData({
    id: data?._id,
    data: { color: themeColor },
    setEdit,
  });

  return (
    <div className=" mb-5">
      <div className=" flex gap-5 items-center mb-2 ">
        <h2 className=" text-xl font-medium">Theme</h2>
        <span
          onClick={() => setEdit(true)}
          className=" cursor-pointer hover:scale-110"
        >
          <FiEdit />
        </span>
        {edit && (
          <span
            onClick={() => setEdit(false)}
            className=" cursor-pointer hover:scale-110"
          >
            <ImCancelCircle />
          </span>
        )}
      </div>
      <div
        className=" bg-dark_background_soft p-5 flex items-center
       gap-10"
      >
        {edit && (
          <PhotoshopPicker
            className=" text-dark_background"
            color={themeColor}
            onChangeComplete={(color) => setThemeColor(color.hex)}
          />
        )}
        <div
          className={` flex-grow ${
            edit && "flex flex-col gap-5 items-center justify-center"
          } `}
        >
          <div className=" relative h-12 w-44">
            <span
              className=" h-full w-full block"
              style={{ backgroundColor: `${themeColor}` }}
            ></span>
            <motion.div
              animate={{
                mixBlendMode: "difference",
              }}
              className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            >
              {themeColor}
            </motion.div>
          </div>
          {edit && (
            <button
              onClick={handleEdit}
              className=" p-3 bg-dark_textcolor text-dark_background"
            >
              Change Color
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

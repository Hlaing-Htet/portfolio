import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { PatchHomeData } from "../../../service/HomeData/PatchHomeData";
export function HomeEditTitleDesc({ data, val }) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(data?.[val]);
  const updateData = {
    [val]: value,
  };

  const handleEdit = PatchHomeData({
    id: data?._id,
    data: updateData,
    setEdit,
  });

  return (
    <div className=" mb-5">
      <div className=" flex gap-5 items-center mb-2 ">
        <h2 className=" text-xl font-medium">
          {val === "desc" ? "Description" : "Work Title"}
        </h2>
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
      <div className=" bg-dark_background_soft p-5">
        {edit ? (
          <form
            onSubmit={(e) => handleEdit(e)}
            className=" justify-center  flex flex-col gap-5"
          >
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoFocus={edit}
              className=" p-3 text-dark_background bg-dark_textcolor"
            />
            <button className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit">
              edit
            </button>
          </form>
        ) : (
          <p className="opacity-80">{data?.[val]}</p>
        )}
      </div>
    </div>
  );
}

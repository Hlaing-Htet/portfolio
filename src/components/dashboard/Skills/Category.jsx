import { SkillsCatDetail } from "./SkillsCatDetail";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { useSkillsCatContext } from "../../../hooks/UseSkillsCatContext";
const Category = () => {
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { skillsCats, dispatch } = useSkillsCatContext();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/skillscat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "ADD_SKILLSCAT", payload: json.result });
      reset();
    }
  };
  return (
    <div className=" mb-5 text-dark_textcolor">
      <div className=" flex gap-5 items-center mb-2 ">
        <h2 className=" text-xl font-medium">Categories</h2>
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
      <div className=" bg-dark_background_soft p-5 grid gap-5 grid-cols-3">
        {edit && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-dark_background p-5 justify-center items-center flex flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Enter Category name"
              required
              {...register("name")}
              className=" bg-dark_textcolor w-full text-dark_background p-3 cursor-pointer"
            />

            <button
              type="submit"
              className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
            >
              Add
            </button>
          </form>
        )}
        {skillsCats?.map((skillcat, index) => (
          <SkillsCatDetail
            index={index}
            key={skillcat._id}
            skill={skillcat}
            edit={edit}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { useProjectsCatContext } from "../../../hooks/UseProjectsCatContext";
import { ProjectsCatDetail } from "./ProjectsCatDetail";
const Category = () => {
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { projectsCats, dispatch } = useProjectsCatContext();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/projectsCat`,
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
      dispatch({ type: "ADD_PROJECTSCAT", payload: json.result });
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
        {projectsCats?.map((projectsCat, index) => (
          <ProjectsCatDetail
            index={index}
            key={projectsCat._id}
            project={projectsCat}
            edit={edit}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

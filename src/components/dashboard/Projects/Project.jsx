import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { useProjectsContext } from "../../../hooks/UseProjectsContext";
import { useProjectsCatContext } from "../../../hooks/UseProjectsCatContext";
import ProjectsDetail from "./ProjectsDetail";

const Project = () => {
  const [edit, setEdit] = useState(false);
  const [selectProjectsCat, setSelectProjectsCat] = useState({
    projectsCat: "",
  });

  const { register, handleSubmit, reset } = useForm();
  const { projects, dispatch } = useProjectsContext();
  const { projectsCats } = useProjectsCatContext();
  //select category id option
  const options = projectsCats.map((projectsCat) => ({
    value: projectsCat._id,
    label: projectsCat.name,
  }));

  const onSubmit = async (data) => {
    const addData = { ...data, ...selectProjectsCat };
    // console.log(addData);
    const formData = new FormData();
    formData.append("file", addData.file[0]);
    formData.append("demo_link", addData.demo_link);
    formData.append("code_link", addData.code_link);
    formData.append("projectsCat", addData.projectsCat);

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/projects`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "ADD_PROJECT", payload: json.result });
      reset();
    }
  };
  return (
    <div className=" mb-5 text-dark_textcolor">
      <div className=" flex gap-5 items-center mb-2 ">
        <h2 className=" text-xl font-medium">Projects</h2>
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
            <Select
              className=" text-dark_background w-full"
              options={options}
              placeholder="select category"
              required
              onChange={(e) =>
                setSelectProjectsCat({
                  ...selectProjectsCat,
                  projectsCat: e.value,
                })
              }
            />

            <input
              type="file"
              {...register("file")}
              required
              className=" bg-dark_textcolor w-full text-dark_background p-3 cursor-pointer"
            />
            <input
              type="url"
              {...register("demo_link")}
              required
              className=" w-full p-3  bg-dark_textcolor text-dark_background "
              placeholder="Enter Demo Link"
            />
            <input
              type="url"
              {...register("code_link")}
              required
              className=" w-full p-3  bg-dark_textcolor text-dark_background "
              placeholder="Enter Code Link"
            />

            <button
              type="submit"
              className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
            >
              Add
            </button>
          </form>
        )}
        {projects?.map((project) => (
          // <SkillsDetail
          //   key={skill._id}
          //   skill={skill}
          //   edit={edit}
          //   options={options}
          //   levelOptions={levelOptions}
          // />
          <ProjectsDetail
            key={project._id}
            project={project}
            edit={edit}
            options={options}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;

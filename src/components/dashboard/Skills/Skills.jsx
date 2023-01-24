import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { useSkillsContext } from "../../../hooks/UseSkillsContext";
import { useSkillsCatContext } from "../../../hooks/UseSkillsCatContext";

const Skills = () => {
  const [edit, setEdit] = useState(false);
  const [selectValue, setSelectValue] = useState({ skillsCat: "" });
  const [selectLevel, setSelectLevel] = useState({ level: "" });
  const { register, handleSubmit, reset } = useForm();
  const { skills, dispatch } = useSkillsContext();
  const { skillsCats } = useSkillsCatContext();
  //select category id option
  const options = skillsCats.map((skillsCat) => ({
    value: skillsCat._id,
    label: skillsCat.name,
  }));
  const levelOptions = [
    { value: "basic", label: "basic" },
    { value: "intermediate", label: "intermediate" },
    { value: "experienced", label: "experienced" },
  ];
  const onSubmit = async (data) => {
    const addData = { ...data, ...selectValue, ...selectLevel };
    console.log(addData);
    const formData = new FormData();
    formData.append("file", addData.file[0]);
    formData.append("name", addData.name);
    formData.append("level", addData.level);
    formData.append("skillsCat", addData.skillsCat);

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/skills`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "ADD_SKILL", payload: json.result });
      reset();
    }
  };
  return (
    <div className=" mb-5 text-dark_textcolor">
      <div className=" flex gap-5 items-center mb-2 ">
        <h2 className=" text-xl font-medium">Skills</h2>
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
              onChange={(e) =>
                setSelectValue({ ...selectValue, skillsCat: e.value })
              }
            />
            <Select
              className=" text-dark_background w-full"
              options={levelOptions}
              placeholder="select level"
              onChange={(e) =>
                setSelectLevel({ ...selectLevel, level: e.value })
              }
            />

            <input
              type="file"
              {...register("file")}
              className=" bg-dark_textcolor w-full text-dark_background p-3 cursor-pointer"
            />
            <input
              type="text"
              {...register("name")}
              className=" w-full p-3  bg-dark_textcolor text-dark_background "
              placeholder="Enter Name"
            />

            <button
              type="submit"
              className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
            >
              Add
            </button>
          </form>
        )}
        {skills?.map((skill) => (
          <div key={skill._id}>abc</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

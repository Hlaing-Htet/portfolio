import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useSkillsContext } from "../../../hooks/UseSkillsContext";
import { DeleteSkills } from "../../../service/Skills/DeleteSkill";
import { PatchSkills } from "../../../service/Skills/PatchSkills";
import { useEffect } from "react";

const SkillsDetail = ({ skill, edit, options, levelOptions }) => {
  const [singleEdit, setSingleEdit] = useState(false);
  const [editName, setEditName] = useState({ name: skill.name });
  const [selectValue, setSelectValue] = useState({
    skillsCat: skill.skillsCat,
  });
  const [selectLevel, setSelectLevel] = useState({ level: skill.level });
  const { register, handleSubmit, reset } = useForm();
  const { dispatch } = useSkillsContext();
  const handleEditName = PatchSkills({
    id: skill._id,
    data: editName,
    setEdit: setSingleEdit,
  });
  const handleEditSkillCat = PatchSkills({
    id: skill._id,
    data: selectValue,
    setEdit: setSingleEdit,
  });
  const handleEditLevel = PatchSkills({
    id: skill._id,
    data: selectLevel,
    setEdit: setSingleEdit,
  });
  /////////
  useEffect(() => {
    if (selectValue.skillsCat !== skill.skillsCat) {
      handleEditSkillCat();
    }
  }, [selectValue.skillsCat]);
  /////////
  useEffect(() => {
    if (selectLevel.level !== skill.level) {
      handleEditLevel();
    }
  }, [selectLevel.level]);
  const handleClick = DeleteSkills({ id: skill._id });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/skills/${skill._id}/${
        skill.image
      }`,
      {
        method: "PATCH",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_SKILL", payload: json.result });
      reset();
      setSingleEdit(false);
    }
  };
  return (
    <div className=" bg-dark_background text-dark_textcolor">
      <div className=" p-5">
        <figure className=" mb-5 flex justify-center">
          <img
            src={`${import.meta.env.VITE_IMG_URL}/${skill.image}`}
            className=" h-20"
            alt=""
          />
        </figure>
        {singleEdit && (
          <form onSubmit={handleSubmit(onSubmit)} className=" mb-3 flex gap-3">
            <input
              type="file"
              {...register("file")}
              required
              className=" bg-dark_textcolor w-full text-dark_background p-2 cursor-pointer"
            />
            <button className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit">
              upload
            </button>
          </form>
        )}
        <div className={`${edit && "mb-5"}`}>
          <div
            className={` grid ${
              singleEdit ? " grid-cols-3" : " grid-cols-2"
            } gap-3`}
          >
            <div className=" flex items-center">Category</div>
            <Select
              className={`${
                singleEdit ? "col-span-2" : "hidden"
              } w-full rounded-none text-dark_background `}
              options={options}
              placeholder="select category"
              required
              onChange={(e) =>
                setSelectValue({ ...selectValue, skillsCat: e.value })
              }
            />
            <div className={`${singleEdit && "hidden"}`}>
              {skill.skillsCat.name}
            </div>

            <div className=" flex items-center">Name</div>
            <form
              onSubmit={handleEditName}
              className={`${singleEdit ? "col-span-2" : "hidden"} `}
            >
              <input
                type="text"
                value={editName.name}
                onChange={(e) =>
                  setEditName({ ...editName, name: e.target.value })
                }
                className={` w-full p-2  bg-dark_textcolor text-dark_background `}
                placeholder="Enter Name"
              />
            </form>
            <div className={`${singleEdit && "hidden"}`}>{skill.name}</div>

            <div className=" flex items-center">Level</div>
            <Select
              className={`${
                singleEdit ? "col-span-2" : "hidden"
              } w-full rounded-none text-dark_background `}
              options={levelOptions}
              placeholder="select level"
              onChange={(e) =>
                setSelectLevel({ ...selectLevel, level: e.value })
              }
            />
            <div className={`${singleEdit && "hidden"}`}>{skill.level}</div>
          </div>
        </div>
        {edit && (
          <div className=" flex w-full justify-between">
            <button
              onClick={() => setSingleEdit(!singleEdit)}
              className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
            >
              {singleEdit ? "cancle" : "edit"}
            </button>

            <button
              onClick={handleClick}
              className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
            >
              delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsDetail;

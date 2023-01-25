import React, { useEffect, useState } from "react";
import { PatchSkillsCat } from "../../../service/SkillsCat/PatchSkillsCat";
import { DeleteSkillsCat } from "../../../service/SkillsCat/DeleteSkillsCat";
export function SkillsCatDetail({ skill, edit, index }) {
  const [singleEdit, setSingleEdit] = useState(false);
  const [isShow, setIsShow] = useState({ show: skill.show });
  const [changeName, setChangeName] = useState({ name: skill.name });
  const handleClick = DeleteSkillsCat({ id: skill._id });
  const handleEdit = PatchSkillsCat({ id: skill._id, data: isShow });
  const handleNameEdit = PatchSkillsCat({
    id: skill._id,
    data: changeName,
    setEdit: setSingleEdit,
  });
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setIsShow({ ...isShow, [name]: checked });
  };
  useEffect(() => {
    if (skill.show !== isShow.show) {
      handleEdit();
    }
  }, [isShow.show]);
  const handleChangeName = (e) => {
    setChangeName({ ...changeName, name: e.target.value });
  };

  return (
    <div className=" bg-dark_background p-5 flex flex-col gap-5 ">
      <div className=" flex justify-between items-center">
        <form onSubmit={handleNameEdit}>
          {singleEdit ? (
            <input
              type="text"
              value={changeName.name}
              onChange={handleChangeName}
              className=" bg-dark_textcolor w-full text-dark_background p-3 cursor-pointer"
            />
          ) : (
            <div className=" bg-dark_background_soft p-3">{skill.name}</div>
          )}
        </form>
        <div className="flex gap-3 items-center">
          <label htmlFor={`${skill._id}`} className=" cursor-pointer">
            Show{" "}
          </label>
          <input
            type="checkbox"
            id={`${skill._id}`}
            name="show"
            disabled={index === 0}
            checked={isShow.show}
            onChange={handleChange}
            className=""
          />
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
  );
}

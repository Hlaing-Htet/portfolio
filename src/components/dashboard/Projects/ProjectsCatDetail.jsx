import React, { useEffect, useState } from "react";
import { DeleteProjectsCat } from "../../../service/ProjectsCat/DeleteProjectsCat";
import { PatchProjectsCat } from "../../../service/ProjectsCat/PatchProjectsCat";
export function ProjectsCatDetail({ project, edit, index }) {
  const [singleEdit, setSingleEdit] = useState(false);
  const [isShow, setIsShow] = useState({ show: project.show });
  const [changeName, setChangeName] = useState({ name: project.name });
  const handleClick = DeleteProjectsCat({ id: project._id });
  const handleEdit = PatchProjectsCat({ id: project._id, data: isShow });
  const handleNameEdit = PatchProjectsCat({
    id: project._id,
    data: changeName,
    setEdit: setSingleEdit,
  });
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setIsShow({ ...isShow, [name]: checked });
  };
  useEffect(() => {
    if (project.show !== isShow.show) {
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
            <div className=" bg-dark_background_soft p-3">{project.name}</div>
          )}
        </form>
        <div className="flex gap-3 items-center">
          <label htmlFor={`${project._id}`} className=" cursor-pointer">
            Show{" "}
          </label>
          <input
            type="checkbox"
            id={`${project._id}`}
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

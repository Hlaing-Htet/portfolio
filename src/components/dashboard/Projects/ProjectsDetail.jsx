import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useProjectsContext } from "../../../hooks/UseProjectsContext";
import { DeleteProjects } from "../../../service/Projects/DeleteProjects";
import { PatchProjects } from "../../../service/Projects/PatchProjects";
import { useEffect } from "react";

const ProjectsDetail = ({ project, edit, options }) => {
  const [isShow, setIsShow] = useState({ show: project.show });

  const [singleEdit, setSingleEdit] = useState(false);
  const [editDemo, setEditDemo] = useState({ demo_link: project?.demo_link });
  const [editCode, setEditCode] = useState({ code_link: project?.code_link });
  const [selectValue, setSelectValue] = useState({
    projectsCat: project?.projectsCat,
  });

  const { register, handleSubmit, reset } = useForm();
  const { dispatch } = useProjectsContext();
  const handleEditDemo = PatchProjects({
    id: project?._id,
    data: editDemo,
    setEdit: setSingleEdit,
  });
  const handleEditCode = PatchProjects({
    id: project?._id,
    data: editCode,
    setEdit: setSingleEdit,
  });
  const handleEditprojectCat = PatchProjects({
    id: project?._id,
    data: selectValue,
    setEdit: setSingleEdit,
  });
  const handleEditShow = PatchProjects({
    id: project?._id,
    data: isShow,
  });
  useEffect(() => {
    if (project?.show !== isShow.show) {
      handleEditShow();
    }
  }, [isShow.show]);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setIsShow({ ...isShow, [name]: checked });
  };
  /////////
  useEffect(() => {
    if (selectValue.projectsCat !== project?.projectsCat) {
      handleEditprojectCat();
    }
  }, [selectValue.projectsCat]);
  /////////

  const handleClick = DeleteProjects({ id: project?._id });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/projects/${project?._id}/${
        project?.image
      }`,
      {
        method: "PATCH",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_PROJECT", payload: json.result });
      reset();
      setSingleEdit(false);
    }
  };
  return (
    <div className=" bg-dark_background text-dark_textcolor">
      <div className=" p-5">
        {edit && (
          <div className="flex gap-5 justify-center mb-5 items-center">
            <label htmlFor={`${project?._id}`} className=" cursor-pointer">
              Show{" "}
            </label>
            <input
              type="checkbox"
              id={`${project?._id}`}
              name="show"
              checked={isShow.show}
              onChange={handleChange}
              className=""
            />
          </div>
        )}
        <figure
          className=" h-48 mb-5 flex justify-center bg-cover bg-left-top "
          style={{
            backgroundImage: `url(${import.meta.env.VITE_IMG_URL}/${
              project?.image
            })`,
          }}
        ></figure>
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
            className={` grid 
               grid-cols-3
             gap-3`}
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
                setSelectValue({ ...selectValue, projectsCat: e.value })
              }
            />
            <div className={`${singleEdit && "hidden"} col-span-2`}>
              {project?.projectsCat.name}
            </div>
            {/* Demo Link start */}
            <div className=" flex items-center">Demo Link</div>
            <form
              onSubmit={handleEditDemo}
              className={`${singleEdit ? "col-span-2" : "hidden"} `}
            >
              <input
                type="text"
                value={editDemo.demo_link}
                onChange={(e) =>
                  setEditDemo({ ...editDemo, demo_link: e.target.value })
                }
                className={` w-full p-2  bg-dark_textcolor text-dark_background `}
                placeholder="Enter Name"
              />
            </form>
            <div className={`${singleEdit && "hidden"} col-span-2`}>
              <a
                href={project?.demo_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project?.demo_link}
              </a>
            </div>
            {/* //!Demo Link end //!Code Link start */}
            <div className=" flex items-center">Code Link</div>
            <form
              onSubmit={handleEditCode}
              className={`${singleEdit ? "col-span-2" : "hidden"} `}
            >
              <input
                type="text"
                value={editCode.code_link}
                onChange={(e) =>
                  setEditCode({ ...editCode, code_link: e.target.value })
                }
                className={` w-full p-2  bg-dark_textcolor text-dark_background `}
                placeholder="Enter Name"
              />
            </form>
            <div className={`${singleEdit && "hidden"} col-span-2`}>
              <a
                href={project?.code_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project?.code_link}
              </a>
            </div>
            {/* //!Code Link end */}
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

export default ProjectsDetail;

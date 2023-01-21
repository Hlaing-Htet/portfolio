import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { useHomeContext } from "../../../hooks/UseHomeContext";
export function HomePhoto({ data }) {
  const [edit, setEdit] = useState(false);

  const { dispatch } = useHomeContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("file", e.file[0]);
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/homepage/${data._id}/${
        data.image
      }`,
      {
        method: "PATCH",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_HOMEDATA", payload: json.result });
      setEdit(false);
    }
  };

  return (
    <div className=" mb-5">
      <div className=" flex gap-5 items-center mb-2 ">
        <h2 className=" text-xl font-medium">Photo</h2>
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
      <div className=" bg-dark_background_soft p-5 grid grid-cols-4">
        <figure className=" bg-dark_background">
          <img
            src={`${import.meta.env.VITE_IMG_URL}/${data?.image}`}
            className=" block mx-auto"
            alt=""
          />
        </figure>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" col-span-3 flex items-center gap-5 justify-center flex-col"
        >
          <input
            type="file"
            {...register("file")}
            className=" bg-dark_textcolor p-3 text-dark_background cursor-pointer"
          />
          {edit && (
            <button
              type="submit"
              className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
            >
              change
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

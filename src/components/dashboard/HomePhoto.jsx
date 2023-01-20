import React from "react";
import { useForm } from "react-hook-form";
import { PatchHomeData } from "../../service/HomeData/PatchHomeData";
export function HomePhoto({ data }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("file", e.file[0]);
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/homepage/${data._id}`,
      {
        method: "PATCH",
        body: formData,
      }
    );
  };

  return (
    <div className=" mb-5">
      <h2 className=" text-xl font-medium mb-2">Photo</h2>
      <div className=" bg-dark_background_soft p-5 grid grid-cols-4">
        <figure className=" bg-dark_background">
          <img
            src={`${import.meta.env.VITE_IMG_URL}/${data.image}`}
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
            className=" bg-dark_textcolor text-dark_background cursor-pointer"
          />
          <button
            type="submit"
            className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
          >
            change
          </button>
        </form>
      </div>
    </div>
  );
}

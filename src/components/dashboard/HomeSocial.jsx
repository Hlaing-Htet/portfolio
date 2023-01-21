import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { useForm } from "react-hook-form";
import { useSocialsContext } from "../../hooks/UseSocialsContext";
export function HomeSocial({}) {
  const { socials, dispatch } = useSocialsContext();
  console.log(socials);
  const { register, handleSubmit, reset } = useForm();
  const [edit, setEdit] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("url_link", data.url_link);

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/socials`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "ADD_SOCIAL", payload: json.result });
      reset();
    }
  };

  return (
    <div className=" mb-5">
      <div className=" flex gap-5 items-center mb-2 ">
        <h2 className=" text-xl font-medium">Socials</h2>
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
      <div className=" bg-dark_background_soft p-5 grid gap-5 grid-cols-2">
        {edit && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-dark_background p-5 justify-center items-center flex flex-col gap-5"
          >
            <input
              type="file"
              {...register("file")}
              className=" bg-dark_textcolor w-full text-dark_background p-3 cursor-pointer"
            />
            <input
              type="url"
              {...register("url_link")}
              className=" w-full p-3  bg-dark_textcolor text-dark_background "
              placeholder="URL Link"
            />
            <button
              type="submit"
              className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
            >
              Add
            </button>
          </form>
        )}
        {socials?.map((social) => (
          <div
            key={social._id}
            className="bg-dark_background col-span-1 flex  flex-col gap-5 p-5"
          >
            <div>
              <figure className=" flex justify-center">
                <img
                  src={`${import.meta.env.VITE_IMG_URL}/${social.image}`}
                  alt=""
                  className=" w-14 h-14 object-contain p-1 bg-dark_textcolor"
                />
              </figure>
            </div>
            <a
              target={"_blank"}
              href={`${social.url_link}`}
              className=" bg-dark_background_soft p-3 overflow-auto"
            >
              {social.url_link}
            </a>
            {edit && (
              <div className=" flex justify-between">
                <button className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit">
                  edit
                </button>
                <button className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit">
                  delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { DeleteSocial } from "../../../service/Socials/DeleteSocial";
import { useForm } from "react-hook-form";
import { useSocialsContext } from "../../../hooks/UseSocialsContext";

const HomeSocialDetail = ({ social, edit }) => {
  const { dispatch } = useSocialsContext();
  const [singleEdit, setSingleEdit] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const handleClick = DeleteSocial({ id: social._id });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("url_link", data.url_link);
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/socials/${social._id}`,
      {
        method: "PATCH",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_SOCIAL", payload: json.result });
      reset();
      setSingleEdit(false);
    }
  };
  return (
    <div className="bg-dark_background col-span-1 flex  flex-col gap-5 p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" justify-center items-center flex flex-col gap-5"
      >
        <figure className=" flex justify-center w-full">
          <img
            src={`${import.meta.env.VITE_IMG_URL}/${social.image}`}
            alt=""
            className="   w-14 h-14 object-contain p-1 bg-dark_textcolor"
          />
          {singleEdit && (
            <input
              type="file"
              {...register("file")}
              className=" bg-dark_textcolor w-full text-dark_background p-3 cursor-pointer"
            />
          )}
        </figure>
        {singleEdit && (
          <>
            <input
              type="url"
              value={social.url_link}
              autoFocus
              {...register("url_link")}
              className=" w-full p-3  bg-dark_textcolor text-dark_background "
              placeholder="URL Link"
            />
            <button className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit">
              update
            </button>
          </>
        )}
      </form>
      {!singleEdit && (
        <a
          target={"_blank"}
          href={`${social.url_link}`}
          className=" bg-dark_background_soft p-3 overflow-auto"
        >
          {social.url_link}
        </a>
      )}
      {edit && (
        <div className=" flex justify-between">
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
};

export default HomeSocialDetail;

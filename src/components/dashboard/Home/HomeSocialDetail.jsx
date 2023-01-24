import React, { useState } from "react";
import { DeleteSocial } from "../../../service/Socials/DeleteSocial";
import { useForm } from "react-hook-form";
import { useSocialsContext } from "../../../hooks/UseSocialsContext";

const HomeSocialDetail = ({ social, edit }) => {
  const { dispatch } = useSocialsContext();
  const [singleEdit, setSingleEdit] = useState(false);
  const [urlLink, setUrlLink] = useState({ url_link: social.url_link });
  const { register, handleSubmit, reset } = useForm();
  const handleClick = DeleteSocial({ id: social._id });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/socials/${social._id}/${
        social.image
      }`,
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
  const handleSubmitLink = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/socials/${social._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(urlLink),
        headers: {
          "Content-Type": "application/json",
        },
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
              required
              {...register("file")}
              className=" bg-dark_textcolor w-full text-dark_background p-3 cursor-pointer"
            />
          )}
        </figure>
        {singleEdit && (
          <button className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit">
            update image
          </button>
        )}
      </form>
      {singleEdit && (
        <form onSubmit={handleSubmitLink}>
          <input
            type="url"
            autoFocus
            value={urlLink.url_link}
            onChange={(e) =>
              setUrlLink({ ...urlLink, url_link: e.target.value })
            }
            className=" w-full p-3  bg-dark_textcolor text-dark_background "
            placeholder="URL Link"
          />
        </form>
      )}
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

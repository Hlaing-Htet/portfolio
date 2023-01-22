import React from "react";
import { DeleteSocial } from "../../../service/Socials/DeleteSocial";

const HomeSocialDetail = ({ social, edit }) => {
  const handleClick = DeleteSocial({ id: social._id });
  return (
    <div className="bg-dark_background col-span-1 flex  flex-col gap-5 p-5">
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

import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { useMusicContext } from "../../../hooks/UseMusicContext";
import { DeleteMusic } from "../../../service/Music/DeleteMusic";
import { PatchMusic } from "../../../service/Music/PatchMusic";
import { useForm } from "react-hook-form";

export function Music() {
  const [edit, setEdit] = useState(false);
  const [singleEdit, setSingleEdit] = useState(false);
  const { musics, dispatch } = useMusicContext();
  const [isShow, setIsShow] = useState({ show: musics[0]?.show });
  const handleEdit = PatchMusic({ id: musics[0]?._id, data: isShow });

  useEffect(() => {
    setIsShow({ show: musics[0]?.show });
  }, [musics]);

  const handleDelete = DeleteMusic({ id: musics[0]?._id });
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    if (musics[0]?.show !== isShow.show) {
      handleEdit();
    }
  }, [isShow.show]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setIsShow({ ...isShow, [name]: checked });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/music`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "ADD_MUSIC", payload: json.result });
      reset();
    }
  };
  const onSubmitEdit = async (e) => {
    const formData = new FormData();
    formData.append("file", e.file[0]);
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/music/${musics[0]?._id}/${
        musics[0]?.title
      }`,
      {
        method: "PATCH",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_MUSIC", payload: json.result });
      setEdit(false);
      setSingleEdit(false);
    }
  };

  return (
    <div className=" mb-5">
      <div className=" flex gap-5 items-center mb-2 ">
        <h2 className=" text-xl font-medium">Music</h2>
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
      <div
        className=" bg-dark_background_soft p-5 flex items-center
       gap-10"
      >
        {edit && musics.length === 0 && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-dark_background p-5 justify-center items-center flex flex-col gap-5"
          >
            <input
              type="file"
              {...register("file")}
              required
              className=" bg-dark_textcolor p-3 text-dark_background cursor-pointer"
            />
            <button
              type="submit"
              className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
            >
              Add
            </button>
          </form>
        )}
        {musics.length === 0 ? (
          <div>no music</div>
        ) : (
          <div>
            {musics?.map((music) => (
              <div key={music._id} className="flex items-center gap-5">
                <div className={`${singleEdit && " p-5 bg-dark_background"}`}>
                  {singleEdit ? (
                    <div>
                      <div className="flex gap-5 justify-center mb-5 items-center">
                        <label
                          htmlFor={`${music._id}`}
                          className=" cursor-pointer"
                        >
                          Show{" "}
                        </label>
                        <input
                          type="checkbox"
                          id={`${music._id}`}
                          name="show"
                          checked={isShow.show}
                          onChange={handleChange}
                          className=""
                        />
                      </div>
                      <form
                        onSubmit={handleSubmit(onSubmitEdit)}
                        className=" flex flex-col gap-5 items-center justify-center"
                      >
                        <input
                          type="file"
                          {...register("file")}
                          required
                          className=" bg-dark_textcolor p-3 text-dark_background cursor-pointer"
                        />
                        <button
                          type="submit"
                          className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
                        >
                          change
                        </button>
                      </form>
                    </div>
                  ) : (
                    <audio
                      src={`${import.meta.env.VITE_IMG_URL}/${music.title}`}
                      controls
                    ></audio>
                  )}
                </div>
                {edit && (
                  <div>
                    <button
                      onClick={handleDelete}
                      className=" cursor-pointer px-2 py-1 ml-3 bg-dark_background"
                    >
                      delete
                    </button>
                    <button
                      onClick={() => setSingleEdit(!singleEdit)}
                      className=" cursor-pointer px-2 py-1 ml-3 bg-dark_background"
                    >
                      {singleEdit ? "cancle" : "edit"}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

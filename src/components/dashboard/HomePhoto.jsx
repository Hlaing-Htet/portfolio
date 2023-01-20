import React, { useState } from "react";
export function HomePhoto({ Photo }) {
  const [file, setFile] = useState(null);
  const handleUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/gallery`,
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className=" mb-5">
      <h2 className=" text-xl font-medium mb-2">Photo</h2>
      <div className=" bg-dark_background_soft p-5 grid grid-cols-4">
        <figure className=" bg-dark_background">
          <img src={Photo} className=" block mx-auto" alt="" />
        </figure>
        <form
          onSubmit={handleSubmit}
          className=" col-span-3 flex items-center justify-center flex-col"
        >
          <input type="file" onChange={handleUpload} />
          <button className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit">
            change
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { PatchHomeData } from "../../../service/HomeData/PatchHomeData";
export function HomeTypedTexts({ data }) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(data?.typed_text);
  const [addValue, setAddValue] = useState("");
  const handleEdit = PatchHomeData({
    id: data?._id,
    data: { typed_text: value },
  });
  const handleRemove = (item) => {
    setValue((pre) => pre.filter((text) => text !== item));
  };

  const handleAdd = () => {
    if (addValue.length === 0) {
      return;
    }
    setValue((pre) => [...pre, addValue]);
    setAddValue("");
  };

  useEffect(() => {
    if (value !== data?.typed_text) {
      handleEdit();
    }
  }, [value]);

  return (
    <div className=" mb-5">
      <div className=" flex gap-5 items-center mb-2 ">
        <h2 className=" text-xl font-medium">Typed Texts</h2>
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
      <div className=" bg-dark_background_soft p-5 ">
        {edit && (
          <div className=" mb-2 flex gap-5 items-center ">
            <input
              type="text"
              placeholder="typed text"
              autoFocus={edit}
              value={addValue}
              onChange={(e) => setAddValue(e.target.value)}
              className=" p-3 text-dark_background bg-dark_textcolor"
            />
            <button
              onClick={handleAdd}
              className=" bg-dark_textcolor text-dark_background px-3 p-1 w-fit"
            >
              add
            </button>
          </div>
        )}
        <ul className=" list-disc opacity-80">
          {value?.map((item) => (
            <li key={item} className="mb-2">
              <span>{item}</span>
              {edit && (
                <button
                  onClick={() => handleRemove(item)}
                  className=" cursor-pointer px-2 py-1 ml-3 bg-dark_background"
                >
                  delete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import { Skill } from "./Skill";

import { useParams } from "react-router-dom";
import { useSkillsCatContext } from "../../hooks/UseSkillsCatContext";
import { GetSkillsByCategory } from "../../service/Skills/GetSkillsByCategory";
export function Tools() {
  const { name } = useParams();
  const { skillsCats } = useSkillsCatContext();
  if (skillsCats.length === 0) {
    return (
      <div className="">
        <div className=" grid  p-3 md:p-5 gap-5 grid-cols-1 h-96">
          <div className=" bg-dark_textcolor flex items-center justify-center">
            <h2 className=" font-semibold text-xl">There is nothing !</h2>
          </div>
        </div>
      </div>
    );
  }

  const { _id: id } = skillsCats.find((skillsCat) => skillsCat.name === name);

  const { skills, loading } = GetSkillsByCategory({ id });
  if (loading) {
    return <p>loading</p>;
  }

  return (
    <div className="">
      <div className=" grid  p-3 md:p-5 gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills?.map(
          (skill, index) =>
            skill.show && <Skill key={skill._id} skill={skill} index={index} />
        )}
      </div>
    </div>
  );
}

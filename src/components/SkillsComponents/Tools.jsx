import React from "react";
import { Skill } from "./Skill";

import { useParams } from "react-router-dom";
import { useSkillsCatContext } from "../../hooks/UseSkillsCatContext";
import { GetSkillsByCategory } from "../../service/Skills/GetSkillsByCategory";
export function Tools() {
  const { name } = useParams();
  const { skillsCats } = useSkillsCatContext();

  const { _id: id } = skillsCats.find((skillsCat) => skillsCat.name === name);

  const { skills, loading } = GetSkillsByCategory({ id });
  if (loading) {
    return <p>loading</p>;
  }
  return (
    <div className="">
      <div className=" grid grid-cols-1  p-5 gap-5 md:grid-cols-4">
        {skills?.map(
          (skill, index) =>
            skill.show && <Skill key={skill._id} skill={skill} index={index} />
        )}
      </div>
    </div>
  );
}

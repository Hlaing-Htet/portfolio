import React from "react";
import { useParams } from "react-router-dom";

const ProjectsByTitle = () => {
  const { name } = useParams();
  return <div className=" text-center text-textcolor">{name}</div>;
};

export default ProjectsByTitle;

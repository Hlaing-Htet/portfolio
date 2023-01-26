import React from "react";
import { useParams } from "react-router-dom";

import Masonry from "react-masonry-css";
import ProjectDetail from "./ProjectDetail";
import { useProjectsCatContext } from "../../hooks/UseProjectsCatContext";
import { GetProjectsByCategory } from "../../service/Projects/GetProjectsByCategory";
const breakPoints = {
  default: 3,
  640: 1,
  1100: 2,
};
const ProjectsByTitle = () => {
  const { name } = useParams();

  const { projectsCats } = useProjectsCatContext();
  const id = projectsCats?.find((projectsCat) => projectsCat.name === name);

  const { projects, loading } = GetProjectsByCategory({ id: id._id });
  if (loading) {
    return <p>loaing</p>;
  }

  return (
    <div className=" text-dark_textcolor flex flex-wrap m-5 w-4/5 mx-auto">
      <Masonry breakpointCols={breakPoints} className="flex gap-5 ">
        {projects?.map((project, index) => (
          <ProjectDetail key={project._id} project={project} index={index} />
        ))}
      </Masonry>
    </div>
  );
};

export default ProjectsByTitle;

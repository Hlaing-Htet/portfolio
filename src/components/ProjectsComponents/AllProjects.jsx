import React from "react";
import { GetProjects } from "../../service/Projects/GetProjects";
import Masonry from "react-masonry-css";
import ProjectDetail from "./ProjectDetail";
const breakPoints = {
  default: 3,
  640: 1,
  1100: 2,
};
const AllProjects = () => {
  const { projects } = GetProjects();
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

export default AllProjects;

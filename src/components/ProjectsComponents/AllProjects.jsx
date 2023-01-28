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
  const { projects, loading } = GetProjects();
  if (loading) {
    return <p>loading</p>;
  }
  return (
    <div className=" text-light_textcolor dark:text-dark_textcolor flex flex-wrap p-5 container mx-auto">
      <Masonry breakpointCols={breakPoints} className="flex gap-5 ">
        {projects?.map(
          (project, index) =>
            project.show && (
              <ProjectDetail
                key={project._id}
                project={project}
                index={index}
              />
            )
        )}
      </Masonry>
    </div>
  );
};

export default AllProjects;

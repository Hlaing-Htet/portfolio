import React from "react";
import { GetProjects } from "../../service/Projects/GetProjects";
import Masonry from "react-masonry-css";
import ProjectDetail from "./ProjectDetail";
import ContentLoader from "react-content-loader";
const MyLoader = () => (
  <ContentLoader
    height={200}
    width={"100%"}
    speed={1}
    backgroundColor={"#333"}
    foregroundColor={"#999"}
  >
    {/* Only SVG shapes */}

    <rect x="30" y="30" rx="5" ry="5" width="300" height="100%" />
  </ContentLoader>
);
const breakPoints = {
  default: 3,
  640: 1,
  1100: 2,
};
const AllProjects = () => {
  const { projects, loading } = GetProjects();
  if (loading) {
    return <MyLoader />;
  }
  return (
    <div className=" text-light_textcolor dark:text-dark_textcolor flex flex-wrap p-3 md:p-5 container mx-auto">
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

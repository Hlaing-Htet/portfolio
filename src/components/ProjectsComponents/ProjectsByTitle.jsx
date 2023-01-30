import React from "react";
import { useParams } from "react-router-dom";

import Masonry from "react-masonry-css";
import ProjectDetail from "./ProjectDetail";
import { useProjectsCatContext } from "../../hooks/UseProjectsCatContext";
import { GetProjectsByCategory } from "../../service/Projects/GetProjectsByCategory";
import ContentLoader from "react-content-loader";

const breakPoints = {
  default: 3,
  640: 1,
  1100: 2,
};
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
const ProjectsByTitle = () => {
  const { name } = useParams();

  const { projectsCats } = useProjectsCatContext();
  const id = projectsCats?.find((projectsCat) => projectsCat.name === name);

  const { projects, loading } = GetProjectsByCategory({ id: id._id });
  if (loading) {
    return <MyLoader />;
  }

  return (
    <div className=" text-light_textcolor dark:text-dark_textcolor flex p-5 flex-wrap  container mx-auto">
      <Masonry breakpointCols={breakPoints} className="flex gap-5 ">
        {projects?.map(
          (project, index) =>
            project?.show && (
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

export default ProjectsByTitle;

import React from "react";
import { useParams } from "react-router-dom";

import Masonry from "react-masonry-css";
import ProjectDetail from "./ProjectDetail";
const breakPoints = {
  default: 3,
  640: 1,
  1100: 2,
};
const ProjectsByTitle = () => {
  const { name } = useParams();
  const themeColor = "#c9a227";

  return (
    <div className=" text-dark_textcolor flex flex-wrap m-5">
      <Masonry breakpointCols={breakPoints} className="flex gap-5 ">
        <ProjectDetail index={0} />
        <ProjectDetail index={1} />
        <ProjectDetail index={2} />
        <ProjectDetail index={3} />
      </Masonry>
    </div>
  );
};

export default ProjectsByTitle;

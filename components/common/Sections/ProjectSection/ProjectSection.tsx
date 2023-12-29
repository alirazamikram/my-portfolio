import React from "react";
import ProjectCard from "../../Cards/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="pb-10 mainContainer">
      <h3 className="text-[64px] font-semibold text-white pb-[93px] ">
        Projects
      </h3>
      <div className="w-full items-center justify-center gap-x-[220px] gap-y-[97px] flex flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectSection;

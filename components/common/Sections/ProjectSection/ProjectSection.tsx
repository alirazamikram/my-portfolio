import React from "react";
import ProjectCard from "../../Cards/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="pb-10 mainContainer">
      <h3 className="text-[36px] font-semibold text-white pb-10 tab:pb-[93px] ">
        Projects
      </h3>
      <div className="w-full grid grid-cols-1 tab:grid-cols-2 normal:grid-cols-3 xlarge:grid-cols-4 place-items-center justify-items-center gap-x-5 normal:gap-x-[45px] gap-y-[35px] normal:gap-y-[70px] ">
        <ProjectCard
          video="/videos/onewayx.mp4"
          title="ONEWAYX.COM"
          description="This is a onewayx website. I have worked on this project some days ago.You can see this project with animations. I have done this project only 30 days and delivered to the client. You can visit this website through clicking on this button below.Thank you."
        />
        <ProjectCard
          video="/videos/onewayx.mp4"
          title="ONEWAYX.COM"
          description="This is a onewayx website. I have worked on this project some days ago.You can see this project with animations. I have done this project only 30 days and delivered to the client. You can visit this website through clicking on this button below.Thank you."
        />
        <ProjectCard
          video="/videos/onewayx.mp4"
          title="ONEWAYX.COM"
          description="This is a onewayx website. I have worked on this project some days ago.You can see this project with animations. I have done this project only 30 days and delivered to the client. You can visit this website through clicking on this button below.Thank you."
        />
        <ProjectCard
          video="/videos/onewayx.mp4"
          title="ONEWAYX.COM"
          description="This is a onewayx website. I have worked on this project some days ago.You can see this project with animations. I have done this project only 30 days and delivered to the client. You can visit this website through clicking on this button below.Thank you."
        />
      </div>
    </div>
  );
};

export default ProjectSection;

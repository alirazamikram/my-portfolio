import React from "react";
import ProjectCard from "../../Cards/ProjectCard";

export type ProjectSectionProps = {
  id?: string;
};

const ProjectSection = ({ id }: ProjectSectionProps) => {
  return (
    <div className="pb-[50px] tab:pb-[100px] mainContainer" id={id}>
      <h3 className="text-[36px] font-semibold text-white pb-10 tab:pb-[93px] ">
        Projects
      </h3>
      <div className="w-full grid grid-cols-1 tab:grid-cols-2 normal:grid-cols-3 xlarge:grid-cols-4 place-items-center justify-items-center gap-x-10 normal:gap-x-[45px] gap-y-[35px] normal:gap-y-[70px] ">
        <ProjectCard
          video="/videos/onewayx.mp4"
          title="ONEWAYX.COM"
          link="https://onewayx.com/"
          description="This is a onewayx website. I have worked on this project some days ago.You can see this project with animations. I have done this project only 30 days and delivered to the client. You can visit this website through clicking on this button below.Thank you."
        />
        <ProjectCard
          video="/videos/link-solar-video.mp4"
          title="LINK SOLAR"
          link="https://link-solar.vercel.app/"
          description="This is a link solar website. I have worked on this project recently.You can see this project with explainly. I have done this project only 30 days and delivered to the client. You can visit this website through clicking on this button below.Thank you."
        />
        <ProjectCard
          video="/videos/onewayx.mp4"
          title="ONEWAYX.COM"
          link=""
          description="This is a onewayx website. I have worked on this project some days ago.You can see this project with animations. I have done this project only 30 days and delivered to the client. You can visit this website through clicking on this button below.Thank you."
        />
        <ProjectCard
          video="/videos/onewayx.mp4"
          title="ONEWAYX.COM"
          link=""
          description="This is a onewayx website. I have worked on this project some days ago.You can see this project with animations. I have done this project only 30 days and delivered to the client. You can visit this website through clicking on this button below.Thank you."
        />
      </div>
    </div>
  );
};

export default ProjectSection;

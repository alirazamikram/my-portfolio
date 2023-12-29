import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ProjectCardProps = {
  video?: string;
  title?: string;
  description?: string;
};

const ProjectCard = ({ video, title, description }: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col items-center gap-[25px] w-full min-h-[600px] h-auto bg-[#0F1624] rounded-[20px] p-[25px_25px_45px_25px] shadow-[0px_0px_12px_0px_#FFF]
    "
    >
      <video autoPlay loop muted className="w-full h-auto rounded-[10px] ">
        <source src={video} type="video/mp4" />
      </video>

      <h3 className="text-2xl font-semibold text-white ">{title}</h3>
      <Image src={"/icons/line.svg"} width={300} height={4} alt="line" />
      <p className="text-lg font-medium text-white text-center ">
        {description}
      </p>
      <button
        type="button"
        className="w-[180px] h-[50px] rounded-[84px] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 text-lg font-medium text-white mt-[41px] "
      >
        <Link href={"https://onewayx.com/"} target="_blank">
          Visit now
        </Link>
      </button>
    </div>
  );
};

export default ProjectCard;

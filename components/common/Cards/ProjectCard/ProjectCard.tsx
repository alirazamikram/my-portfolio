import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export type ProjectCardProps = {
  video?: string;
  title?: string;
  description?: string;
  link: string;
};
interface ThemeState {
  mode: "dark" | "light";
}
const ProjectCard = ({ video, title, description, link }: ProjectCardProps) => {
  const theme = useSelector((state: ThemeState) => state.mode);

  return (
    <div
      className={`flex flex-col items-center gap-[25px] w-full min-h-[735px] h-auto ${
        theme === "dark" ? "darkColor" : "navLightColor"
      } rounded-[20px] p-[25px_25px_45px_25px] ${
        theme === "dark"
          ? "shadow-[0px_0px_12px_0px_#FFF]"
          : "shadow-[0px_0px_12px_0px_#000]"
      } 
    `}
    >
      <video autoPlay loop muted className="w-full h-auto rounded-[10px] ">
        <source src={video} type="video/mp4" />
      </video>

      <h3
        className={`text-2xl font-semibold ${
          theme === "dark" ? "text-white" : "text-black"
        } `}
      >
        {title}
      </h3>
      <Image src={"/icons/line.svg"} width={300} height={4} alt="line" />
      <p
        className={`text-lg font-medium ${
          theme === "dark" ? "text-white" : "text-black"
        } text-center`}
      >
        {description}
      </p>
      <button
        type="button"
        className="w-[180px] h-[50px] rounded-[84px] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 text-lg font-medium text-white mt-[41px] "
      >
        <Link href={link} target="_blank">
          Visit now
        </Link>
      </button>
    </div>
  );
};

export default ProjectCard;

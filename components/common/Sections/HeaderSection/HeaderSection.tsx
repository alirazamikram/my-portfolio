import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export type HeaderSectionPros = {
  id?: string;
};
interface ThemeState {
  mode: "dark" | "light";
}

const HeaderSection = ({ id }: HeaderSectionPros) => {
  const router = useRouter();
  const theme = useSelector((state: ThemeState) => state.mode);

  return (
    <div
      className={`${
        theme === "dark" ? "darkColor" : "lightColor"
      } flex flex-col base:flex-row justify-between items-start base:items-center gap-5 w-full min-h-[700px] h-auto pt-[100px] tab:pt-[100px] pb-[50px] tab:pb-[100px] relative z-10 mainContainer `}
      id={id}
    >
      <div className="flex flex-col justify-center gap-y-8 ">
        <h3
          className={`max-w-[600px]  text-3xl font-medium ${
            theme === "dark" ? "text-white" : "text-black"
          }  `}
        >
          React and Next.js Frontend Web Developer
        </h3>
        <p
          className={`max-w-[600px] text-2xl font-medium ${
            theme === "dark" ? "text-[#BCBCBC]" : "text-black"
          } `}
        >
          My name is AliRaza. I am a React and Next.js Frontend Web Developer. I
          have 2 year experience in frontend developing. I have fully grip with
          complexity UI and related others frontend developing. I have done many
          project about frontend. You can visit my all project in my{" "}
          <Link
            href={"https://github.com/alirazamikram"}
            className="text-blue-500 "
          >
            Github.{" "}
          </Link>
        </p>
        <button
          onClick={() => router.push("/")}
          type="button"
          className="w-[180px] h-[50px] rounded-[84px] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 text-lg font-medium text-white mt-[41px] "
        >
          Let’s begin
        </button>
      </div>
      <div className="w-full base:w-auto flex justify-center items-center ">
        <Image
          src={"/images/hero-img1.png"}
          width={500}
          height={500}
          alt="aliraza-img"
        />
      </div>
    </div>
  );
};

export default HeaderSection;

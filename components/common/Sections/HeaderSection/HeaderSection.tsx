import Image from "next/image";
import React from "react";

const HeaderSection = () => {
  return (
    <div className="w-full min-h-[700px] h-auto pt-[190px] pb-[190px] relative flex flex-col gap-y-8  mainContainer">
      <h3 className="max-w-[989px]  text-[64px] font-semibold text-white  ">
        React and Next.js Frontend Web Developer
      </h3>
      <p className="max-w-[989px] text-[36px] font-semibold text-[#BCBCBC]">
        My name is AliRaza. I am a React and Next.js Frontend Web Developer. I
        have 2 year experience in frontend developing. I have fully grip with
        complexity UI and related others frontend developing. I have done many
        project about frontend. You can visit my all project in my github.
      </p>
      <button
        type="button"
        className="w-[280px] h-[80px] rounded-[84px] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 text-[28px] font-semibold text-white mt-[41px] "
      >
        Let’s begin
      </button>
      <div className="absolute right-0 bottom-[-20px] ">
        <Image
          src={"/icons/box-pic.svg"}
          width={758}
          height={758}
          alt="box-image"
        />
      </div>
    </div>
  );
};

export default HeaderSection;

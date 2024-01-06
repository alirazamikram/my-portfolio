import React from "react";

export type HeaderSectionPros = {
  id?: string;
};

const HeaderSection = ({ id }: HeaderSectionPros) => {
  return (
    <div
      className="w-full min-h-[700px] h-auto pt-[30px] tab:pt-[100px] pb-[50px] tab:pb-[100px] relative z-10 flex flex-col justify-center gap-y-8 bg-[url(/icons/box-pic.svg)] bg-no-repeat bg-contain bg-right mainContainer "
      id={id}
    >
      <h3 className="max-w-[600px]  text-3xl font-medium text-white  ">
        React and Next.js Frontend Web Developer
      </h3>
      <p className="max-w-[600px] text-2xl font-medium text-[#BCBCBC]">
        My name is AliRaza. I am a React and Next.js Frontend Web Developer. I
        have 2 year experience in frontend developing. I have fully grip with
        complexity UI and related others frontend developing. I have done many
        project about frontend. You can visit my all project in my github.
      </p>
      <button
        type="button"
        className="w-[180px] h-[50px] rounded-[84px] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 text-lg font-medium text-white mt-[41px] "
      >
        Let’s begin
      </button>
    </div>
  );
};

export default HeaderSection;

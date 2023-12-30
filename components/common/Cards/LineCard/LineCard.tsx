import React from "react";

export type LineCardProps = {
  title?: string;
  skillLevel?: string;
};
const LineCard = ({ title, skillLevel }: LineCardProps) => {
  return (
    <div className="flex flex-col gap-[10px] w-full tab:w-[80%]">
      <h3 className="w-full text-lg tab:text-2xl font-semibold text-white ">
        {title}
      </h3>
      <div className="w-full h-[18px] tab:h-[24px] rounded-[83px] bg-[#162950] overflow-hidden relative">
        <div
          className={`${skillLevel} h-full rounded-[83px] bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-600 absolute lineGraphAnimation `}
        ></div>
      </div>
    </div>
  );
};
export default LineCard;

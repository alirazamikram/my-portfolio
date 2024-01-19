import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

export type LineCardProps = {
  title?: string;
  skillLevel?: string;
  AOSProps: aosPropsType;
};
interface aosPropsType {
  "data-aos": string;
  "data-aos-offset": string;
  "data-aos-easing": string;
  "data-aos-duration": string;
}
interface ThemeState {
  mode: "dark" | "light";
}
const LineCard = ({ title, skillLevel, AOSProps }: LineCardProps) => {
  const theme = useSelector((state: ThemeState) => state.mode);

  return (
    <div className="flex flex-col gap-[10px] w-full tab:w-[80%]">
      <h3
        className={`w-full text-lg tab:text-2xl font-semibold ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h3>
      <div
        className={`w-full h-[16px] tab:h-[18px] rounded-[83px] ${
          theme === "dark" ? "graphLinelDarkColor" : "navLightColor"
        } overflow-hidden relative`}
      >
        <div
          {...AOSProps}
          className={`${skillLevel} h-full rounded-[83px] bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-600 absolute `}
        />
      </div>
    </div>
  );
};
export default LineCard;

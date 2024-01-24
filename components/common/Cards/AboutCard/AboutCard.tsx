import React from "react";
import { useSelector } from "react-redux";
interface ThemeState {
  mode: "dark" | "light";
}

export type AboutCardProps = {
  text?: string;
};
const AboutCard = ({ text }: AboutCardProps) => {
  const theme = useSelector((state: ThemeState) => state.mode);

  return (
    <div className="w-full max-w-[220px] tab:max-w-[394px] min-h-[200px] tab:min-h-[328px] p-5">
      <p
        className={`text-xs base:text-base font-medium ${
          theme === "dark" ? "text-white" : "text-black"
        } text-center `}
      >
        {text}
      </p>
    </div>
  );
};

export default AboutCard;

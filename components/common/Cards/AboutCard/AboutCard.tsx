import React from "react";
import { useSelector } from "react-redux";
interface ThemeState {
  mode: "dark" | "light";
}
const AboutCard = () => {
  const theme = useSelector((state: ThemeState) => state.mode);

  return (
    <div className="w-full max-w-[220px] tab:max-w-[394px] min-h-[200px] tab:min-h-[328px] p-5">
      <p
        className={`text-xs base:text-base font-medium ${
          theme === "dark" ? "text-white" : "text-black"
        } text-center `}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default AboutCard;

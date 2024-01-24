import Image from "next/image";
import React from "react";
import AboutCard from "../../Cards/AboutCard";
import { useSelector } from "react-redux";
export type AboutSectionProps = {
  id?: string;
};
interface ThemeState {
  mode: "dark" | "light";
}

const AboutSection = ({ id }: AboutSectionProps) => {
  const theme = useSelector((state: ThemeState) => state.mode);
  const dropShadowStyle: React.CSSProperties = {
    filter: theme === "dark" ? undefined : "drop-shadow(0px 0px 1px black)",
  };

  return (
    <div
      className={`${
        theme === "dark" ? "darkColor" : "lightColor"
      } w-full h-auto  pb-[50px] tab:pb-[100px] mainContainer`}
      id={id}
    >
      <h3
        className={`w-full text-[36px] font-semibold ${
          theme === "dark" ? "text-white" : "text-black"
        } pb-10 tab:pb-[87px]`}
      >
        About me
      </h3>
      <div className="w-[80%] m-auto hidden tab:block">
        <div className="w-full flex justify-between">
          <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
            2017
          </p>
          <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
            2021
          </p>
          <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
            2022
          </p>
          <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
            2024
          </p>
        </div>
        <Image
          src={"/images/timeline.png"}
          width={1320}
          height={32}
          alt="timeline-img"
          className={`w-auto h-auto `}
          style={dropShadowStyle}
        />
      </div>
      <div className="flex gap-[15px">
        <div className="block tab:hidden">
          <Image
            src={"/images/timeline2.png"}
            width={20}
            height={32}
            alt="timeline-img"
            className="pt-[50px] pb-[200px] "
            style={dropShadowStyle}
          />
        </div>
        <div className="w-full grid grid-cols-1 tab:grid-cols-4">
          <AboutCard text="I have passed my F.S.C in 2017 in Govt Emersson Universty of Multan." />
          <AboutCard text="I have completed my degree in 2021 in Govt Emersson Universty Multan." />
          <AboutCard text="I had started my internship in 2022 in Hasbi Soft software company." />
          <AboutCard text="Now I'm working as a React and Next.js developer in TheHexaTown." />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

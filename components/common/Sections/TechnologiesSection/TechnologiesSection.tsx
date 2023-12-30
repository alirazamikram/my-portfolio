import React from "react";
import LineCard from "../../Cards/LineCard";

const textData = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Git & Github",
  },
  {
    name: "React.js",
  },
  {
    name: "Next.js",
  },
  {
    name: "Tailwind Css",
  },
  {
    name: "Sass",
  },
  {
    name: "UI Design",
  },
  {
    name: "API Integration",
  },
];
const TechnologiesSection = () => {
  return (
    <div className="w-full h-auto pt-[50px] tab:pt-[100px] pb-[50px] tab:pb-[100px] mainContainer ">
      <h3 className="w-full text-[36px] font-semibold text-white pb-10 tab:pb-[93px] ">
        Technologies
      </h3>
      <div className="flex flex-col gap-10 ">
        <LineCard title="HTML" skillLevel="w-[95%]" />
        <LineCard title="CSS" skillLevel="w-[85%]" />
        <LineCard title="JavaSript" skillLevel="w-[75%]" />
        <LineCard title="TypeScript" skillLevel="w-[75%]" />
        <LineCard title="React.js" skillLevel="w-[90%]" />
        <LineCard title="Next.js" skillLevel="w-[95%]" />
        <LineCard title="UI Design Figma" skillLevel="w-[90%]" />
      </div>
      <div className="mt-[50px] tab:mt-[100px]">
        <h3 className="text-2xl tab:text-[36px] font-semibold text-white pb-10 tab:pb-[82px] ">
          Additional technologies and skills
        </h3>
        <div className="w-full grid grid-cols-1 fold:grid-cols-2 base:grid-cols-3 gap-x-5 gap-y-5 ">
          {/* ---------text with dot -------------------- */}
          {textData.map((item, index) => {
            return (
              <div
                className="flex items-center gap-[15px] text-white"
                key={"dotText" + index}
              >
                <div className="w-[5px] h-[5px] rounded-[50%] bg-[#fff] "></div>
                <p className="text-lg tab:text-2xl font-medium text-[#f0f0f0]">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;

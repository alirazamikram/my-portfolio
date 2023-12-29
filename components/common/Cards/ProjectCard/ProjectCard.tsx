import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div
      className="flex flex-col items-center gap-[25px] w-[550px] min-h-[700px] h-auto bg-[#0F1624] rounded-[50px_20px] p-[25px_25px_45px_25px] shadow-outline shadow-white shadow-2xl
    "
    >
      <Image
        src={"/images/google-img.png"}
        width={500}
        height={266}
        alt="img"
      />
      <h3 className="text-[36px] font-semibold text-white ">PROJECT 1</h3>
      <Image src={"/icons/line.svg"} width={300} height={4} alt="line" />
      <p className="text-[28px] font-semibold text-white text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button
        type="button"
        className="w-[200px] h-[60px] rounded-[83px] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 text-[20px] font-semibold text-white"
      >
        Let’s begin
      </button>
    </div>
  );
};

export default ProjectCard;

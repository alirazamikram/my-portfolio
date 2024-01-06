import Image from "next/image";
import React from "react";
import AboutCard from "../../Cards/AboutCard";
export type AboutSectionProps = {
  id?: string;
};

const AboutSection = ({ id }: AboutSectionProps) => {
  return (
    <div
      className="w-full h-auto  pb-[50px] tab:pb-[100px] mainContainer "
      id={id}
    >
      <h3 className="w-full text-[36px] font-semibold text-white pb-10 tab:pb-[87px] ">
        About me
      </h3>
      <div className="w-[80%] m-auto hidden tab:block">
        <div className="w-full flex justify-between">
          <p className="text-white">2018</p>
          <p className="text-white">2018</p>
          <p className="text-white">2018</p>
          <p className="text-white">2018</p>
        </div>
        <Image
          src={"/images/timeline.png"}
          width={1320}
          height={32}
          alt="timeline-img"
          className="w-auto h-auto"
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
            // className="w-auto h-[90%] mt-[50px] pb-[120px]  "
          />
        </div>
        <div className="w-full grid grid-cols-1 tab:grid-cols-4">
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

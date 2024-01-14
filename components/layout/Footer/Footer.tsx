import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const navIcons = [
  {
    icon: "/icons/github.svg",
    lightIcon: "/icons/github-light.svg",
    link: "https://github.com/alirazamikram",
    alt: "githun",
  },
  {
    icon: "/icons/linkedin.svg",
    lightIcon: "/icons/linkedin-light.svg",
    link: "https://www.linkedin.com/in/aliraza7806/",
    alt: "linkedin",
  },
  {
    icon: "/icons/whatsapp.svg",
    lightIcon: "/icons/whatsapp-light.svg",
    link: "http://wa.me/+923268740798",
    alt: "",
  },
];
interface ThemeState {
  mode: "dark" | "light";
}
const Footer = () => {
  const theme = useSelector((state: ThemeState) => state.mode);

  return (
    <div
      className={`${
        theme === "dark" ? "darkColor" : "lightColor"
      } w-full flex flex-col tab:flex-row gap-10 tab:gap-5 justify-between items-start tab:items-center mainContainer py-[30px] tab:py-[50px] font-montserrat`}
    >
      <div className="flex flex-col tab:flex-row gap-10 tab:gap-[100px] items-start tab:items-center ">
        <div>
          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-lg font-semibold`}
          >
            Call me:
          </h3>
          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-lg font-semibold`}
          >
            0326 8740798
          </h3>
        </div>
        <div>
          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-lg font-semibold`}
          >
            Email:
          </h3>
          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-lg font-semibold`}
          >
            alirazamikraam@gmail.com
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-[31px]">
        {navIcons.map((item, index) => {
          return (
            <Link key={"navIcons" + index} href={item.link} target="_blank">
              <Image
                key={"navIcons" + index}
                src={theme === "dark" ? item.icon : item.lightIcon}
                width={28}
                height={28}
                alt={item.alt}
                className="opacity-80 hover:opacity-100"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;

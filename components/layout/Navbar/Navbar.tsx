import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { title: "Projects" },
  { title: "Technologies" },
  { title: "About me" },
];

const navIcons = [
  { icon: "/icons/github.svg", alt: "githun" },
  { icon: "/icons/linkedin.svg", alt: "linkedin" },
  { icon: "/icons/github.svg", alt: "" },
];

const Navbar = () => {
  return (
    <div className="w-full h-[137px] flex justify-between items-center mainContainer">
      <div className="flex items-center gap-3">
        <Image
          src={"/images/aliraza.png"}
          width={57}
          height={57}
          alt="aliraza-img"
          className="border border-white rounded-[50%] "
        />
        <p className="text-white text-[30px] font-medium  ">Ali Raza</p>
      </div>
      <div className="flex items-center gap-[98px]">
        {navItems.map((item, index) => {
          return (
            <Link
              href={"/"}
              key={"navItems" + index}
              className="text-[30px] font-medium text-white  "
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-[31px]">
        {navIcons.map((item, index) => {
          return (
            <Image
              key={"navIcons" + index}
              src={item.icon}
              width={32}
              height={32}
              alt={item.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

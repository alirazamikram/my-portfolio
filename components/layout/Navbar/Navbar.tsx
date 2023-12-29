"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className="relative z-[110] w-full h-[70px] base:h-[100px] flex justify-between items-center bg-primary mainContainer">
        <div className="flex items-center gap-3">
          <Image
            src={"/images/aliraza.png"}
            width={47}
            height={47}
            alt="aliraza-img"
            className="border border-white rounded-[50%] "
          />
          <p className="text-white text-lg font-medium  ">Ali Raza</p>
        </div>
        <div className="hidden base:flex items-center gap-10  ">
          {navItems.map((item, index) => {
            return (
              <Link
                href={"/"}
                key={"navItems" + index}
                className="text-lg font-medium text-white"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="hidden base:flex items-center gap-[31px]">
          {navIcons.map((item, index) => {
            return (
              <Image
                key={"navIcons" + index}
                src={item.icon}
                width={28}
                height={28}
                alt={item.alt}
              />
            );
          })}
        </div>

        {/* -----------------------Responsive Navbar thumb bars -------------------- */}
        <Image
          src={openNav ? "/icons/close-nav.svg" : "/icons/bars.svg"}
          width={24}
          height={24}
          alt="responsive-img"
          className="block base:hidden"
          onClick={() => setOpenNav(!openNav)}
        />
      </div>
      {/* -------------------Responsive Navbar---------------------- */}
      {openNav && (
        <div className="absolute top-[70px] z-[100] w-full h-screen bg-[#1c2841] p-[40px_20px] flex flex-col justify-start items-center gap-10 navBarAnimation ">
          <div className="flex flex-col items-center gap-10">
            {navItems.map((item, index) => {
              return (
                <Link
                  href={"/"}
                  key={"navItems" + index}
                  className="text-lg font-medium text-white  "
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
                  width={20}
                  height={20}
                  alt={item.alt}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

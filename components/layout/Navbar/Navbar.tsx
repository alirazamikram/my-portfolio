"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink, scroll } from "react-scroll";
import Link from "next/link";

const navItems = [
  { title: "Projects", link: "" },
  { title: "Technologies", link: "" },
  { title: "About me", link: "" },
];

const navIcons = [
  {
    icon: "/icons/github.svg",
    link: "https://github.com/alirazamikram",
    alt: "githun",
  },
  {
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/aliraza7806/",
    alt: "linkedin",
  },
  { icon: "/icons/whatsapp.svg", link: "http://wa.me/+923268740798", alt: "" },
];
export type NavbarProps = {
  ProjectLink?: string;
  technologyLink?: string;
  aboutMeLink?: string;
};
const Navbar = ({ ProjectLink, technologyLink, aboutMeLink }: NavbarProps) => {
  const [activeTab, setActiveTab] = useState("");
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
              <ScrollLink
                to={
                  index === 0
                    ? ProjectLink
                    : index === 1
                    ? technologyLink
                    : index === 2
                    ? aboutMeLink
                    : null
                }
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                key={"navItems" + index}
                className={`text-lg font-medium cursor-pointer ${
                  activeTab === item.title
                    ? "text-white opacity-100"
                    : "text-white opacity-60"
                } `}
                onClick={() => setActiveTab(item.title)}
              >
                {item.title}
              </ScrollLink>
            );
          })}
        </div>
        <div className="hidden base:flex items-center gap-[31px]">
          {navIcons.map((item, index) => {
            return (
              <Link key={"navIcons" + index} href={item.link} target="_blank">
                <Image
                  key={"navIcons" + index}
                  src={item.icon}
                  width={28}
                  height={28}
                  alt={item.alt}
                  className="opacity-80 hover:opacity-100"
                />
              </Link>
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
        <div className=" absolute top-[70px] z-[100] w-full h-screen bg-[#1c2841] p-[40px_20px] flex base:hidden flex-col justify-start items-center gap-10 navBarAnimation ">
          <div className="flex flex-col items-center gap-10">
            {navItems.map((item, index) => {
              return (
                <ScrollLink
                  to={
                    index === 0
                      ? ProjectLink
                      : index === 1
                      ? technologyLink
                      : index === 2
                      ? aboutMeLink
                      : null
                  }
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  key={"navItems" + index}
                  className={`text-lg font-medium cursor-pointer ${
                    activeTab === item.title
                      ? "text-white opacity-100"
                      : "text-white opacity-60"
                  } `}
                >
                  {item.title}
                </ScrollLink>
              );
            })}
          </div>
          <div className="flex items-center gap-[31px]">
            {navIcons.map((item, index) => {
              return (
                <Link key={"navIcons" + index} href={item.link} target="_blank">
                  <Image
                    key={"navIcons" + index}
                    src={item.icon}
                    width={20}
                    height={20}
                    alt={item.alt}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink, scroll } from "react-scroll";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  projectSectionId,
  technologiesSection,
  aboutSection,
} from "../../../app/page";
const navItems = [
  { title: "Projects", id: "projectSection", link: "" },
  { title: "Technologies", id: "technologiesSection", link: "" },
  { title: "About me", id: "aboutSection", link: "" },
];

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
export type NavbarProps = {
  ProjectLink?: string;
  technologyLink?: string;
  aboutMeLink?: string;
};
interface ThemeState {
  mode: "dark" | "light";
}
const Navbar = ({ ProjectLink, technologyLink, aboutMeLink }: NavbarProps) => {
  const [activeTab, setActiveTab] = useState<string | undefined>();
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state: ThemeState) => state.mode);
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = 100;

      const section1 = document.getElementById(projectSectionId);
      const section2 = document.getElementById(technologiesSection);
      const section3 = document.getElementById(aboutSection);

      const scrollPosition = window.scrollY;

      if (section1 !== null && scrollPosition < section1.offsetTop - offset) {
        setActiveTab(undefined);
      } else if (
        section2 !== null &&
        scrollPosition < section2.offsetTop - offset
      ) {
        setActiveTab(ProjectLink);
      } else if (
        section3 !== null &&
        scrollPosition < section3.offsetTop - offset
      ) {
        setActiveTab(technologyLink);
      } else if (
        section3 !== null &&
        scrollPosition >= section3.offsetTop - offset
      ) {
        setActiveTab(aboutMeLink);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveTab]);

  useEffect(() => {
    document.body.style.overflow = openNav ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openNav]);
  return (
    <>
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 z-[110] w-full h-[70px] base:h-[100px] flex justify-between items-center ${
          theme === "dark" ? "navDarkColor" : "navLightColor"
        }  mainContainer`}
      >
        <div className="flex items-center gap-3 cursor-pointer ">
          <Image
            src={"/images/aliraza.png"}
            width={47}
            height={47}
            alt="aliraza-img"
            className={`border ${
              theme === "dark" ? "border-white" : "border-black "
            } rounded-[50%]`}
          />
          <p
            className={`${
              theme === "dark" ? "text-white" : "text-black "
            }  text-lg font-medium `}
          >
            Ali Raza
          </p>
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
                offset={-100}
                duration={500}
                key={"navItems" + index}
                className={`text-lg font-medium cursor-pointer ${
                  activeTab === item.id
                    ? theme === "dark"
                      ? "text-white opacity-100"
                      : "text-black opacity-100 "
                    : theme === "dark"
                    ? "text-white opacity-60"
                    : "text-black opacity-60 "
                } `}
                onClick={() => {
                  setActiveTab(item.id);
                  setOpenNav(false);
                }}
              >
                {item.title}
              </ScrollLink>
            );
          })}
        </div>
        <div className="flex items-center gap-10">
          <div className="hidden base:flex items-center gap-[31px]">
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
          <div
            className="hidden base:flex items-center gap-[10px] cursor-pointer"
            onClick={toggleTheme}
          >
            <Image
              src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon-dark.svg"}
              width={16}
              height={16}
              alt=""
            />
            <h3
              className={`${
                theme === "dark" ? "text-white" : "text-black  "
              } text-sm font-medium`}
            >
              {theme === "dark" ? "Light" : "Dark "}
            </h3>
          </div>
        </div>
        {/* Responsive Navbar thumb bars -------------------- */}
        <div className="flex base:hidden gap-5 ">
          <div className="flex items-center gap-[10px]" onClick={toggleTheme}>
            <Image
              src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon-dark.svg"}
              width={16}
              height={16}
              alt=""
            />
            <h3
              className={`${
                theme === "dark" ? "text-white" : "text-black  "
              } text-xs font-medium`}
            >
              {theme === "dark" ? "Light" : "Dark "}
            </h3>
          </div>
          <Image
            src={
              openNav
                ? theme === "dark"
                  ? "/icons/close-nav.svg"
                  : "/icons/close-nav-light.svg"
                : theme === "dark"
                ? "/icons/bars.svg"
                : "/icons/bars-light.svg"
            }
            width={24}
            height={24}
            alt="responsive-img"
            onClick={() => setOpenNav(!openNav)}
          />
        </div>
      </div>
      {/* -------------------Responsive Navbar---------------------- */}
      {openNav && (
        <div
          className={`fixed top-[70px] z-[100] w-full h-screen ${
            theme === "dark" ? "darkColorResponsiveNavbar" : "lightColor"
          }  p-[40px_20px] flex base:hidden flex-col justify-start items-center gap-10 navBarAnimation `}
        >
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
                  offset={-90}
                  duration={500}
                  key={"navItems" + index}
                  onClick={() => {
                    setActiveTab(item.id);
                    setOpenNav(false);
                  }}
                  className={`text-lg font-medium cursor-pointer ${
                    activeTab === item.id
                      ? theme === "dark"
                        ? "text-white opacity-100"
                        : "text-black opacity-100 "
                      : theme === "dark"
                      ? "text-white opacity-60"
                      : "text-black opacity-60 "
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
                    src={theme === "dark" ? item.icon : item.lightIcon}
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

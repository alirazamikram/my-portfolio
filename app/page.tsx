"use client";
import React from "react";
import HomeWrapper from "@/components/Wrapper/HomeWrapper/HomeWrapper";
import AboutSection from "@/components/common/Sections/AboutSection/AboutSection";
import HeaderSection from "@/components/common/Sections/HeaderSection";
import ProjectSection from "@/components/common/Sections/ProjectSection";
import TechnologiesSection from "@/components/common/Sections/TechnologiesSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const projectSectionId = "projectSection";
export const technologiesSection = "technologiesSection";
export const aboutSection = "aboutSection";
export default function Home() {
  return (
    <HomeWrapper>
      <div className="bg-primary font-montserrat ">
        <Navbar
          ProjectLink={"projectSection"}
          technologyLink="technologiesSection"
          aboutMeLink="aboutSection"
        />
        <HeaderSection id="headerSection" />
        <ProjectSection id="projectSection" />
        <TechnologiesSection id="technologiesSection" />
        <AboutSection id="aboutSection" />
        <Footer />
      </div>
    </HomeWrapper>
  );
}

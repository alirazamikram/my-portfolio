import React, { ReactNode } from "react";
import store from "@/redux/store";
import { Provider } from "react-redux";
import AboutSection from "@/components/common/Sections/AboutSection/AboutSection";
import HeaderSection from "@/components/common/Sections/HeaderSection";
import ProjectSection from "@/components/common/Sections/ProjectSection";
import TechnologiesSection from "@/components/common/Sections/TechnologiesSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";

const HomeWrapper = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default HomeWrapper;
export const projectSection = "projectSection";
export const technologiesSection = "technologiesSection";
export const aboutSection = "aboutSection";

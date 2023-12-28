import React from "react";
import Navbar from "./components/layout/Navbar";
import HeaderSection from "./components/common/Sections/HeaderSection";
import ProjectSection from "./components/common/Sections/ProjectSection";
export default function Home() {
  return (
    <div className="bg-primary font-poppins ">
      <Navbar />
      <HeaderSection />
      <ProjectSection />
    </div>
  );
}

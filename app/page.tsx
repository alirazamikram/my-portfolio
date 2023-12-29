import HeaderSection from "@/components/common/Sections/HeaderSection";
import ProjectSection from "@/components/common/Sections/ProjectSection";
import Navbar from "@/components/layout/Navbar";
import React from "react";
export default function Home() {
  return (
    <div className="bg-primary font-montserrat ">
      <Navbar />
      <HeaderSection />
      <ProjectSection />
    </div>
  );
}

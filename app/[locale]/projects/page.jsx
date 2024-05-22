import React from "react";
import Nav from "../../components/Nav";
import ProjectsPage from "@/app/components/ProjectsPage";

const page = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="max-w-[1440px] w-[100%]">
        <Nav />
        <ProjectsPage />
      </div>
    </div>
  );
};

export default page;

import React from "react";
import SearchBar from "@/app/components/SearchBar";
import ProjectsCard from "@/app/components/ProjectsCard";
// import EngineeringIcon from "@mui/icons-material/Engineering";

const page = () => {
  return (
    <div className="max-w-[1440px] min-h-[100vh] w-[100%]">
      <SearchBar />
      <ProjectsCard />
      {/* <div className="flex justify-center items-center h-[60vh] gap-3">
        <span>
          <EngineeringIcon fontSize="large"/>
        </span>{" "}
        <span className="md:text-[50px] text-[30px]">Under Maintnance</span>
      </div> */}
    </div>
  );
};

export default page;

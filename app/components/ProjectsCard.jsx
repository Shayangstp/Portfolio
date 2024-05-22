import React from "react";
import Image from "next/image";
import test from "../assets/test.jpg";
import { Button } from "@mui/material";

const ProjectsCard = () => {
  return (
    <div className="mt-16 mb-10">
      <div
        id="card"
        className="border border-gray-700 max-w-[30%] rounded-2xl p-5"
      >
        <div id="image" className="p-5 rounded-t-2xl relative">
          <Image
            src={test}
            className="rounded-2xl border-2 border-black shadow"
          />
          <div
            id="project-name"
            className="absolute w-[150px] h-[60px] -bottom-3 left-2  bg-red-800 flex justify-center items-center"
          >
            Shayan
          </div>
        </div>
        <div id="content" className="p-5">
          <header id="header" className="mt-5 text-red-500">
            this is Header
          </header>
          <div id="line" className="border-t border-red-600 mt-3"></div>
          <div id="content" className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            minima eos, distinctio quod ut impedit est odit deserunt aperiam
            beatae rem, ea tenetur expedita sint perferendis, sunt iusto
            temporibus molestias nam debitis repellat accusamus unde dolorum
            enim? Amet incidunt sequi velit deleniti fugit vel maiores,
            quibusdam minima quisquam! Enim, animi.
          </div>
          <div id="line" className="border-t border-gray-600 mt-3"></div>
          <div id="hashtags" className="flex gap-4 mt-3 text-blue-400">
            <p className="cursor-pointer">#front</p>
            <p>#back</p>
            <p>#react</p>
            <p>#mongo</p>
          </div>
          <div id="buttons" className="flex justify-end gap-3 mt-10">
            <Button variant="contained" className="bg-white text-black">
              GitHub
            </Button>
            <Button variant="outlined" className="border-white text-white">
              More Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

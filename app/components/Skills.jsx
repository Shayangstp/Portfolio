import React from "react";
import { skillsData } from "../helpers/index";

const Skills = () => {
  return (
    <div className="h-[90vh] relative max-w-[1920px] w-[100%] mt-24 p-16">
      <div id="header" className="text-[70px] ms-16">
        <span className="text-[70px]">Skills.</span>
        <span className="text-[30px] text-red-600">Development</span>
      </div>
      <div id="skills" className="flex gap-10 justify-center mt-16">
        {skillsData.map((item) => {
          return (
            <div
              id="card"
              className={`border border-gray-600 max-w-[25%] h-[350px] ${item.bgColor} bg-opacity-10 p-5 rounded-2xl hover:border-b-red-700 hover:shadow-sm hover:shadow-red-800`}
            >
              <header className="">
                <span className="text-[50px] font-extrabold">{item.no}</span>
                <span className={`text-[30px] ${item.titleColor}`}>
                  {item.title}
                </span>
              </header>
              <div id="list" className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => {
                  if (idx !== item.skills.length - 1) {
                    return (
                      <p className="text-[20px] hover:text-red-700 cursor-pointer mt-2">
                        {skill.title} ,
                      </p>
                    );
                  } else {
                    return (
                      <p className="text-[20px] hover:text-red-700 cursor-pointer mt-2">
                        {skill.title} .
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

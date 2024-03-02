import React from "react";
import { skillsData } from "../helpers/index";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";

const Skills = () => {
  return (
    <div className="h-[90vh] relative max-w-[1920px] w-[100%] mt-40 p-16">
      <div id="header" className="text-[70px]rounded-2xl py-2 px-5 max-w-min ">
        <div className="flex items-center">
          <span>
            <HandymanOutlinedIcon className="me-2 text-[50px]" />
          </span>
          <span className="text-[70px]">Skills.</span>
          <span className="text-[30px] text-red-600 mt-7">Development</span>
        </div>
      </div>
      <div id="skills" className="flex gap-10 justify-center mt-32">
        {skillsData.map((item) => {
          console.log(item.bgColor);
          return (
            <div
              id="card"
              className={`border border-gray-600 max-w-[25%] h-[350px] cursor-pointer rounded-2xl hover:border-b-red-700`}
            >
              <header
                className={`${item.bgColor} bg-opacity-10 rounded-t-2xl p-3 px-5`}
              >
                <span className="text-[50px]">{item.no}</span>
                <span className={`text-[30px]`}>{item.title}</span>
              </header>
              <div className="border border-gray-700"></div>
              <div id="list" className="mt-5 flex flex-wrap gap-2 p-2 px-4">
                {item.skills.map((skill, idx) => {
                  if (idx !== item.skills.length - 1) {
                    return (
                      <p className="text-[20px]  cursor-pointer mt-2">
                        <span className="hover:text-red-700">
                          {skill.title}
                        </span>{" "}
                        /
                      </p>
                    );
                  } else {
                    return (
                      <p className="text-[20px] cursor-pointer mt-2">
                        <span className="hover:text-red-700">
                          {skill.title}
                        </span>{" "}
                        .
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

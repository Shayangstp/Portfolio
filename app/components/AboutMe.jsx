import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="sm:grid sm:grid-cols-4 flex flex-col justify-center items-start gap-4 sm:gap-0">
        <div className="text-[25px] col-span-1 text-center">
          <span>About-</span>
          <span className="text-red-700">Me</span>
        </div>
        <div
          id="line"
          className="sm:w-[95%] w-[100%] sm:mb-0 mb-4 sm:mx-0 mx-auto sm:col-span-3 sm:h-0 sm:mt-5 mt-0 border border-gray-600"
        ></div>
      </div>
      <p className="text-[13px] leading-6 text-gray-800 dark:text-gray-400 ms-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo
        et, aspernatur eos facilis necessitatibus laboriosam modi sed dolor,
        fuga voluptate. Ad voluptatibus fugit doloribus nihil soluta suscipit
        sequi porro nisi aut id. Quam cum fugiat consequuntur est, natus quos!
      </p>
    </div>
  );
};

export default AboutMe;

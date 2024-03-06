import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="text-[25px] col-span-1 text-center">
          <span>About-</span>
          <span className="text-red-700">Me</span>
        </div>
        <div
          id="line"
          className="w-[95%] col-span-3 h-0 my-auto border border-gray-600"
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

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@material-tailwind/react";

const AboutMe = () => {
  const t = useTranslations("Hero");
  const localeActive = useLocale();
  return (
    <div>
      {/* <div className="sm:grid sm:grid-cols-4 flex flex-col justify-center items-start gap-4 sm:gap-0"> */}
      <div className="sm:text-[45px] text-[30px] col-span-1 ms-2">
        <span>
          {t("aboutMe1")}
          <span className={`${localeActive === "fa" ? "hidden" : ""}`}>-</span>
        </span>
        <span className="text-red-700">
          <span className={`${localeActive === "en" ? "hidden" : ""}`}>
            &nbsp;
          </span>
          {t("aboutMe2")}
        </span>
      </div>
      {/* </div> */}
      <p className="text-[13px] leading-6 text-gray-800 dark:text-gray-400 ms-2 mt-2">
        {t("aboutMe3")}
      </p>
      <div className="w-full mt-16 flex justify-end gap-4">
        <Button
          variant="outlined"
          className="border  border-gray-700 dark:border-gray-400 text-gray-600  dark:text-gray-200  hover:bg-transparent  hover:text-black lg:py-3 py-2.5 px-5 lg:px-6 hover:border-red-500 dark:hover:border-red-500 text-[12px] sm:text-[14px]"
          href="/projects"
        >
          {t("projectBtn")}
        </Button>
        <Button
          variant="contained"
          className="bg-gray-800 px-5 lg:px-6 lg:py-3 py-2.5  hover:bg-red-900 text-[12px] sm:text-[14px]"
          href="#skill-section"
        >
          {t("skillBtn")}
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;

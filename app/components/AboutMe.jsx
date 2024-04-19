import React from "react";
import { useLocale, useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("Hero");
  const localeActive = useLocale();
  return (
    <div>
      <div className="sm:grid sm:grid-cols-4 flex flex-col justify-center items-start gap-4 sm:gap-0">
        <div className="text-[25px] col-span-1 text-center">
          <span>
            {t("aboutMe1")}
            <span className={`${localeActive === "fa" ? "hidden" : ""}`}>
              -
            </span>
          </span>
          <span className="text-red-700">
            <span className={`${localeActive === "en" ? "hidden" : ""}`}>
              &nbsp;
            </span>
            {t("aboutMe2")}
          </span>
        </div>
        <div
          id="line"
          className="sm:w-[95%] w-[100%] sm:mb-0 mb-4 sm:mx-0 mx-auto sm:col-span-3 sm:h-0 sm:mt-5 mt-0 border border-gray-600"
        ></div>
      </div>
      <p className="text-[13px] leading-6 text-gray-800 dark:text-gray-400 ms-2 mt-2">
        {t("aboutMe3")}
      </p>
    </div>
  );
};

export default AboutMe;

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
// import { Button } from "@mui/material";

const AboutMe = () => {
  const t = useTranslations("Hero");
  const localeActive = useLocale();
  const router = useRouter();

  return (
    <div>
      {/* <div className="sm:grid sm:grid-cols-4 flex flex-col justify-center items-start gap-4 sm:gap-0"> */}
      <div className="sm:text-[45px] text-[30px] col-span-1 ms-2">
        <span>
          {t("aboutMe1")}
          <span className={`${localeActive === "fa" ? "hidden" : ""}`}>-</span>
        </span>
        <span className="dark:text-red-700 text-blue-600">
          <span className={`${localeActive === "en" ? "hidden" : ""}`}>
            &nbsp;
          </span>
          {t("aboutMe2")}
        </span>
      </div>
      {/* </div> */}
      <p className="text-[13px] leading-6 text-gray-800 dark:text-gray-400 ms-2 mt-4">
        {t("aboutMe3")}
      </p>
      <div className="w-full mt-10 flex justify-end gap-4">
        <Button
          variant="outlined"
          className="border-2 border-gray-700 dark:border-gray-400 text-gray-900  dark:text-white  hover:bg-gray-200 dark:bg-transparent hover:text-black dark:hover:text-white lg:py-3 py-2.5 px-5 lg:px-6 hover:border-blue-500 dark:hover:border-red-500 text-[12px] sm:text-[14px]"
          onClick={() => {
            router.push("/projects");
          }}
          style={{ zIndex: 1 }}
          // color="primary"
          // sx={{
          //   borderColor: "white",

          // }}
        >
          {t("projectBtn")}
        </Button>
        <Button
          variant="contained"
          style={{ zIndex: 1 }}
          className="dark:bg-white bg-black dark:text-black text-white px-5 lg:px-6 lg:py-3 py-2.5 dark:hover:bg-gray-200 hover:bg-gray-900 text-[12px] sm:text-[14px]"
          onClick={() => {
            router.push(`${localeActive}/#skill-section`);
          }}
        >
          {t("skillBtn")}
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;

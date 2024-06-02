import React, { useEffect, useState } from "react";
import PDFDownload from "./PDFDownload";
import PDFViewer from "./PDFViewer";
import { useLocale, useTranslations } from "next-intl";
import DescriptionIcon from "@mui/icons-material/Description";
import PageReLoader from "./PageReloader";

const Resume = () => {
  const t = useTranslations("resume");
  const localeActive = useLocale();

  // const [preLoader, setPreloader] = useState(true);

  // useEffect(() => {
  //   setPreloader((pre) => !pre);
  // }, [preLoader]);

  return (
    <div dir={localeActive === "en" ? "ltr" : "rtl"}>
      {/* <PageReLoader /> */}
      <div id="header" className="md:ms-16 ms-2 mt-10 flex items-center">
        <span>
          <DescriptionIcon
            className={`text-[50px] ${
              localeActive === "fa" ? "text-red-500" : ""
            }`}
          />
        </span>
        <span className="text-[70px] ms-2">{t("resumeTitle1")}</span>
        {localeActive === "en" && (
          <span className="text-[20px] md:text-[30px] text-red-600 mt-7 ms-2">
            {t("resumeTitle2")}
          </span>
        )}
      </div>
      <PDFDownload />
      <PDFViewer />
    </div>
  );
};

export default Resume;
